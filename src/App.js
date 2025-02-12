import "./App.css";
import "./logo.png";
import Dictionary from "./Dictionary";

import React from "react";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <h1>
          {" "}
          English Dictionary
          <img
            src="/static/media/logo.d0c1d31414907bfa6204.png"
            alt="logo"
          ></img>
        </h1>
      </div>

      <div className="container">
        <span class="dots">•••</span>
        <main>
          <Dictionary />
        </main>
      </div>

      <br />
      <footer>
        This project was coded by Rebecca and is open sourced on{" "}
        <a href="https://github.com/RebeccaNiem/dictionary2">Github</a>
      </footer>
    </div>
  );
}

export default App;
