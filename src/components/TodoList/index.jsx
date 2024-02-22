import React, { useState } from "react";
import {
  TextField,
  Button,
  ListItem,
  ListItemText,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

import styles from "./TodoList.module.scss";

export const TodoList = () => {
  const [todoList, setTodoList] = useState([]);
  const [value, setValue] = useState("");

  const onChangeValue = (e) => {
    setValue(e.target.value);
  };

  const onClickAdd = () => {
    if (value) {
      setTodoList([...todoList, { id: todoList.length, text: value }]);
    }
  };

  const onClickDelete = (id) => {
    setTodoList([...todoList.filter((t) => t.id !== id)]);
  };

  return (
    <div className={styles.root}>
      <div className={styles.root__input}>
        <TextField
          size="small"
          label="Todo..."
          value={value}
          onChange={onChangeValue}
        />
        <Button
          className={styles.root_btn}
          onClick={onClickAdd}
          variant="contained"
        >
          Add
        </Button>
      </div>
      <div className={styles.root__todos}>
        {todoList.map((todo, i) => (
          <ListItem
            key={todo.id}
            component="li"
            secondaryAction={
              <IconButton
                onClick={() => onClickDelete(todo.id)}
                edge="end"
                aria-label="delete"
              >
                <DeleteIcon />
              </IconButton>
            }
          >
            <ListItemText primary={`${i + 1}. ${todo.text}`} />
          </ListItem>
        ))}
      </div>
    </div>
  );
};
