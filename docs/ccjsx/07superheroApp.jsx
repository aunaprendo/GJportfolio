const { useState } = React;

export const SuperheroForm = () => {
  const powerSourceOptions = [
    "Bitten by a radioactive squirrel",
    "Experimental acorn exposure",
    "Forest science experiment",
    "Ancient squirrel ancestry",
    "Mystical acorn discovery",
    "Other",
  ];

  const powersOptions = [
    "Super Squirrel Strength",
    "Lightning-Fast Climbing",
    "Gliding",
    "Camouflage",
    "Acorn Telekinesis",
    "Other",
  ];

  const [heroName, setHeroName] = useState("");
  const [realName, setRealName] = useState("");
  const [powerSource, setPowerSource] = useState("");
  const [powers, setPowers] = useState([]);

  const handlePowersChange = (e) => {
    const { value, checked } = e.target;
    setPowers(checked ? [...powers, value] : powers.filter((p) => p !== value));
  };

  return (
    <div className="form-wrap">
      <h2>Supersquirrel Application Form</h2>
      <p>Please complete all fields</p>
      <form method="post" action="https://marvel.fandom.com/wiki/Doreen_Green_(Earth-616)">
        <div className="section">
          <label>
            Super Squirrel Name
            <input type="text" value={heroName} onChange={(e) => setHeroName(e.target.value)} />
          </label>
          <label>
            Real Squirrel Name
            <input type="password" value={realName} onChange={(e) => setRealName(e.target.value)} />
          </label>
        </div>
        <label className="section column">
          How did you get your powers?
          <select value={powerSource} onChange={(e) => setPowerSource(e.target.value)}>
            <option value="">Select one</option>
            {powerSourceOptions.map((source) => (
              <option key={source} value={source}>
                {source}
              </option>
            ))}
          </select>
        </label>
        <label className="section column">
          List your powers (select all that apply):
          {powersOptions.map((power) => (
            <label key={power}>
              <input
                type="checkbox"
                value={power}
                checked={powers.includes(power)}
                onChange={handlePowersChange}
              />
              <span>{power}</span>
            </label>
          ))}
        </label>
        <button
          className="submit-btn"
          type="submit"
          disabled={!heroName || !realName || !powerSource || powers.length === 0}
        >
          Join the League
        </button>
      </form>
    </div>
  );
};
