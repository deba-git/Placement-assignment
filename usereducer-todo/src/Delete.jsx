import React from 'react'

const Delete = ({state,dispatch,Todo_task}) => {
  return (
   <>
   {state.map((todo) => (
        <li key={todo.id}>
          {todo.name}

          <span>
            <button
              onClick={(e) =>
                dispatch({ type: Todo_task.Delete_Task, payload: todo.id })
              }
            >
              Delete
            </button>
          </span>
        </li>
      ))}
   </>
  )
}

export default Delete ;