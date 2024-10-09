import { createSlice } from '@reduxjs/toolkit'

export const userDataSlice = createSlice({
  name: 'userData',
  initialState:{
    value: JSON.parse(localStorage.getItem("userData")) || null,
  },
  reducers: {
    userData: (state,action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { userData } = userDataSlice.actions

export default userDataSlice.reducer