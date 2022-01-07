import React from "react";

import styles from "./Spinner.module.scss";

function Spinner() {
  return (
    <div class={styles.spinner}>
      <div class={styles.bounce1}></div>
      <div class={styles.bounce2}></div>
      <div class={styles.bounce3}></div>
    </div>
  );
}

export default Spinner;
