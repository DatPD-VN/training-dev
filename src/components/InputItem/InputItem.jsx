import React, { useEffect, useState } from "react";
import { Button, Container } from "reactstrap";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import TodoList from "../TodoList/TodoList";
import EditTodo from "../EditTodo/EditTodo";
import axios, { Axios } from "axios";

const InputItem = () => {
  const [taskData, setTaskData] = useState({
    title: "",
    description: "",
    status: "",
  });
  const nagative = useNavigate();
  const [showTaskData, setShowTaskData] = useState([]);
  const [successAlertMsg, setSuccessAlertMsg] = useState("");
  const [todoDeleteMsg, setTodoDeleteMsg] = useState("");
  const [editTaskDataModal, setEditTaskDataModal] = useState(false);
  const [successTodoUpdatedMsg, setSuccessTodoUpdateMsg] = useState("");

  const [editTaskData, setEditTaskData] = useState({
    title: "",
    description: "",
  });

  useEffect(() => {
    getTaskData();
  }, []);

  const getTaskData = async () => {
    let token = sessionStorage.getItem("token");
    let headers = new Headers();
    const header = `Authorization: Bearer ${token}`;

    headers.append("Content-Type", "application/json");
    headers.append("Accept", "application/json");

    headers.append("Access-Control-Allow-Origin", true);
    headers.append("Access-Control-Allow-Credentials", true);
    // headers.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
        mode: 'no-cors',
        credentials: 'include',
        headers: headers,
    };

    async function getData() {
      const url = "http://127.0.0.1:8000/admin/APIusers/";

      try {
        const response = await axios.get(url, requestOptions)
        console.log(response);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        console.log(json);
      } catch (error) {
        console.error(error.message);
      }
    }

    getData();

    // await axios
    //   .get("http://127.0.0.1:8000/admin/APIusers/", requestOptions)
    //   .then(function (response) {
    //     // handle success
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     // handle error
    //     console.log(error);
    //   })
    //   .finally(function () {
    //     // always executed
    //   });
  };

  const addItem = () => {
    let token = sessionStorage.getItem("token");
    var formdata = new FormData();
    formdata.append("title", taskData.title);
    formdata.append("description", taskData.description);
    var requestOptions = {
      method: "POST",
      body: formdata,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    fetch(`${process.env.REACT_APP_API_URL}/api/user/todos`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.status === "success") {
          setSuccessAlertMsg(result.message);
          getTaskData();
          setTimeout(() => {
            setSuccessAlertMsg("");
          }, 1000);
        }
        if (result.error === false) {
          setTaskData({
            title: "",
            description: "",
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onChangehandler = (e) => {
    const tmpTaskData = { ...taskData };
    tmpTaskData[e.target.name] = e.target.value;
    setTaskData(tmpTaskData);
  };

  const clearList = () => {
    setShowTaskData([]);
  };

  const handleDelete = (id) => {
    let token = sessionStorage.getItem("token");
    var requestOptions = {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };
    fetch(
      `${process.env.REACT_APP_API_URL}/api/user/todos/${id}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        if (result.status === "success") {
          setTodoDeleteMsg(result.message);
          getTaskData();
          setTodoDeleteMsg("");
        }
      });
  };

  const toggleEditTaskModal = () => {
    setEditTaskDataModal(!editTaskDataModal);
  };
  const onChangeEditTodoHandler = (e) => {
    let tmpEditTaskData = { ...editTaskData };
    tmpEditTaskData[e.target.name] = e.target.value;
    setEditTaskData(tmpEditTaskData);
  };

  const editTodo = (id, title, description) => {
    setEditTaskData({ id, title, description });
    setEditTaskDataModal(!editTaskDataModal);
  };

  const updateTodo = () => {
    let { id, title, description } = editTaskData;
    let token = sessionStorage.getItem("token");
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("title", title);
    urlencoded.append("description", description);

    var requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: urlencoded,
    };

    fetch(
      `${process.env.REACT_APP_API_URL}/api/user/todos/${id}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        if (result.status === "success") {
          setEditTaskDataModal(false);
          setEditTaskData({ title, description });
          this.getTaskData();

          setTimeout(() => {
            setEditTaskDataModal(false);
          }, 1000);
        }
        if (result.errors === false) {
          setSuccessTodoUpdateMsg(result.message);
        }
      })
      .catch((error) => console.log("error", error));
  };

  const isLoggedIn = sessionStorage.getItem("isLoggedIn");
  //   console.log(isLoggedIn);
  if (!isLoggedIn) {
    return nagative("/login");
  }

  return (
    <Container className="themed-container mt-5" fluid="sm">
      <div className="input-field-container">
        <div className="flex items-center justify-center space-x-4">
          <TextField
            type="text"
            name="title"
            placeholder="Task Title"
            value={taskData.title}
            onChange={onChangehandler}
            color="primary"
            variant="outlined"
          />
          <TextField
            type="text"
            name="description"
            placeholder="Task description"
            value={taskData.description}
            onChange={onChangehandler}
            color="primary"
            variant="outlined"
            style={{ width: "50%" }}
          />
          <Button
            color="success"
            className="font-weight-bold add-task text-xl p-5 bg-blue-600 mx-5 h-14 rounded-md  flex items-center justify-center"
            onClick={addItem}
          >
            +
          </Button>
        </div>
      </div>
      <div className="text-success p-4 mt-2">{successAlertMsg}</div>
      {/*TODO list  */}
      <TodoList
        showTaskData={showTaskData}
        clearList={clearList}
        handleDelete={handleDelete}
        todoDeleteMsg={todoDeleteMsg}
        editTodo={editTodo}
        toggleEditTaskModal={toggleEditTaskModal}
      />
      {/* Model for Edit Todo */}
      <EditTodo
        toggleEditTaskModal={toggleEditTaskModal}
        editTaskDataModal={editTaskDataModal}
        onChangeEditTodoHandler={onChangeEditTodoHandler}
        editTodo={editTodo}
        editTaskData={editTaskData}
        updateTodo={updateTodo}
        successTodoUpdatedMsg={successTodoUpdatedMsg}
      />
    </Container>
  );
};

export default InputItem;
