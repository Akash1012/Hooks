import React from "react";

export default function todo({ todo, dispatch }) {
  return (
    <div>
      <span style={{ color: todo.complete ? "#AAA" : "#000" }}>
        {todo.name}
      </span>
      <button
        onClick={() =>
          dispatch({
            type: "TOGGLE_TODO",
            payload: todo.id,
          })
        }
      >
        Toggle
      </button>
      <button
        onClick={() =>
          dispatch({
            type: "DELETE_TODO",
            payload: todo.id,
          })
        }
      >
        Delete
      </button>
    </div>
  );
}
