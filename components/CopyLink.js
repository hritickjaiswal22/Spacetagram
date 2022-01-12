import React, { useRef } from "react";

import styles from "./CopyLink.module.scss";

function CopyLink({ value }) {
  return (
    <div className={styles.container}>
      <input readOnly value={value} className={styles.container__input} />
      <button className={styles.container__btn}>Copy link</button>
    </div>
  );
}

export default CopyLink;
