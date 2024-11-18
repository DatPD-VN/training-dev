import React from "react";

const TodoItem = ({ title, description, handleDelete, editTodo }) => {
  return (
    <li className="list-group-item flex space-x-5 text-capitalize items-center  my-2 w-full">
      <div className="flex bg-slate-200 p-3 rounded-lg justify-start min-w-[80%]" >
        <b style={{ marginRight: "100px" }}>{title}</b>
        <h6>{description}</h6>
      </div>
      <div className=" flex items-center justify-center m-0 space-x-0 space-y-0">
        <span className="mx-2 bg-blue-400 p-3 rounded-lg cursor-pointer text-white hover:opacity-90   " onClick={editTodo}>
          Edit
        </span>
        <span className="mx-2 bg-red-400 p-3 rounded-lg cursor-pointer text-white hover:opacity-90  " onClick={handleDelete}>
          Delete
        </span>
      </div>
    </li>
  );
};

export default TodoItem;