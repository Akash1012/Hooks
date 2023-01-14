function reducers(state, action) {
  switch (action.type) {
    case "incerement":
      return {
        ...state,
        count: state.count + 1,
      };
    case "decrement":
      return {
        ...state,
        count: state.count - 1,
      };
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, newTodo(action.payload.name)],
      };
    case "TOGGLE_TODO":
      return {
        ...state,
        // todos: state.todos.filter((c) => {
        //   if (c.id === action.payload.id) {
        //     return (c.complete = !c.complete);
        //   } else {
        //     return c;
        //   }
        // }),

        todos: state.todos.map((todo) => {
          if (todo.id === action.payload) {
            return {
              ...todo,
              complete: !todo.complete,
            };
          }
          return todo;
        }),
      };
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    default:
      return state;
  }
  console.log("akahs", state);
}

function newTodo(name) {
  return {
    id: Date.now(),
    name: name,
    complete: false,
  };
}

export default reducers;
