export const FETCH_TODO = 'TODO/FETCH_TODO';
export const ADD_TODO = 'TODO/ADD_TODO';
export const DELETE_TODO = 'APP/DELETE_TODO';

// action creator
export const fetchTodo = payload => ({
  type: FETCH_TODO,
  payload
})

export const addTodo = payload => ({
  type: ADD_TODO,
  payload
})

export const deleteTodo = todoId => ({
  type: DELETE_TODO,
  payload: {
    todoId
  }
})