import React from "react";

import styles from "./Comment.module.scss";

export const Comment = ({ value, onRemove }) => {
  return (
    <div className={styles.root}>
      <p className={styles.root_text}>{value.text}</p>
      <button onClick={() => onRemove(value.id)} className={styles.root_remove}>
        X
      </button>
    </div>
  );
};
