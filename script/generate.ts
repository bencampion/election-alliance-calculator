import { readFileSync, writeFileSync, readdirSync } from "node:fs";
import { parse } from "csv-parse/sync";
import { Party, Result } from "../src/data/types";

interface Row {
  "Constituency name": string;
  "Region name": string;
  "Party abbreviation": Party;
  "Candidate first name": string;
  "Candidate surname": string;
  Votes: number;
}

const MAIN_PARTIES: Party[] = [
  "APNI",
  "Con",
  "DUP",
  "Green",
  "Ind",
  "Lab",
  "LD",
  "PC",
  "SDLP",
  "SF",
  "SNP",
  "Spk",
  "UUP",
  "Other",
];
const PARTIES: Record<string, Party[]> = {
  "2015": [...MAIN_PARTIES, "UKIP"],
  "2017": [...MAIN_PARTIES, "UKIP"],
  "2019": [...MAIN_PARTIES, "BRX"],
  "2024": [...MAIN_PARTIES, "RUK", "TUV"],
};

for (const file of readdirSync(new URL("csv", import.meta.url))) {
  const input = readFileSync(new URL(`csv/${file}`, import.meta.url));
  const csv = parse(input, {
    columns: true,
    skip_empty_lines: true,
    cast: true,
  }) as Row[];

  const constituencyResults = new Map<string, Row[]>();
  for (const row of csv) {
    const name = row["Constituency name"];
    const constituency = constituencyResults.get(name) ?? [];
    constituency.push(row);
    constituencyResults.set(name, constituency);
  }

  const year = /HoC-GE(\d+)/.exec(file)![1];
  const parties = PARTIES[year];
  const majoritySeats = new Map<Party, number>(
    parties.map((party) => [party, 0]),
  );
  const results: Result[] = [];

  constituencyResults.forEach((constituencyResult) => {
    const winner = constituencyResult.reduce((prev, curr) =>
      prev.Votes > curr.Votes ? prev : curr,
    );
    const totalVotes = constituencyResult.reduce(
      (total, curr) => total + curr.Votes,
      0,
    );

    if (winner.Votes < totalVotes / 2) {
      const votes = new Map<Party, number>();
      for (const row of constituencyResult) {
        const party = row["Party abbreviation"];
        if (parties.includes(party)) {
          votes.set(party, (votes.get(party) ?? 0) + row.Votes);
        } else {
          votes.set("Other", (votes.get("Other") ?? 0) + row.Votes);
        }
      }
      results.push({
        name: winner["Constituency name"],
        region: winner["Region name"],
        winner: winner["Party abbreviation"],
        ...Object.fromEntries(sortByParty(votes)),
      });
    } else {
      const count = majoritySeats.get(winner["Party abbreviation"]) ?? 0;
      majoritySeats.set(winner["Party abbreviation"], count + 1);
    }

    const data = `import { Party, Result } from "../types";

    export const year = "${year}";

    export const majoritySeats = new Map<Party, number>(${JSON.stringify(
      sortByParty(majoritySeats),
    )});
  
    export const results: Result[] = ${JSON.stringify(results)}`;
    writeFileSync(
      new URL(`../src/data/generated/${year}.ts`, import.meta.url),
      data,
    );
  });
}

function sortByParty<T>(entries: Iterable<[Party, T]>) {
  return Array.from(entries).sort((a, b) => {
    if (a[0] === "Other") {
      return 1;
    } else if (b[0] === "Other") {
      return -1;
    }
    return a[0].localeCompare(b[0]);
  });
}
