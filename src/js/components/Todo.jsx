import React from "react";
import { useState } from "react";

export const Todo = ({ index, todos, todoValue, setTodos }) => {
  const [isHovered, setIsHovered] = useState(false);

  const deleteTodos = () => {
    console.log("Todo to be deleted: ", index);
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="container">
      
      <div
        className="row col-8 mx-auto p-2 border"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="col-11">
          <h2>{todoValue}</h2>
         
        </div>
        <div className="col-1">
          {isHovered ? (
            <span className="text-danger border rounded-5" onClick={() => deleteTodos()}>
              {" "}
              X
            </span>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Todo;
