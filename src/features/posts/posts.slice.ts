import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from 'store'

const initialState = {};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {}
})

export default postsSlice;