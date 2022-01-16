import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import { useDispatch } from "react-redux";
import Masonry from "react-masonry-css";

import Card from "./Card";
import Spinner from "./Spinner";
import { addBookmark, removeBookmark } from "../slices/bookmarkSlice";

import styles from "./Grid.module.scss";

function Grid() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const errorBoxRef = useRef();

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=okjHDbbhtNkpPBaERuk0I0mmRWHyq1fbJRmOapAM&count=3"
      )
      .then((res) => {
        setIsLoading(false);
        setData(res.data);
      })
      .catch((error) => {
        errorBoxRef.current.innerText =
          error.message + " Please reload again!!";
        errorBoxRef.current.classList.add(styles.active);
      });
  }, []);

  function fetchMoreData() {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=okjHDbbhtNkpPBaERuk0I0mmRWHyq1fbJRmOapAM&count=3"
      )
      .then((res) => {
        setData((prevData) => [...new Set([...prevData, ...res.data])]);
      })
      .catch((error) => {
        errorBoxRef.current.innerText =
          error.message + " Please reload again!!";
        errorBoxRef.current.classList.add(styles.active);
      });
  }

  function clickHandler(e) {
    if (e.target.className.includes("likeBtn")) {
      e.target.classList.toggle("liked");

      const parent = e.target.parentElement;
      const grandParent = parent.parentElement;

      const title = parent.querySelector("h1").innerText;
      const date = parent.querySelector("small").innerText;
      const explanation = parent.querySelector("p").innerText;
      const url = grandParent.dataset.imageurl;

      if (e.target.classList.contains("liked")) {
        dispatch(addBookmark({ title, date, explanation, url }));
      } else {
        dispatch(removeBookmark({ title, date, explanation, url }));
      }
    }

    if (e.target.className.includes("CopyLink")) {
      const parent = e.target.parentElement;

      const input = parent.querySelector("input");

      input.select();
      input.setSelectionRange(0, 99999);

      navigator.clipboard.writeText(input.value);
      e.target.innerText = "Copied";
    }
  }

  const breakPoints = {
    default: 3,
    1200: 2,
    800: 1,
  };

  return (
    <InfiniteScroll
      dataLength={data.length}
      next={fetchMoreData}
      hasMore={true}
      loader={<Spinner />}
    >
      <Masonry
        onClick={clickHandler}
        breakpointCols={breakPoints}
        className={styles["my-masonry-grid"]}
        columnClassName={styles["my-masonry-grid_column"]}
      >
        <aside ref={errorBoxRef} className={styles.errorBox}></aside>
        {data.map(({ date, media_type, url, title, explanation }) => {
          return (
            <Card
              key={title}
              date={date}
              media_type={media_type}
              url={url}
              title={title}
              explanation={explanation}
            />
          );
        })}
      </Masonry>
    </InfiniteScroll>
  );
}

export default Grid;
