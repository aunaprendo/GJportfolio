const { useState } = React;

enum PetMood {
  HAPPY,
  EXCITED,
  CONTENT,
  SAD,
  TIRED,
  SICK,
  HUNGRY,
}

const moodEmoji: Record<PetMood, string> = {
  [PetMood.HAPPY]: "😊",
  [PetMood.EXCITED]: "🤩",
  [PetMood.CONTENT]: "🙂",
  [PetMood.SAD]: "😢",
  [PetMood.TIRED]: "😴",
  [PetMood.SICK]: "🤒",
  [PetMood.HUNGRY]: "🍽️",
};

export const PetGame = () => {
  const [happiness, setHappiness] = useState(100);
  const [energy, setEnergy] = useState(100);
  const [hunger, setHunger] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [petName, setPetName] = useState("");
  const currentMood = getMood();
  const emoji = moodEmoji[currentMood];
  
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

React.useEffect(() => {
  if (!gameStarted) return;

  const interval = setInterval(() => {
    setHunger(prev => Math.min(100, prev + 1));
    setEnergy(prev => Math.min(100, prev + 1));
    setHappiness(prev => Math.max(0, prev - 1));
  }, 1000);

  return () => clearInterval(interval);
}, [gameStarted]);

function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
  setGameStarted(true);
}

function getMood(): PetMood {
  if (hunger > 70) return PetMood.HUNGRY;

  if (energy < 30) return PetMood.TIRED;

  if (happiness < 30) return PetMood.SAD;

  if (happiness > 80 && energy > 70) return PetMood.EXCITED;

  if (happiness > 60) return PetMood.HAPPY;

  return PetMood.CONTENT;
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
          id="pet-name"
          className="input pet-name"
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
      <h2 className="pet-name">{petName}</h2>
      <h3>{emoji}</h3>
      <button className="pet-buttons" id="eat-action" onClick={eat}>EAT</button>
      <button className="pet-buttons" id="play-action" onClick={play}>PLAY</button>
      <button className="pet-buttons" id="sleep-action" onClick={sleep}>SLEEP</button>
    </div>
    
    <div className="stats-grid">
        <div className="stat-bar">
          <div className="stat-header stat-icon">🌰</div>
    	  <div className="stat-header stat stat-name">Hunger<div className="stat-value">{hunger}%</div></div>
          <div className="stat-progress">
            <div className="stat-fill" style={{ width: `${hunger}%` }}></div>
          </div>
        </div>
        
        <div className="stat-bar">
          <div className="stat-header stat-icon">🌳</div>
    	  <div className="stat-header stat-name stat">Energy<div className="stat-value">{energy}%</div></div>
          <div className="stat-progress">
            <div className="stat-fill" style={{ width: `${energy}%` }}></div>
          </div>
        </div>
        
        <div className="stat-bar">
          <div className="stat-header stat-icon">🌈</div>
    	  <div className="stat-header stat-name stat">Happiness<div className="stat-value">{happiness}%</div></div>
          <div className="stat-progress">
            <div className="stat-fill" style={{ width: `${happiness}%` }}></div>
          </div>
        </div>
    </div>
    </>
    )}
  </>
);}


