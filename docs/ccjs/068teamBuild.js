const footballTeam = {
  team: "Nuttingham Squirrels",
  year: 2026,
  headCoach: "Coach Acorn McTwitch",
  players: [
    { name: "Sir Scurrington", position: "forward", isCaptain: true },
    { name: "Hazel Quicktail", position: "midfielder", isCaptain: false },
    { name: "Barkley Swiftclaw", position: "defender", isCaptain: false },
    { name: "Chestnut Ironpaws", position: "goalkeeper", isCaptain: false },
		{ name: "Dash Whiskerwind", position: "forward", isCaptain: false },
    { name: "Cinnamon Flicktail", position: "midfielder", isCaptain: false },
    { name: "Oakley Hardbark", position: "defender", isCaptain: false },
    { name: "Walnut Stoneclaw", position: "goalkeeper", isCaptain: false },   
		{ name: "Blaze Nutrunner", position: "forward", isCaptain: false },
    { name: "Amber Leafdash", position: "midfielder", isCaptain: false },
    { name: "Thorn Shadowtail", position: "defender", isCaptain: false },
    { name: "Cedar Strongpaw", position: "goalkeeper", isCaptain: false },
    { name: "Flash Quicknut", position: "forward", isCaptain: false },
    { name: "Ivy Swiftbranch", position: "midfielder", isCaptain: false },
    { name: "Granite Oakshield", position: "defender", isCaptain: false },
    { name: "Moss Ironwhisker", position: "goalkeeper", isCaptain: false }
  ]
};

const headCoach = document.getElementById("head-coach");
const team = document.getElementById("team");
const year = document.getElementById("year");
const players = document.getElementById("player-cards");
const playersPosition = document.getElementById("players");

headCoach.innerText = footballTeam.headCoach;
team.innerText = footballTeam.team;
year.innerText = footballTeam.year;

function playerCards(playerPosition) {
  const selectedPlayers =
    playerPosition === "all"
      ? footballTeam.players
      : footballTeam.players.filter(
          ({position}) => position === playerPosition
        );

  return selectedPlayers
    .map(({ name, position, isCaptain}) => {
      if (isCaptain === true) {
      	return `
          <div class="player-card">
 						<h2>(Captain) ${name}</h2>
  					<p>Position: ${position}</p>
					</div>
        `;
      } else {
      	return `
          <div class="player-card">
 						<h2>${name}</h2>
  					<p>Position: ${position}</p>
					</div>
        `;
      }	
    }).join("")
}
playersPosition.addEventListener("change", () => {
  players.innerHTML = playerCards(playersPosition.value);
});


