import { Alliance, Party, Result, ResultChange } from "./types.ts";

function initialSeats(
  alliances: Record<Alliance, Party[]>,
  majoritySeats: Map<Party, number>,
) {
  const seats = new Map<Alliance | Party, number>(majoritySeats);
  for (const alliance of ["Left", "Right"] as Alliance[]) {
    for (const party of alliances[alliance]) {
      seats.set(alliance, (seats.get(alliance) ?? 0) + seats.get(party)!);
      seats.delete(party);
    }
  }
  return seats;
}

function countVotes(
  alliances: Record<Alliance, Party[]>,
  majoritySeats: Map<Party, number>,
  results: Result[],
) {
  const seats = initialSeats(alliances, majoritySeats);
  const changes: ResultChange[] = [];
  for (const result of results) {
    const count = (votes: number, party: Party) => (result[party] ?? 0) + votes;
    const leftVotes = alliances.Left.reduce(count, 0);
    const rightVotes = alliances.Right.reduce(count, 0);
    const bestAllianceVotes = leftVotes > rightVotes ? leftVotes : rightVotes;
    if (bestAllianceVotes >= result[result.winner]!) {
      const allianceWinner = leftVotes > rightVotes ? "Left" : "Right";
      seats.set(allianceWinner, seats.get(allianceWinner)! + 1);
      if (!alliances[allianceWinner].includes(result.winner)) {
        changes.push({ ...result, allianceWinner: allianceWinner });
      }
    } else {
      seats.set(result.winner, (seats.get(result.winner) ?? 0) + 1);
    }
  }
  return { seats, changes };
}

export { countVotes };
