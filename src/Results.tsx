import { useEffect, useState } from "react";
import { countVotes } from "./countVotes";
import { Party, Result } from "./data/types";

const partyNames: Record<string, JSX.Element | string> = {
  apni: <abbr title="Alliance Party of Northern Ireland">APNI</abbr>,
  brexit: <abbr title="Brexit Party">Brexit</abbr>,
  con: <abbr title="Conservative Party">Conservative</abbr>,
  dup: <abbr title="Democratic Unionist Party">DUP</abbr>,
  green: <abbr title="Green Party">Green</abbr>,
  lab: <abbr title="Labour Party">Labour</abbr>,
  ld: <abbr title="Liberal Democrats">Lib Dems</abbr>,
  pc: "Plaid Cymru",
  sdlp: <abbr title="Social Democratic and Labour Party">SDLP</abbr>,
  sf: "Sinn Féin",
  snp: <abbr title="Scottish National Party">SNP</abbr>,
  uup: <abbr title="Ulster Unionist Party">UUP</abbr>,
  other: "Other",
  left: "Left Alliance",
  right: "Right Alliance",
};

function useSearchParam(
  name: string,
): [string[], (newValues: string[]) => void] {
  const searchParams = new URLSearchParams(window.location.search);
  const [values, setValues] = useState(searchParams.getAll(name));
  return [
    values,
    (newValues) => {
      setValues(newValues);
      const url = new URL(window.location.toString());
      url.searchParams.delete(name);
      newValues.forEach((value) => url.searchParams.append(name, value));
      url.searchParams.sort();
      window.history.replaceState({}, "", url);
    },
  ];
}

function Results({ year }: { year: "2019" }) {
  const [left, setLeft] = useSearchParam("left");
  const [right, setRight] = useSearchParam("right");

  const alliances = { left, right };
  const [data, setData] = useState({
    majoritySeats: {} as Record<Party, number>,
    results: [] as Result[],
  });
  useEffect(() => {
    import(`./data/${year}.ts`).then(setData);
  }, [year]);
  const results = countVotes(alliances, data.majoritySeats, data.results);

  const constituencies = Object.values(data.majoritySeats).reduce(
    (prev, curr) => prev - curr,
    650,
  );
  const wikiLink = `https://en.wikipedia.org/wiki/${year}_United_Kingdom_general_election`;

  return (
    <main>
      <p className="subtitle mx-5">
        There were <strong>{constituencies}</strong> constituencies in the{" "}
        <a href={wikiLink}>{year} United Kingdom general election</a> where the
        winner got less than 50 percent of the votes. What would have happened
        if parties had formed alliances to combine their votes behind a single
        candidate in each of those constituencies?
      </p>

      <Seats results={results} alliances={alliances} />

      <section className="columns">
        <Alliance
          name="Left"
          members={left}
          setMembers={setLeft}
          opponents={right}
        />
        <Alliance
          name="Right"
          members={right}
          setMembers={setRight}
          opponents={left}
        />
      </section>

      <SeatChanges results={results} />
    </main>
  );
}

function Seats({
  results,
  alliances,
}: {
  results: ReturnType<typeof countVotes>;
  alliances: Record<string, string[]>;
}) {
  return (
    <section className="m-5 mx-5">
      <div
        className="field is-grouped is-grouped-centered is-grouped-multiline"
        role="table"
      >
        {Object.entries(results.seats)
          .filter((seat) => seat[1] > 0)
          .sort((a, b) => b[1] - a[1])
          .map(([party, count]) => (
            <SeatCount
              key={party}
              party={party}
              count={count}
              alliances={alliances}
            />
          ))}
      </div>
      <p className="has-text-centered">
        <strong>326</strong> seats needed for a majority
      </p>
    </section>
  );
}

function SeatCount({
  party,
  count,
  alliances,
}: {
  party: string;
  count: number;
  alliances: Record<string, string[]>;
}) {
  return (
    <div className="control" role="row">
      <div
        className="tags has-addons mb-0 is-justify-content-center"
        role="rowheader"
      >
        {(alliances[party] ?? [party]).map((party) => (
          <span key={party} className={`tag is-${party}`} />
        ))}
        <span className="tag is-dark">{partyNames[party]}</span>
      </div>
      <div className="title has-text-centered" role="cell">
        {count}
      </div>
    </div>
  );
}

function Alliance({
  name,
  members,
  setMembers,
  opponents,
}: {
  name: string;
  members: string[];
  setMembers: (newValues: string[]) => void;
  opponents: string[];
}) {
  const toggleMembership = (e: React.ChangeEvent<HTMLInputElement>) => {
    const party = e.target.value;
    setMembers(
      members.includes(party)
        ? members.filter((m) => m !== party)
        : [...members, party],
    );
  };
  const parties = Object.keys(partyNames).filter(
    (party) => party !== "left" && party !== "right",
  );
  return (
    <div>
      <h2 className="title is-4 mb-1">{name} Alliance</h2>
      <fieldset>
        <legend className="mb-3">
          Select parties to combine their votes to form a{" "}
          <strong>{name} Alliance</strong>.
        </legend>
        <div className="field is-grouped is-grouped-multiline">
          {parties.map((party) => (
            <PartyCheckBox
              key={party}
              party={party}
              onChange={toggleMembership}
              checked={members.includes(party)}
              disabled={opponents.includes(party)}
            />
          ))}
        </div>
      </fieldset>
    </div>
  );
}

function PartyCheckBox({
  party,
  onChange,
  checked,
  disabled,
}: {
  party: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
  disabled: boolean;
}) {
  return (
    <div className="control">
      <label className={`tags has-addons ${disabled ? "" : "is-clickable"}`}>
        <span className={`tag is-${party}`}>
          <input
            className={disabled ? undefined : "is-clickable"}
            type="checkbox"
            disabled={disabled}
            value={party}
            onChange={onChange}
            checked={checked}
          />
        </span>
        <span
          className={`tag ${
            disabled
              ? "has-background-grey-dark has-text-grey-light"
              : "is-dark"
          }`}
        >
          {partyNames[party]}
        </span>
      </label>
    </div>
  );
}

function SeatChanges({ results }: { results: ReturnType<typeof countVotes> }) {
  return (
    <section className="mx-5 content">
      <details>
        <summary className="title is-5">
          Seats changed ({results.changes.length})
        </summary>
        {results.changes.length === 0 ? (
          <p>No seat changes.</p>
        ) : (
          <ul>
            {results.changes.map((result) => (
              <li key={result.name}>
                {result.name} — {result.region} (
                <strong>{partyNames[result.allianceWinner]}</strong> gain from{" "}
                <strong>{partyNames[result.winner]}</strong>)
              </li>
            ))}
          </ul>
        )}
      </details>
    </section>
  );
}

export default Results;