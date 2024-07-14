import Results from "./Results";

function App() {
  return (
    <div className="container">
      <header className="m-5">
        <h1 className="title">2019 UK general election alliance calculator</h1>
      </header>

      <Results year="2019" />

      <hr />

      <footer className="is-size-7 m-5">
        <p>
          Data:{" "}
          <a href="https://commonslibrary.parliament.uk/research-briefings/cbp-8749/">
            General Election 2019: full results and analysis
          </a>
        </p>
        <p>
          Code:{" "}
          <a href="https://github.com/bencampion/election-alliance-calculator">
            https://github.com/bencampion/election-alliance-calculator
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
