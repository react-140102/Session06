import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../store'
import { Task } from './Task';



const initialState = {
  tasks : [
    { id: 1, title: "React hooks", done: true },
    { id: 2, title: "Ajax", done: false },
  ]
}

const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<string>) => {
      //immerjs
      state.tasks.push({
        id: Math.random(),
        title: action.payload,
        done: false
      })
    },
    toggleTask: (state, action: PayloadAction<number>) => {
      const task = state.tasks.find(x =>x.id === action.payload);
      if(task){
        task.done = !task?.done;
      }
    },
    removeTask: (state, action: PayloadAction<number>) => {
      state.tasks = state.tasks.filter(x =>x.id !== action.payload);      
    },
    editTask: (state, action: PayloadAction<{id: number, title: string}>) => {
      const task = state.tasks.find(x =>x.id === action.payload.id);
      if(task){
        task.title = action.payload.title;
      }     
    },
  }
});

export const {addTask, toggleTask, removeTask, editTask} =  taskSlice.actions;

export default taskSlice.reducer;

export const taskSelector = (state: RootState) => state.task;