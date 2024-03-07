import { configureStore } from "@reduxjs/toolkit";

import theme from "../redux/slices/theme/slice";

export const store = configureStore({
  reducer: { theme },
});
