import React, { useState } from "react";
import { Todo } from "./Todo";

//create your first component
const Home = () => {
  //value={inputValue}
  //onChange={(event) => setInputValue(event.target.value)}
  //onKeyDown={handleInputChange}

  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (inputValue.trim() === "") return;

    setTodos([...todos, inputValue]);
    setInputValue("");
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      addTodo();
    }
  };

  return (


    <div className="text-center">
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
        todos.map((label, index) => (
          <Todo
            todoValue={label}
            setTodos={setTodos}
            todos={todos}
            index={index}
            key={index}
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
