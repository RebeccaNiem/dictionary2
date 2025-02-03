import "./App.css";
import logo from "./logo.png";
import Dictionary from "./Dictionary";
import Results from "./Results";
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
        <main>
          <Dictionary />
          <Results results="result" />
        </main>
      </div>

      <footer>
        This project was coded by Rebecca and is open spurced on Github
      </footer>
    </div>
  );
}

export default App;
