import { createSlice } from "@reduxjs/toolkit";

const initialBookmarks = { bookmarks: [] };

const bookmarkSlice = createSlice({
  name: "Bookmarks",
  initialState: initialBookmarks,
  reducers: {
    addBookmark(currentState, action) {
      console.log(
        `Current state is ${currentState} and payload is ${action.payload}`
      );
    },
  },
});

export const { addBookmark } = bookmarkSlice.actions;

export default bookmarkSlice.reducer;
