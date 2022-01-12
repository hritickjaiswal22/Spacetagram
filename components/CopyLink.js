import React, { useRef } from "react";

import styles from "./CopyLink.module.scss";

function CopyLink({ value }) {
  const inputRef = useRef();

  const clickHandler = (e) => {
    inputRef.current.select();
    inputRef.current.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(inputRef.current.value);
    e.target.innerText = "Copied";
  };

  return (
    <div className={styles.container}>
      <input
        readOnly
        ref={inputRef}
        value={value}
        className={styles.container__input}
      />
      <button onClick={clickHandler} className={styles.container__btn}>
        Copy link
      </button>
    </div>
  );
}

export default CopyLink;
