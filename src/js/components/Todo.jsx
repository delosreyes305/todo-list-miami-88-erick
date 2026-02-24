import React, { useEffect } from "react";
import { useState } from "react";

export const Todo = ({ id, getTodos, todos, todoValue, setTodos }) => {
  const [isHovered, setIsHovered] = useState(false);

  const deleteTodos = async() => {
    const response = await fetch(
      "https://playground.4geeks.com/todo/todos/" + id,
      {
        method: "DELETE"
      }
    );
    getTodos();
    //console.log("Todo to be deleted: ", index);
    //const newTodos = [...todos];
    //newTodos.splice(index, 1);
    //setTodos(newTodos);
  };

  return (
    <div className="container">
      <div
        className="row col-8 mx-auto p-2 border"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="col-1">
          <i className="fa-solid fa-thumbtack"></i>
        </div>
        <div className="col-10">
          <h2>{todoValue}</h2>
        </div>
        <div className="col-1">
          {isHovered ? (
            <span className="text-danger" onClick={() => deleteTodos()}>
              {" "}
              <i
                className="fa-solid me-5 fa-circle-xmark fa-2lg"
                style={{ color: "rgb(212, 36, 36)" }}
              ></i>
            </span>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Todo;
