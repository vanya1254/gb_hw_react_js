import { configureStore } from "@reduxjs/toolkit";

import tasks from "./tasks/slice";

export const store = configureStore({
  reducer: { tasks },
});
