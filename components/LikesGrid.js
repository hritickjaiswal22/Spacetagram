import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Masonry from "react-masonry-css";

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

  const breakPoints = {
    default: 3,
    1200: 2,
    800: 1,
  };

  return (
    <Masonry
      onClick={clickHandler}
      breakpointCols={breakPoints}
      className={styles["my-masonry-grid"]}
      columnClassName={styles["my-masonry-grid_column"]}
    >
      {bookmarks.length === 0 ? (
        <h1 className={styles.message}>You have no bookmarks</h1>
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
    </Masonry>
  );
}

export default LikesGrid;
