import React from "react";
import { useDispatch } from "react-redux";

import { changeTheme } from "../../redux/slices/theme/slice";

import styles from "./SwitcherTheme.module.scss";

export const SwitcherTheme = () => {
  const dispatch = useDispatch();

  const onClickBtn = () => {
    dispatch(changeTheme());
  };

  return (
    <button className={styles.root} onClick={onClickBtn}>
      CHANGE THEME
    </button>
  );
};
