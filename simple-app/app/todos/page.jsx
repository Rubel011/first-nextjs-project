"use client";
import Link from "next/link";
import { useState } from "react";
import TodoItem from "./TodoItem";

const TodoHome = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState({ title: "", description: "" });

  const handleInputChange = (e) => {
    setNewTodo({
      ...newTodo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo.title.trim() === "" || newTodo.description.trim() === "") {
      return;
    }

    setTodos([...todos, newTodo]);
    setNewTodo({ title: "", description: "" });
  };

  return (
    <div className="text-center mt-8">
      
      <h1 className="text-4xl font-bold mb-4">This is the Todo home page</h1>
      <div className="max-w-md mx-auto flex space-x-4">
        <Link
          href="/counter"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
        >
          Redirect to Counter page
        </Link>
        <Link
          href="/posts"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
        >
          Redirect to Posts page
        </Link>
      </div>
      <div className="max-w-md mx-auto my-8">
        <h1 className="text-3xl font-bold mb-4">
          Below you can add a new todo
        </h1>
        <form onSubmit={handleSubmit} className="mb-4">
          <input
            type="text"
            name="title"
            value={newTodo.title}
            onChange={handleInputChange}
            placeholder="Enter title for the todo"
            className="w-full border p-2 mb-2"
          />
          <input
            type="text"
            name="description"
            value={newTodo.description}
            onChange={handleInputChange}
            placeholder="Enter description for the todo"
            className="w-full border p-2 mb-2"
          />
          <input
            type="submit"
            value="Add Todo"
            className="bg-blue-500 text-white p-2 cursor-pointer"
          />
        </form>

        <h1 className="text-3xl font-bold mb-4">Below Todos will be visible</h1>
        <div>
          {todos.map((todo, index) => (
            <TodoItem key={index} {...todo} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoHome;
