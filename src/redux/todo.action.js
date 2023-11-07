import * as appActions from './app.action';

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

// thunk
export const addTodoThunk = todo => (dispatch, getState) => {
  const todos = getState().todo.todos;
  if(todos.length >= 12) {
    alert('Todo list is full');
    return;
  }

  dispatch(appActions.setLoading(true));

  setTimeout(() => {
    dispatch(addTodo(todo))
    dispatch(appActions.setLoading(false));
  }, 1000);
}