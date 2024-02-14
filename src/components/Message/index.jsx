import React from "react";

import styles from "./Message.module.scss";

export const Message = ({ text, textBtn }) => {
  return (
    <div className={styles.root}>
      <p className={styles.root__text}>{text}</p>
      <div className={styles.root__action}>
        <button className={styles.root_btn}>{textBtn}</button>
      </div>
    </div>
  );
};
