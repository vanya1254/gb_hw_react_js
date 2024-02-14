import { Message } from "./components";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <Message
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, labore."
          textBtn="Resend"
        />
      </div>
    </div>
  );
}

export default App;
