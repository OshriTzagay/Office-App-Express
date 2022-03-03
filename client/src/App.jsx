import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Workers from "./Components/Pages/Worker-Compo/Workers";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
      </header>

      <Workers/>
    </div>
  );
}

export default App;
