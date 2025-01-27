import "./App.css";

import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="App-header">
          <h1>
            <img src="/static/media/logo.d0c1d31414907bfa6204.png" alt="logo" />{" "}
            English Dictionary
          </h1>
        </div>

        <main>
          <Dictionary />
        </main>

        <footer>
          This project was coded by Rebecca and is open spurced on Github
        </footer>
      </div>
    </div>
  );
}

export default App;
