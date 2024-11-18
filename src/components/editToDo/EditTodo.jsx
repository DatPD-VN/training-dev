import React from "react";
import { Button } from "reactstrap";
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";


const EditTodo = ({
  editTaskDataModal,
  onChangeEditTodoHandler,
  editTaskData,
  successTodoUpdatedMsg,
  toggleEditTaskModal,
  updateTodo
}) => {
  return (
    <div>
      <Dialog
        fullWidth
        open={editTaskDataModal}
        onClose={onChangeEditTodoHandler}
        modal={false}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Update Todo</DialogTitle>
        <DialogContent>
          <DialogContentText>Todo List</DialogContentText>
          <div className="input-field-container">
            <div >
              <TextField
                autoFocus
                type="text"
                name="title"
                placeholder="Task Title"
                value={editTaskData.title}
                onChange={onChangeEditTodoHandler}
                className="task-title"
                color="primary"
                variant="outlined"
                style={{ width: "35%" }}
              />
              <TextField
                type="text"
                name="description"
                placeholder="Task description"
                value={editTaskData.description}
                onChange={onChangeEditTodoHandler}
                color="primary"
                variant="outlined"
                style={{ width: "60%" }}
              />
            </div>
          </div>
        </DialogContent>
        <div className="text-success p-4 mt-2">
          {successTodoUpdatedMsg}
        </div>
        <DialogActions>
          <Button onClick={toggleEditTaskModal} color="primary">
            Cancel
          </Button>
          <Button
            onClick={updateTodo}
            color="success"
            className="font-weight-bold add-task"
          >
            UPDATE
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default EditTodo;