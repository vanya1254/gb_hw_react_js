import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { readTasks } from "./redux/tasks/slice";

import { TasksList } from "./components/TasksList";

import "./App.css";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(readTasks());
  }, [dispatch]);

  return (
    <div className="App">
      <h1>Task Manager</h1>
      <TasksList />
    </div>
  );
};

export default App;
