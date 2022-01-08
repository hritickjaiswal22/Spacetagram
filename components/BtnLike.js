import React from "react";

import styles from "./BtnLike.module.scss";

function BtnLike() {
  function clickHandler(e) {
    e.target.classList.toggle(styles["liked"]);
  }

  return <button onClick={clickHandler} className={styles.likeBtn}></button>;
}

export default BtnLike;
