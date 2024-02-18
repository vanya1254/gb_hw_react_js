import React, { useRef, useState } from "react";

import { Comment } from "../";

import styles from "./CommentsList.module.scss";

export const CommentsList = () => {
  const [comments, setComments] = useState([
    { id: 1, text: "Это первый комментарий" },
    { id: 2, text: "Это второй комментарий" },
    { id: 3, text: "Это третий комментарий" },
  ]);
  const inputRef = useRef();

  const onClickRemove = (id) => {
    const filteredComments = comments.filter((comment) => comment.id !== id);
    setComments(filteredComments);
  };

  const onClickAdd = () => {
    if (inputRef.current.value !== "") {
      const comment = { id: comments.length, text: inputRef.current.value };
      setComments([...comments, comment]);
    }
  };

  return (
    <div className={styles.root}>
      <div className={styles.root__addComment}>
        <input
          className={styles.root__addComment_input}
          ref={inputRef}
          type="text"
        />
        <button onClick={onClickAdd} className={styles.root__addComment_btn}>
          Add
        </button>
      </div>
      {comments.map((comment) => (
        <Comment key={comment.id} value={comment} onRemove={onClickRemove} />
      ))}
    </div>
  );
};
