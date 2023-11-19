import * as todoAction from './todo.action';

const initialState = {
 todos: [],
 todoItem: null,
 theme: 'xx'
}

export const todoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case todoAction.FETCH_TODO:
      return {
        ...state,
        todos: payload 
      }
    case todoAction.ADD_TODO: {
      return {
        ...state,
        // todos: state.todos.concat(payload)
        todos: [...state.todos, payload]
      }
    }
    case todoAction.DELETE_TODO: {
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== payload.todoId)
      }
    }
    default:
      return state;
  }
}