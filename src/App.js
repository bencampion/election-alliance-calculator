import { useState } from 'react';
import { countVotes } from './results.js';

const partyNames = {
  apni: <abbr title="Alliance Party of Northern Ireland">APNI</abbr>,
  brexit: <abbr title="Brexit Party">Brexit</abbr>,
  con: <abbr title="Conservative Party">Conservative</abbr>,
  dup: <abbr title="Democratic Unionist Party">DUP</abbr>,
  green: <abbr title="Green Party">Green</abbr>,
  lab: <abbr title="Labour Party">Labour</abbr>,
  ld: <abbr title="Liberal Democrats">Lib Dems</abbr>,
  pc: 'Plaid Cymru',
  sdlp: <abbr title="Social Democratic and Labour Party">SDLP</abbr>,
  sf: 'Sinn Féin',
  snp: <abbr title="Scottish National Party">SNP</abbr>,
  uup: <abbr title="Ulster Unionist Party">UUP</abbr>,
  other: 'Other',
  left: 'Left Alliance',
  right: 'Right Alliance'
};

function useSearchParam(name) {
  const searchParams = new URLSearchParams(window.location.search);
  const [values, setValues] = useState(searchParams.getAll(name));
  return [values, newValues => {
    setValues(newValues);
    const url = new URL(window.location);
    url.searchParams.delete(name);
    newValues.forEach(value => url.searchParams.append(name, value));
    url.searchParams.sort();
    window.history.replaceState({}, '', url);
  }];
}

function App() {
  const [left, setLeft] = useSearchParam('left');
  const [right, setRight] = useSearchParam('right');

  const alliances = { left, right };
  const results = countVotes(alliances);

  return (
    <div className="container">
      <header className="m-5">
        <h1 className="title mb-3">2019 UK general election alliance calculator</h1>
        <p className="subtitle mt-0">There were <strong>229</strong> constituencies in the <a href="https://en.wikipedia.org/wiki/2019_United_Kingdom_general_election">2019 United Kingdom general election</a> where the winner did not get a majority of the votes. What would have happened if parties had formed alliances to combine their votes behind a single candidate in each of those constituencies?</p>
      </header>

      <Results results={results} alliances={alliances} />

      <section className="columns">
        <Alliance name="Left" members={left} setMembers={setLeft} opponents={right} />
        <Alliance name="Right" members={right} setMembers={setRight} opponents={left} />
      </section>

      <SeatChanges results={results} />

      <hr />

      <footer className="block is-size-7 m-5">
        <p>Data: <a href="https://commonslibrary.parliament.uk/research-briefings/cbp-8749/">General Election 2019: full results and analysis</a></p>
      </footer>
    </div>
  );
}

function Results({ results, alliances }) {
  return (
    <section className="block mx-5">
      <div className="field is-grouped is-grouped-centered is-grouped-multiline" role="table">
        {Object.entries(results.seats)
          .filter(([party, count]) => count > 0)
          .sort((a, b) => b[1] - a[1])
          .map(([party, count]) => <Votes
            key={party}
            party={party}
            count={count}
            alliances={alliances}
          />)}
      </div>
      <p className="has-text-centered">
        <strong>326</strong> seats needed for a majority
      </p>
    </section>
  );
}

function Votes({ party, count, alliances }) {
  return (
    <div className="control" role="row">
      <div className="tags has-addons mb-0 is-justify-content-center" role="rowheader">
        {(alliances[party] ?? [party]).map(party => <span key={party} className={`tag is-${party}`} />)}
        <span className="tag is-dark">{partyNames[party]}</span>
      </div>
      <div className="title has-text-centered" role="cell">{count}</div>
    </div>
  );
}

function Alliance({ name, members, setMembers, opponents }) {
  const toggleMembership = e => {
    const party = e.target.value;
    setMembers(members.includes(party) ? members.filter(m => m !== party) : [...members, party]);
  };
  const parties = Object.keys(partyNames).filter(party => party !== 'left' && party !== 'right');
  return (
    <div>
      <h2 className="title is-4 mb-1">{name} Alliance</h2>
      <fieldset>
        <legend className="mb-3">
          Select parties to combine their votes to form a <strong>{name} Alliance</strong>.
        </legend>
        <div className="field is-grouped is-grouped-multiline">
          {parties.map(party => <PartyCheckBox
            key={party}
            party={party}
            onChange={toggleMembership}
            checked={members.includes(party)}
            disabled={opponents.includes(party)}
          />)}
        </div>
      </fieldset>
    </div>
  );
}

function PartyCheckBox({ party, onChange, checked, disabled }) {
  return (
    <div className="control">
      <label className={`tags has-addons ${disabled ? '' : 'is-clickable'}`}>
        <span className={`tag is-${party}`}>
          <input
            className={disabled ? undefined : 'is-clickable'}
            type="checkbox"
            disabled={disabled}
            value={party}
            onChange={onChange}
            checked={checked}
          />
        </span>
        <span className={`tag ${disabled ? 'has-background-grey-dark has-text-grey-light' : 'is-dark'}`}>
          {partyNames[party]}
        </span>
      </label>
    </div>
  );
}

function SeatChanges({ results }) {
  return (
    <section className="mx-5 content">
      <details>
        <summary className="title is-5">Seats changed ({results.changes.length})</summary>
        {results.changes.length === 0 ?
          <p>No seat changes.</p>
          :
          <ul>
            {results.changes.map(result => (
              <li key={result.name}>
                {result.name} — {result.region} (<strong>{partyNames[result.allianceWinner]}</strong> gain from <strong>{partyNames[result.winner]}</strong>)
              </li>
            ))}
          </ul>
        }
      </details>
    </section>
  );
}

export default App;
