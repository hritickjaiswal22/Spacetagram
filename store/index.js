import { configureStore } from "@reduxjs/toolkit";

import bookmarkReducer from "../slices/bookmarkSlice";

const store = configureStore({
  reducer: {
    bookmarkState: bookmarkReducer,
  },
});

export default store;
