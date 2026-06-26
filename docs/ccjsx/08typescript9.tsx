const { useState } = React;

export const PetGame = () => {
  const initialFull = 100;
  const initialEmpty = 0;
  const [happiness, setHappiness] = useState(initialFull);
  const [energy, setEnergy] = useState(initialFull);
  const [hunger, setHunger] = useState(initialEmpty);
  const [gameStarted, setGameStarted] = useState(false);
  const [petName, setPetName] = useState("");
  
function eat () {
    setHunger(prev => Math.max(0, prev - 5));
    setEnergy(prev => Math.min(100, prev + 5));
}

function play () {
    setEnergy(prev => Math.max(0, prev - 5));
    setHappiness(prev => Math.min(100, prev + 5));
}

function sleep () {
    setEnergy(prev => Math.min(100, prev + 5));
    setHunger(prev => Math.min(100, prev + 5));
}

function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
  setGameStarted(true);
}

return (
  <>
    <h1>Squirrel Care</h1>
    <p>Take care of your pet squirrel</p> 
  {!gameStarted && (
      <div className="base-container">
      <form onSubmit={handleSubmit}>
      <h2>Name Your Squirrel</h2>
      <input
          id="name"
          className="input"
          type="text"
          required
          value={petName}
          onChange={(e) => setPetName(e.target.value)}/>
          <button type='submit'>Start Game</button>
    </form>
    </div>
    )}

    {gameStarted && (
    <>
    <div id="overview" className="game-container">
      <h2>{petName}</h2>
      <h3>🙂</h3>
      <button className="pet-buttons" id="eat-action" onClick={eat}>EAT</button>
      <button className="pet-buttons" id="play-action" onClick={play}>PLAY</button>
      <button className="pet-buttons" id="sleep-action" onClick={sleep}>SLEEP</button>
    </div>
    
    <div className="stats-grid">
        <div className="stat-bar">
          <div className="stat-header stat-icon">🌰</div>
    	  <div className="stat-header stat-name">Hunger</div>
          <div className="stat-header stat-value">{hunger}%</div>
          <div className="stat-progress">
            <div className="stat-fill" style={{ width: `${hunger}%` }}></div>
          </div>
        </div>
        
        <div className="stat-bar">
          <div className="stat-header stat-icon">🌳</div>
    	  <div className="stat-header stat-name">Energy</div>
          <div className="stat-header stat-value">{energy}%</div>
          <div className="stat-progress">
            <div className="stat-fill" style={{ width: `${energy}%` }}></div>
          </div>
        </div>
        
        <div className="stat-bar">
          <div className="stat-header stat-icon">🌈</div>
    	  <div className="stat-header stat-name">Happiness</div>
          <div className="stat-header stat-value">{happiness}%</div>
          <div className="stat-progress">
            <div className="stat-fill" style={{ width: `${happiness}%` }}></div>
          </div>
        </div>
    </div>
    </>
    )}
  </>
);}


