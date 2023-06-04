import React, { useReducer } from "react";
import Delete from "./Delete";

const initialState = [];

const Todo_task = {
  Add_Task: "Add",
  Delete_Task: "Delete",
  Reset_todo: "Reset",
};

// All logic  write is in reduccer function
function reducer(state, action) {
  switch (action.type) {
    case Todo_task.Add_Task:
      return [
        ...state,
        {
          id: state.length + 1,
          name: action.payload,
        },
      ];

    case Todo_task.Delete_Task:
      return state.filter((d) => d.id !== action.payload);

    case Todo_task.Reset_todo:
      return init(action.payload);

    default:
      return state;
  }
}

function init(initialState) {
  return initialState;
}

const Todo = () => {
  const [state, dispatch] = useReducer(reducer, initialState, init);

  return (
    <>
      <h4> Todo List {state.length}</h4>
      Add <br />
      <input
        type="text"
        onBlur={(e) =>
          dispatch({ type: Todo_task.Add_Task, payload: e.target.value })
        }
      />
      <button
        onClick={() =>
          dispatch({ type: Todo_task.Reset_todo, payload: initialState })
        }
      >
        {" "}
        RESET{" "}
      </button>
      <hr />
      <Delete state ={state} dispatch ={dispatch} Todo_task ={Todo_task}/>
    </>
  );
};

export default Todo;
