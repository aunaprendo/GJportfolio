const voters1 = new Set(["Peanut", "SirFluff"]);
const voters2 = new Set(["Acorn", "TallTail"]);
const voters3 = new Set(["Pecan", "WhiteBelly", "Nutty"]);

const poll = new Map();
poll.set("brownSquirrels", voters1);
poll.set("redSquirrels", voters2);
poll.set("graySquirrels", voters3);

function addOption(option) {
  if (!option) {
    return "Option cannot be empty.";
  }

  if (!poll.has(option)) {
    poll.set(option, new Set());
    return `Option "${option}" added to the poll.`;
  } else {
    return `Option "${option}" already exists.`;
  }
}

function vote(option, voterId) {
  if (poll.has(option) === false) {
    return `Option "${option}" does not exist.`;
  } else {
    let voters = poll.get(option);
    if (voters.has(voterId)) {
      return `Voter ${voterId} has already voted for "${option}".`;
    } else {
      voters.add(voterId);
      return `Voter ${voterId} voted for "${option}".`;
    }
  }
}

function displayResults() {
  let results = `Poll Results:`;
  poll.forEach((val, key) => {
    results += `
${key}: ${val.size} votes`;
  });
  return results;
}

console.log(displayResults());
