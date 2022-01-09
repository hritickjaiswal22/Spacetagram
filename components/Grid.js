import React, { useEffect, useState } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import { useDispatch } from "react-redux";

import Card from "./Card";
import Spinner from "./Spinner";
import { addBookmark, removeBookmark } from "../slices/bookmarkSlice";

import styles from "./Grid.module.scss";

function Grid() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=okjHDbbhtNkpPBaERuk0I0mmRWHyq1fbJRmOapAM&count=6"
      )
      .then((res) => {
        setIsLoading(false);
        setData(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  function fetchMoreData() {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=okjHDbbhtNkpPBaERuk0I0mmRWHyq1fbJRmOapAM&count=6"
      )
      .then((res) => {
        setData((prevData) => [...new Set([...prevData, ...res.data])]);
      })
      .catch((error) => console.log(error));
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
  }

  return (
    <InfiniteScroll
      dataLength={data.length}
      next={fetchMoreData}
      hasMore={true}
      loader={<Spinner />}
    >
      <article onClick={clickHandler} className={styles.gridContainer}>
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
      </article>
    </InfiniteScroll>
  );
}

export default Grid;
