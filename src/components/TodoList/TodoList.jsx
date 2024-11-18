import React from "react";
import Button from "reactstrap/lib/Button";
import TodoItem from "../TodoItem/TodoItem";

const TodoList = ({
  showTaskData,
  clearList,
  handleDelete,
  todoDeleteMsg,
  editTodo,
}) => {
  let taskData = [];

  if (showTaskData.length) {
    console.log(showTaskData)
    taskData = showTaskData.map((task) => {
      return (
        <TodoItem
          key={task.id}
          title={task.name}
          description={task.email}
          handleDelete={() => {
            handleDelete(task.id);
          }}
          todoDeleteMsg={todoDeleteMsg}
          editTodo={() => {
            editTodo(task.id, task.title, task.description);
          }}
        />
      );
    });
  }

  return (
    <ul className="list-group my-2 flex flex-col items-center justify-start ">
      <h3 className="text-capitalize text-2xl ">Todo List </h3>
      <div className="flex justify-content-between mb-5">
        Task and Description
      </div>
      <div className="flex flex-col items-start justify-center">
        {taskData}
      </div>
      <button color="danger" onClick={clearList} className="bg-red-600 py-2 px-52 rounded-md mt-10 mb-24 text-white ">
        Clear all
      </button>
      <p className="text-danger">{todoDeleteMsg}</p>
    </ul>
  );
}

export default TodoList;