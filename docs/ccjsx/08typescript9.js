const { useState } = React;

var PetMood;

(function (PetMood) {
  PetMood[(PetMood["HAPPY"] = 0)] = "HAPPY";
  PetMood[(PetMood["EXCITED"] = 1)] = "EXCITED";
  PetMood[(PetMood["CONTENT"] = 2)] = "CONTENT";
  PetMood[(PetMood["SAD"] = 3)] = "SAD";
  PetMood[(PetMood["TIRED"] = 4)] = "TIRED";
  PetMood[(PetMood["SICK"] = 5)] = "SICK";
  PetMood[(PetMood["HUNGRY"] = 6)] = "HUNGRY";
})(PetMood || (PetMood = {}));

const moodEmoji = {
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

  /* ========================================
  PET ACTIONS
  ========================================= */

  function eat() {
    setHunger((prev) => Math.max(0, prev - 5));
    setEnergy((prev) => Math.min(100, prev + 5));
  }

  function play() {
    setEnergy((prev) => Math.max(0, prev - 5));
    setHappiness((prev) => Math.min(100, prev + 5));
  }

  function sleep() {
    setEnergy((prev) => Math.min(100, prev + 5));
    setHunger((prev) => Math.min(100, prev + 5));
  }

  /* ========================================
  GAME TIMER
  ========================================= */

  React.useEffect(() => {
    if (!gameStarted) return;

    const interval = setInterval(() => {
      setHunger((prev) => Math.min(100, prev + 1));
      setEnergy((prev) => Math.max(0, prev - 1));
      setHappiness((prev) => Math.max(0, prev - 1));
    }, 1000);

    return () => clearInterval(interval);
  }, [gameStarted]);

  /* ========================================
  START GAME
  ========================================= */

  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const name = formData.get("pet-name");

    setPetName(name);
    setGameStarted(true);
  }

  /* ========================================
  PET MOOD
  ========================================= */

  function getMood() {
    if (hunger > 70) return PetMood.HUNGRY;
    if (energy < 30) return PetMood.TIRED;
    if (happiness < 30) return PetMood.SAD;

    if (happiness > 80 && energy > 70) {
      return PetMood.EXCITED;
    }

    if (happiness > 60) {
      return PetMood.HAPPY;
    }

    return PetMood.CONTENT;
  }

  /* ========================================
  STAT COLOR CLASSES
  ========================================= */

  function getPositiveStatClass(value) {
    if (value >= 70) return "high";
    if (value >= 30) return "medium";
    return "low";
  }

  function getHungerStatClass(value) {
    if (value <= 30) return "high";
    if (value <= 70) return "medium";
    return "low";
  }

  /* ========================================
  RENDER
  ========================================= */

  return React.createElement(
    React.Fragment,
    null,

    React.createElement("h1", null, "Squirrel Care"),
    React.createElement("p", null, "Take care of your pet squirrel"),

    !gameStarted &&
      React.createElement(
        "div",
        { className: "base-container" },

        React.createElement(
          "form",
          { onSubmit: handleSubmit },

          React.createElement("h2", null, "Name Your Squirrel"),

          React.createElement("input", {
            id: "pet-name",
            name: "pet-name",
            className: "input pet-name",
            type: "text",
            required: true,
            value: petName,
            onChange: (e) => setPetName(e.target.value),
          }),

          React.createElement("button", { type: "submit" }, "Start Game"),
        ),
      ),

    gameStarted &&
      React.createElement(
        React.Fragment,
        null,

        /* ========================================
        PET OVERVIEW
        ========================================= */

        React.createElement(
          "div",
          {
            id: "overview",
            className: "game-container",
          },

          React.createElement("h3", null, emoji),

          React.createElement("div", { className: "pet-name" }, petName),

          React.createElement(
            "div",
            { className: "pet-actions" },

            React.createElement(
              "button",
              {
                className: "pet-button",
                id: "eat-action",
                onClick: eat,
              },
              "EAT",
            ),

            React.createElement(
              "button",
              {
                className: "pet-button",
                id: "play-action",
                onClick: play,
              },
              "PLAY",
            ),

            React.createElement(
              "button",
              {
                className: "pet-button",
                id: "sleep-action",
                onClick: sleep,
              },
              "SLEEP",
            ),
          ),
        ),

        /* ========================================
        STATS
        ========================================= */

        React.createElement(
          "div",
          { className: "stats-grid" },

          /* HUNGER */

          React.createElement(
            "div",
            { className: "stat-bar" },

            React.createElement("div", { className: "stat-header stat-icon" }, "🌰"),

            React.createElement(
              "div",
              {
                className: "stat-header stat stat-name",
              },

              "Hunger",

              React.createElement("div", { className: "stat-value" }, hunger, "%"),
            ),

            React.createElement(
              "div",
              { className: "stat-progress" },

              React.createElement("div", {
                className: `stat-fill ${getHungerStatClass(hunger)}`,
                style: {
                  width: `${hunger}%`,
                },
              }),
            ),
          ),

          /* ENERGY */

          React.createElement(
            "div",
            { className: "stat-bar" },

            React.createElement("div", { className: "stat-header stat-icon" }, "🌳"),

            React.createElement(
              "div",
              {
                className: "stat-header stat-name stat",
              },

              "Energy",

              React.createElement("div", { className: "stat-value" }, energy, "%"),
            ),

            React.createElement(
              "div",
              { className: "stat-progress" },

              React.createElement("div", {
                className: `stat-fill ${getPositiveStatClass(energy)}`,
                style: {
                  width: `${energy}%`,
                },
              }),
            ),
          ),

          /* HAPPINESS */

          React.createElement(
            "div",
            { className: "stat-bar" },

            React.createElement("div", { className: "stat-header stat-icon" }, "🌈"),

            React.createElement(
              "div",
              {
                className: "stat-header stat-name stat",
              },

              "Happiness",

              React.createElement("div", { className: "stat-value" }, happiness, "%"),
            ),

            React.createElement(
              "div",
              { className: "stat-progress" },

              React.createElement("div", {
                className: `stat-fill ${getPositiveStatClass(happiness)}`,
                style: {
                  width: `${happiness}%`,
                },
              }),
            ),
          ),
        ),
      ),
  );
};
