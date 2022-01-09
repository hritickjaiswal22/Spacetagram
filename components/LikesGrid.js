import React from "react";
import { useSelector, useDispatch } from "react-redux";

import styles from "./LikesGrid.module.scss";
import Card from "./Card";
import { removeBookmark } from "../slices/bookmarkSlice";

function LikesGrid() {
  const bookmarks = useSelector((state) => state.bookmarkState.bookmarks);
  const dispatch = useDispatch();

  function clickHandler(e) {
    if (e.target.className.includes("likeBtn")) {
      const parent = e.target.parentElement;
      const grandParent = parent.parentElement;

      const title = parent.querySelector("h1").innerText;
      const date = parent.querySelector("small").innerText;
      const explanation = parent.querySelector("p").innerText;

      dispatch(removeBookmark({ title, date, explanation }));
    }
  }

  return (
    <article onClick={clickHandler} className={styles.gridContainer}>
      {bookmarks.length === 0 ? (
        <h1 className={styles.message}>You've got no bookmarks</h1>
      ) : (
        bookmarks.map(({ date, url, title, explanation }) => {
          return (
            <Card
              key={title}
              date={date}
              media_type="image"
              url={url}
              title={title}
              explanation={explanation}
              btnLikeClassName="liked"
            />
          );
        })
      )}
    </article>
  );
}

export default LikesGrid;
