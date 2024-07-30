import { readFileSync, writeFileSync, readdirSync } from "node:fs";
import { parse } from "csv-parse/sync";

interface Row {
  "Constituency name": string;
  "Region name": string;
  "Party abbreviation": string;
  "Candidate first name": string;
  "Candidate surname": string;
  Votes: number;
}

const MAIN_PARTIES = [
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
const PARTIES: Record<string, string[]> = {
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

  const year = file.match(/HoC-GE(\d+)/)![1];
  const parties = PARTIES[year];
  const majoritySeats = Object.fromEntries(parties.map((party) => [party, 0]));
  const results: Record<string, unknown>[] = [];

  constituencyResults.forEach((constituencyResult) => {
    const winner = constituencyResult.reduce((prev, curr) =>
      prev.Votes > curr.Votes ? prev : curr,
    );
    const totalVotes = constituencyResult.reduce(
      (total, curr) => total + curr.Votes,
      0,
    );

    if (winner.Votes < totalVotes / 2) {
      const votes: Record<string, number> = {};
      for (const row of constituencyResult) {
        const party = row["Party abbreviation"];
        if (parties.includes(party)) {
          votes[party] = (votes[party] ?? 0) + row.Votes;
        } else {
          votes["Other"] = (votes["Other"] ?? 0) + row.Votes;
        }
      }
      results.push({
        name: winner["Constituency name"],
        region: winner["Region name"],
        winner: winner["Party abbreviation"],
        ...sortByParty(votes),
      });
    } else {
      majoritySeats[winner["Party abbreviation"]]++;
    }

    const data = `import { Party, Result } from "../types";

    export const majoritySeats: Partial<Record<Party, number>> = ${JSON.stringify(
      sortByParty(majoritySeats),
    )}
  
    export const results: Result[] = ${JSON.stringify(results)}`;
    writeFileSync(new URL(`generated/${year}.ts`, import.meta.url), data);
  });
}

function sortByParty<T>(obj: Record<string, T>) {
  return Object.fromEntries(
    Object.entries(obj).sort((a, b) => {
      if (a[0] === "Other") {
        return 1;
      } else if (b[0] === "Other") {
        return -1;
      }
      return a[0].localeCompare(b[0]);
    }),
  );
}
