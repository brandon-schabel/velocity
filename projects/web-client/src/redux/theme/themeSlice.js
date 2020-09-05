import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
  name: 'theme',
  initialState: {
    selectedTheme: 'light',
  },
  reducers: {
    setTheme: (state, action) => {
      console.log(state)
      state.selectedTheme = action.payload
    },
  },
})

export const { setTheme } = slice.actions

export const selectTheme = state => state.theme.selectedTheme

export default slice.reducer
