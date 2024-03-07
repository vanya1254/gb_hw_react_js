import { useSelector } from "react-redux";
import { themeSelector } from "./redux/slices/theme/selectors";

import { SwitcherTheme } from "./components";

import "./App.css";

const App = () => {
  const TOGGLE_THEME = {
    dark: { backgroundColor: "black", color: "white" },
    light: { backgroundColor: "white", color: "black" },
  };

  const { isDark } = useSelector(themeSelector);

  return (
    <div
      className="App"
      style={isDark ? TOGGLE_THEME.dark : TOGGLE_THEME.light}
    >
      <h1>Has the Theme changed?</h1>
      <SwitcherTheme />
    </div>
  );
};

export default App;
