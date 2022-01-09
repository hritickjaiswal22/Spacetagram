import React from "react";

import styles from "../styles/likes.module.scss";
import Header from "../components/Header";
import LikesGrid from "../components/LikesGrid";

function likes() {
  return (
    <main>
      <Header />
      <h1 className={styles.mainHeading}>Your Likes</h1>
      <LikesGrid />
    </main>
  );
}

export default likes;
