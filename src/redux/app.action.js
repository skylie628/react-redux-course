export const SET_LOADING = 'APP/SET_LOADING';
export const SET_THEME = 'APP/SET_THEME';

// action creator
export const setLoading = payload => ({
  type: SET_LOADING,
  payload
})

export const setTheme = theme => ({
  type: SET_THEME,
  payload: {
    theme
  }
})
