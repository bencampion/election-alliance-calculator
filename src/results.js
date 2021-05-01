import { majoritySeats, results } from './data.js';

function initialSeats(alliances) {
  const seats = Object.assign({}, majoritySeats);
  Object.entries(alliances).forEach(([name, parties]) => {
    parties.forEach(party => {
      seats[name] = (seats[name] ?? 0) + seats[party];
      delete seats[party];
    });
  });
  return seats;
}

function countVotes(alliances) {
  const seats = initialSeats(alliances);
  const changes = [];
  for (const result of results) {
    const bestAlliance = Object.entries(alliances).reduce((currentWinner, [name, parties]) => {
      const votes = parties.reduce((votes, party) => (result[party] ?? 0) + votes, 0);
      return votes > currentWinner.votes ? { name, votes, parties } : currentWinner;
    }, { votes: 0 });
    if (bestAlliance.votes >= result[result.winner]) {
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
