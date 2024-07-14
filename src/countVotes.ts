import { Party, Result } from "./data/types";

function initialSeats(
  alliances: Record<string, string[]>,
  majoritySeats: Record<Party, number>,
) {
  const seats: Record<string, number> = Object.assign({}, majoritySeats);
  Object.entries(alliances).forEach(([name, parties]) => {
    parties.forEach((party) => {
      seats[name] = (seats[name] ?? 0) + seats[party];
      delete seats[party];
    });
  });
  return seats;
}

function countVotes(
  alliances: Record<string, string[]>,
  majoritySeats: Record<Party, number>,
  results: Result[],
) {
  const seats = initialSeats(alliances, majoritySeats);
  const changes: (Result & { allianceWinner: string })[] = [];
  for (const result of results) {
    const bestAlliance = Object.entries(alliances).reduce(
      (currentWinner, [name, parties]) => {
        const votes = parties.reduce(
          (votes, party) => (result[party as Party] ?? 0) + votes,
          0,
        );
        return votes > currentWinner.votes
          ? { name, votes, parties }
          : currentWinner;
      },
      { votes: 0 },
    ) as {
      name: string;
      votes: number;
      parties: string[];
    };
    if (bestAlliance.votes >= (result[result.winner as Party] ?? 0)) {
      seats[bestAlliance.name]++;
      if (!bestAlliance.parties.includes(result.winner)) {
        changes.push({ ...result, allianceWinner: bestAlliance.name });
      }
    } else {
      seats[result.winner] = (seats[result.winner] ?? 0) + 1;
    }
  }
  return { seats, changes };
}

export { countVotes };
