import { combineReducers, createStore, applyMiddleware } from "redux";

import { appReducer } from '../redux/app.reducer';
import { todoReducer } from "../redux/todo.reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  app: appReducer,
  todo: todoReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk));

/*
store = {
  app: {
    isLoading: false,
    theme: 'light'
  },
  todo: {
    todos: [],
    todoItem: null
  }
}


const storeReducer = {
   switch (type) {
    case appAction.SET_LOADING:
      return {
        ...state,
        isLoading: payload 
      }
    case todoAction.FETCH_TODO:
      return {
        ...state,
        todos: payload 
      }
    case todoAction.APP_CHANGE_THEME:
      return {
        ...state,
        app: {
          ...state.app,
          theme: payload
        }
      }
    case todoAction.ADD_TODO: {
      return {
        ...state,
        // todos: state.todos.concat(payload)
        todos: [...state.todos, payload]
      }
    }
    default:
      return state;
  }
}
*/

// todos: state.todo.todos