import React, { useState, useEffect } from "react";
import { Todo } from "./Todo";

//create your first component
const Home = () => {

  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = async () => {
    if (inputValue.length > 0) {
      const response = await fetch(
        "https://playground.4geeks.com/todo/todos/Erick",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            label: inputValue,
            is_done: false,
          }),
        },
      );
      const data = await response.json();
      getTodos();
      setInputValue("");
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      addTodo();
    }
  };

  const getTodos = async () => {
    const response = await fetch(
      "https://playground.4geeks.com/todo/users/Erick",
    );
    if (!response.ok) {
      console.log("Something went wrong!");
      return;
    }
    const data = await response.json();
    console.log(data);
    setTodos(data.todos);
    return data;
  };

  const createUser = async () => {
    const response = await fetch(
      "https://playground.4geeks.com/todo/users/Erick",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        //body: JSON.stringify({

        //})
      },
    );
    if (!response.ok) {
      getTodos();
      return;
    }
    const data = await response.json();
    return data;
  };

  useEffect(() => {
    createUser().then(() => getTodos());
  }, []);

  return (
    <div className="text-center m-3">
      <h1>Todo List</h1>
      <input
        className="form-control w-50 mx-auto"
        type="text"
        placeholder="Add a new task"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button className="btn btn-success m-3" onClick={() => addTodo()}>
        Add Task
      </button>

      {todos.length !== 0 ? (
        todos.map((todo, index) => (
          <Todo
            todoValue={todo.label}
            setTodos={setTodos}
            todos={todos}
            index={index}
            key={todo.id}
            id={todo.id}
            getTodos={getTodos}
          />
        ))
      ) : (
        <h3>No todos current, please add one</h3>
      )}
      <div className="container d-flex justify-content-center">
        <div className="text-center">
          <h5 className="ms-50">
            {todos.length === 1
              ? `${todos.length} item left!`
              : `${todos.length} items left!`}
          </h5>
        </div>
      </div>

      <p className="mt-3 fixed-bottom bg-success p-2 text-light">
        Made by{" "}
        <a
          className="text-light"
          href="https://www.linkedin.com/in/erickdelosreyes/"
        >
          Erick de los Reyes
        </a>
        , with love!
      </p>
    </div>
  );
};

export default Home;
