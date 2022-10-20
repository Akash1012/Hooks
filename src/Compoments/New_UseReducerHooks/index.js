import React, { useState, useReducer } from "react";
import Todo from "./todo";
import reducers from "./reducers";

const NewReducerHook = () => {
  const [name, setName] = useState("");
  const [state, dispatch] = useReducer(reducers, {
    count: 0,
    todos: [],
  });

  function increment() {
    dispatch({
      type: "incerement",
    });
  }

  function decrement() {
    dispatch({
      type: "decrement",
    });
  }

  console.log(state);

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({
      type: "ADD_TODO",
      payload: {
        name: name,
      },
    });
    setName("");
  }
  return (
    <div style={{ padding: "20px" }}>
      <button onClick={decrement}>-</button>
      <span>{state.count}</span>
      <button style={{ marginBottom: "20px" }} onClick={increment}>
        +
      </button>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {state.todos.map((todo) => {
        return (
          <Todo key={todo.id} todo={todo} state={state} dispatch={dispatch} />
        );
      })}
    </div>
  );
};

export default NewReducerHook;
