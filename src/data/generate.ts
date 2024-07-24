import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { parse } from "csv-parse/sync";

const OTHER = "All other candidates";
const PARTIES = [
  "APNI",
  "BRX",
  "Con",
  "DUP",
  "Green",
  "Lab",
  "LD",
  "PC",
  "RUK",
  "SDLP",
  "SF",
  "SNP",
  "UKIP",
  "UUP",
];

for (const file of readdirSync(new URL("csv", import.meta.url))) {
  const input = readFileSync(new URL(`csv/${file}`, import.meta.url));

  const csv = parse(input, {
    columns: true,
    skip_empty_lines: true,
    cast: true,
  });

  const results: Record<string, unknown>[] = [];
  const majoritySeats = Object.fromEntries(
    (function* () {
      for (const party of PARTIES) {
        if (party in csv[0]) {
          yield [party, 0];
        }
      }
      yield ["Other", 0];
    })(),
  );

  for (const row of csv) {
    let winnerRow = row["First party"];
    if (!PARTIES.includes(winnerRow)) {
      winnerRow = OTHER;
    }
    const winner = winnerRow === OTHER ? "Other" : winnerRow;

    if (row[winnerRow] < row["Valid votes"] / 2) {
      const result: Record<string, unknown> = {
        name: row["Constituency name"],
        region: row["Region name"],
        winner,
      };
      for (const party of PARTIES) {
        if (row[party]) {
          result[party] = row[party];
        }
      }
      if (row[OTHER]) {
        result["Other"] = row[OTHER];
      }
      results.push(result);
    } else {
      majoritySeats[winner]++;
    }
  }

  const data = `import { Party, Result } from "../types";

  export const majoritySeats: Partial<Record<Party, number>> = ${JSON.stringify(
    majoritySeats,
  )}

  export const results: Result[] = ${JSON.stringify(results)}`;

  const year = file.match(/HoC-GE(\d+)/)![1]!;
  writeFileSync(new URL(`generated/${year}.ts`, import.meta.url), data);
}
