import { configureStore } from "@reduxjs/toolkit";
import communitySlice from "./communitySlice";
const store = configureStore({
  reducer: {
    communityReducer: communitySlice,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
