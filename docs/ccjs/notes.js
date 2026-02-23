










You should display the players data on the page inside the #player-cards element, each player should be displayed in a div with class of player-card, and nested in it, an h2 containing the name of the player, and (Captain) in case of the player being captain, and a p containing Position: and the position of the player.

Here is an example of how the HTML should look like:

<div class="player-card">
  <h2>Sergio Batista</h2>
  <p>Position: midfielder</p>
</div>
<div class="player-card">
  <h2>(Captain) Diego Maradona</h2>
  <p>Position: midfielder</p>
</div>
When the dropdown menu is used to select one of the positions, only the .player-card elements for players of that position should be present. If the "All Players" option is selected, then all of the players should display on the page.





.player-card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: var(--bg-color-main);
  background-clip: border-box;
  border: 2px dotted rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
  padding: 1rem .8rem;
  margin-top: auto;
  text-align: center;
}


@media (max-width: 768px) {
  .player-card {
    aspect-ratio: 3 / 4;
		padding: .5rem .5rem;
  }
}

@media (max-width: 576px) {
  .player-card {
    aspect-ratio: 4 / 5;
		font-size: .9rem;
  }
}