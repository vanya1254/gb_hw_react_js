import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { TASKS as tasksData } from "../../data/tasks";

export const readTasks = createAsyncThunk("tasks/readTasks", async () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(tasksData), 1000);
  });
});

const initialState = {
  tasksList: [],
  status: "pending",
};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(readTasks.pending, (state) => {
        state.status = "pending";
      })
      .addCase(readTasks.fulfilled, (state, action) => {
        state.tasksList = action.payload;
        state.status = "fulfilled";
      })
      .addCase(readTasks.rejected, (state, action) => {
        state.error = action.error.message;
        state.status = "rejected";
      });
  },
});

export const {} = tasksSlice.actions;

export default tasksSlice.reducer;
