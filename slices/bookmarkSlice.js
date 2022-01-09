import { createSlice } from "@reduxjs/toolkit";

const initialBookmarks = { bookmarks: [] };

const bookmarkSlice = createSlice({
  name: "Bookmarks",
  initialState: initialBookmarks,
  reducers: {
    addBookmark(currentState, action) {
      currentState.bookmarks.push(action.payload);
    },
    removeBookmark(currentState, action) {
      currentState.bookmarks = currentState.bookmarks.filter(
        ({ title, date, explanation }) => {
          if (
            title !== action.payload.title &&
            date !== action.payload.date &&
            explanation !== action.payload.explanation
          )
            return true;
          else return false;
        }
      );
    },
  },
});

export const { addBookmark, removeBookmark } = bookmarkSlice.actions;

export default bookmarkSlice.reducer;
