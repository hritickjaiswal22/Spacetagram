import React, { Fragment } from "react";
import Image from "next/image";

import styles from "./Card.module.scss";
import BtnLike from "./BtnLike";
import CopyLink from "./CopyLink";

function Card({ date, explanation, title, url, media_type, btnLikeClassName }) {
  return (
    <Fragment>
      {media_type === "image" && explanation.length !== 0 ? (
        <div data-imageurl={url} className={styles.card}>
          <div className={styles.card__imageBox}>
            <Image
              alt={title}
              className={styles.card__image}
              src={url}
              layout="fill"
            />
          </div>
          <div className={styles.card__descriptionBox}>
            <h1 className={styles.card__title}>{title}</h1>
            <small className={styles.card__date}>{date}</small>
            <p className={styles.card__description}>{explanation}</p>
            <BtnLike className={btnLikeClassName} />
            <CopyLink value={url} />
          </div>
        </div>
      ) : (
        ""
      )}
    </Fragment>
  );
}

export default Card;
