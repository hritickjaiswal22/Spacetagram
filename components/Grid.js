import React, { useEffect, useState } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";

import Card from "./Card";
import Spinner from "./Spinner";

import styles from "./Grid.module.scss";

function Grid() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=okjHDbbhtNkpPBaERuk0I0mmRWHyq1fbJRmOapAM&count=6"
      )
      .then((res) => {
        setIsLoading(false);
        setData(res.data);
      });
  }, []);

  function fetchMoreData() {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=okjHDbbhtNkpPBaERuk0I0mmRWHyq1fbJRmOapAM&count=6"
      )
      .then((res) => {
        setData((prevData) => [...new Set([...prevData, ...res.data])]);
      });
  }

  return (
    <InfiniteScroll
      dataLength={data.length}
      next={fetchMoreData}
      hasMore={true}
      loader={Spinner}
    >
      <article className={styles.gridContainer}>
        {isLoading ? (
          <Spinner />
        ) : (
          data.map(({ date, media_type, url, title, explanation }) => {
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
          })
        )}
      </article>
    </InfiniteScroll>
  );
}

export default Grid;
