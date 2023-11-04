import * as appAction from './app.action';

const initialState = {
  isLoading: false,
  theme: 'light'
}

export const appReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case appAction.SET_LOADING:
      return {
        ...state,
        isLoading: payload 
      }
    default:
      return state;
  }
}

// appReducer, todoReducer
// todoReducer
// appReducer, todoReducer