import React from "react";

const TodoItem = ({ title, description }) => {
  return (
    <div className="flex space-x-2 border p-4 mb-4">
      <h2 className="text-xl font-bold ">{title}</h2>
      <p className=" font-medium mt-1">{`:-- ${description}`}</p>
    </div>
  );
};

export default TodoItem;
