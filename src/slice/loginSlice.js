import { createSlice } from '@reduxjs/toolkit'

export const loginSlice = createSlice({
  name: 'user',
  initialState:{
    value: JSON.parse(localStorage.getItem("user")) || null ,
  },
  reducers: {
    userInfo: (state,action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { userInfo } = loginSlice.actions

export default loginSlice.reducer