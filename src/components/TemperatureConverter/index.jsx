import React, { useRef } from "react";

import { TextField, Button } from "@mui/material";

import styles from "./TemperatureConverter.module.scss";

export const TemperatureConverter = () => {
  const fieldCRef = useRef();
  const fieldFRef = useRef();

  const convert = (value, measureUnit) => {
    if (measureUnit === "c") {
      return (Number(value) * (9 / 5) + 32).toFixed(2);
    }
    if (measureUnit === "f") {
      return ((Number(value) - 32) * (5 / 9)).toFixed(2);
    }
  };

  const onClickConvert = () => {
    const inputC = fieldCRef.current.querySelector("#outlined-basic");
    const inputF = fieldFRef.current.querySelector("#outlined-basic");

    if (inputC.value) {
      inputF.value = convert(inputC.value, "c");
    } else if (inputF.value) {
      inputC.value = convert(inputF.value, "f");
    }
  };

  return (
    <div className={styles.root}>
      <div className={styles.root__fields}>
        <TextField
          ref={fieldCRef}
          id="outlined-basic"
          label="°C"
          variant="outlined"
          autoFocus
        />
        {"<-->"}
        <TextField
          ref={fieldFRef}
          id="outlined-basic"
          label="℉"
          variant="outlined"
        />
      </div>
      <Button
        onClick={onClickConvert}
        className={styles.root_btn}
        size="small"
        variant="contained"
      >
        Convert
      </Button>
    </div>
  );
};
