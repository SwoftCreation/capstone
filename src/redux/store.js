import { configureStore } from "@reduxjs/toolkit";
import communitySlice from "./communitySlice";

const store = configureStore({
  reducer: {
    communityReducer: communitySlice,
  },
});

export default store;
