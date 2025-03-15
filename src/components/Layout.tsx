import { Link, Outlet, useLocation } from "react-router-dom";

export default function Layout({ outlet }: { outlet?: React.JSX.Element }) {
  const location = useLocation();

  return (
    <div style={{ maxWidth: "1392px", margin: "auto" }}>
      <header className="m-5">
        <h1 className="title">UK general election alliance calculator</h1>
        <nav>
          <div className="tabs is-large is-boxed">
            <ul>
              {["2024", "2019", "2017", "2015"].map((year) => (
                <li
                  key={year}
                  className={
                    location.pathname.endsWith(year) ? "is-active" : ""
                  }
                >
                  <Link to={`/${year}`}>{year}</Link>
                </li>
              ))}
              <li className={location.pathname === "/" ? "is-active" : ""}>
                <Link to="/">About</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      {outlet ?? <Outlet />}

      <hr className="mx-5" />

      <footer className="is-size-7 m-5">
        <p>
          Data:{" "}
          <a href="https://electionresults.parliament.uk/">
            UK Parliament election results
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
