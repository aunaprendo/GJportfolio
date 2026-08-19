const { useState, useEffect } = React;
const POSITIONS = ["GK", "CB", "LB", "RB", "CDM", "CM", "CAM", "LW", "RW", "ST", "CF"];
const STORAGE_KEY = "football_player_card";
export function getPlayerTier(rating) {
  if (rating >= 92) return "elite";
  if (rating >= 85) return "gold";
  if (rating >= 75) return "silver";
  return "bronze";
}
export const PlayerCard = ({ player }) => {
  return React.createElement(
    "div",
    { className: `card-wrapper tier-${getPlayerTier(player.overallRating)}` },
    React.createElement(
      "div",
      { className: "card" },
      React.createElement(
        "div",
        { className: "card-header" },
        React.createElement(
          "div",
          null,
          React.createElement("div", { className: "card-rating" }, player.overallRating),
          React.createElement("div", { className: "card-position" }, player.position),
        ),
        React.createElement(
          "div",
          { className: "card-header-right" },
          React.createElement(
            "div",
            { className: "card-tier-badge" },
            getPlayerTier(player.overallRating).toUpperCase(),
          ),
          React.createElement("div", { className: "card-club" }, player.club),
        ),
      ),
      React.createElement(
        "div",
        { className: "card-image-wrap" },
        React.createElement("img", {
          src: player.imageUrl,
          alt: `${player.name} headshot`,
          className: "card-image",
        }),
      ),
      React.createElement(
        "div",
        { className: "card-name-strip" },
        React.createElement("span", { className: "card-name" }, player.name),
      ),
      React.createElement(
        "div",
        { className: "card-stats" },
        React.createElement(
          "div",
          { className: "stat-col" },
          React.createElement(
            "div",
            { className: "stat-row" },
            React.createElement("span", { className: "stat-value" }, player.pac),
            React.createElement("span", { className: "stat-label" }, "PAC"),
          ),
          React.createElement(
            "div",
            { className: "stat-row" },
            React.createElement("span", { className: "stat-value" }, player.sho),
            React.createElement("span", { className: "stat-label" }, "SHO"),
          ),
          React.createElement(
            "div",
            { className: "stat-row" },
            React.createElement("span", { className: "stat-value" }, player.pas),
            React.createElement("span", { className: "stat-label" }, "PAS"),
          ),
        ),
        React.createElement("div", { className: "stat-divider" }),
        React.createElement(
          "div",
          { className: "stat-col" },
          React.createElement(
            "div",
            { className: "stat-row" },
            React.createElement("span", { className: "stat-value" }, player.dri),
            React.createElement("span", { className: "stat-label" }, "DRI"),
          ),
          React.createElement(
            "div",
            { className: "stat-row" },
            React.createElement("span", { className: "stat-value" }, player.def),
            React.createElement("span", { className: "stat-label" }, "DEF"),
          ),
          React.createElement(
            "div",
            { className: "stat-row" },
            React.createElement("span", { className: "stat-value" }, player.phy),
            React.createElement("span", { className: "stat-label" }, "PHY"),
          ),
        ),
      ),
    ),
  );
};
const defaultPlayer = {
  name: "PELE",
  overallRating: 98,
  position: "ST",
  club: "Santos FC",
  imageUrl: "https://cdn.freecodecamp.org/curriculum/typescript/tsx-workshop/pele.jpg",
  pac: 97,
  sho: 98,
  pas: 83,
  dri: 99,
  def: 41,
  phy: 75,
};
function loadPlayer() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      return Object.assign(Object.assign({}, defaultPlayer), JSON.parse(saved));
    }
  } catch (error) {
    console.log("Failed to load player data, using defaults:", error);
  }
  return defaultPlayer;
}
export const FootballPlayerCard = () => {
  const [player, setPlayer] = useState(loadPlayer);
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(player));
    } catch (error) {
      console.log("Failed to save player data:", error);
    }
  }, [player]);
  return React.createElement(
    "div",
    { className: "page" },
    React.createElement(
      "header",
      { className: "header" },
      React.createElement(
        "div",
        { className: "header-inner" },
        React.createElement("p", { className: "header-title" }, "Football Card Builder"),
        React.createElement("p", { className: "header-subtitle" }, "Customize your player card"),
      ),
    ),
    React.createElement(
      "main",
      { className: "main" },
      React.createElement(
        "div",
        { className: "layout" },
        React.createElement(
          "div",
          { className: "form-panel" },
          React.createElement(
            "div",
            null,
            React.createElement("p", { className: "form-section-title" }, "Player Info"),
            React.createElement(
              "div",
              { className: "form-group" },
              React.createElement("label", { className: "label", htmlFor: "name" }, "Name"),
              React.createElement("input", {
                id: "name",
                className: "input",
                type: "text",
                value: player.name,
                onChange: (e) =>
                  setPlayer(Object.assign(Object.assign({}, player), { name: e.target.value })),
              }),
            ),
            React.createElement(
              "div",
              { className: "form-row" },
              React.createElement(
                "div",
                { className: "form-group" },
                React.createElement(
                  "label",
                  { className: "label", htmlFor: "position" },
                  "Position",
                ),
                React.createElement(
                  "select",
                  {
                    id: "position",
                    className: "input",
                    value: player.position,
                    onChange: (e) =>
                      setPlayer(
                        Object.assign(Object.assign({}, player), { position: e.target.value }),
                      ),
                  },
                  POSITIONS.map((pos) =>
                    React.createElement("option", { key: pos, value: pos }, pos),
                  ),
                ),
              ),
              React.createElement(
                "div",
                { className: "form-group" },
                React.createElement(
                  "label",
                  { className: "label", htmlFor: "overallRating" },
                  "Overall",
                ),
                React.createElement("input", {
                  id: "overallRating",
                  className: "input",
                  type: "number",
                  value: player.overallRating,
                  onChange: (e) =>
                    setPlayer(
                      Object.assign(Object.assign({}, player), {
                        overallRating: Number(e.target.value),
                      }),
                    ),
                }),
              ),
            ),
            React.createElement(
              "div",
              { className: "form-group" },
              React.createElement("label", { className: "label", htmlFor: "club" }, "Club"),
              React.createElement("input", {
                id: "club",
                className: "input",
                type: "text",
                value: player.club,
                onChange: (e) =>
                  setPlayer(Object.assign(Object.assign({}, player), { club: e.target.value })),
              }),
            ),
            React.createElement(
              "div",
              { className: "form-group" },
              React.createElement(
                "label",
                { className: "label", htmlFor: "imageUrl" },
                "Image URL",
              ),
              React.createElement("input", {
                id: "imageUrl",
                className: "input",
                type: "text",
                value: player.imageUrl,
                onChange: (e) =>
                  setPlayer(Object.assign(Object.assign({}, player), { imageUrl: e.target.value })),
              }),
            ),
          ),
          React.createElement(
            "div",
            null,
            React.createElement("p", { className: "form-section-title" }, "Player Stats"),
            React.createElement(
              "div",
              { className: "stats-grid" },
              React.createElement(
                "div",
                { className: "form-group" },
                React.createElement("label", { className: "label", htmlFor: "pac" }, "PAC"),
                React.createElement("input", {
                  id: "pac",
                  className: "input",
                  type: "number",
                  value: player.pac,
                  onChange: (e) =>
                    setPlayer(
                      Object.assign(Object.assign({}, player), { pac: Number(e.target.value) }),
                    ),
                }),
              ),
              React.createElement(
                "div",
                { className: "form-group" },
                React.createElement("label", { className: "label", htmlFor: "sho" }, "SHO"),
                React.createElement("input", {
                  id: "sho",
                  className: "input",
                  type: "number",
                  value: player.sho,
                  onChange: (e) =>
                    setPlayer(
                      Object.assign(Object.assign({}, player), { sho: Number(e.target.value) }),
                    ),
                }),
              ),
              React.createElement(
                "div",
                { className: "form-group" },
                React.createElement("label", { className: "label", htmlFor: "pas" }, "PAS"),
                React.createElement("input", {
                  id: "pas",
                  className: "input",
                  type: "number",
                  value: player.pas,
                  onChange: (e) =>
                    setPlayer(
                      Object.assign(Object.assign({}, player), { pas: Number(e.target.value) }),
                    ),
                }),
              ),
              React.createElement(
                "div",
                { className: "form-group" },
                React.createElement("label", { className: "label", htmlFor: "dri" }, "DRI"),
                React.createElement("input", {
                  id: "dri",
                  className: "input",
                  type: "number",
                  value: player.dri,
                  onChange: (e) =>
                    setPlayer(
                      Object.assign(Object.assign({}, player), { dri: Number(e.target.value) }),
                    ),
                }),
              ),
              React.createElement(
                "div",
                { className: "form-group" },
                React.createElement("label", { className: "label", htmlFor: "def" }, "DEF"),
                React.createElement("input", {
                  id: "def",
                  className: "input",
                  type: "number",
                  value: player.def,
                  onChange: (e) =>
                    setPlayer(
                      Object.assign(Object.assign({}, player), { def: Number(e.target.value) }),
                    ),
                }),
              ),
              React.createElement(
                "div",
                { className: "form-group" },
                React.createElement("label", { className: "label", htmlFor: "phy" }, "PHY"),
                React.createElement("input", {
                  id: "phy",
                  className: "input",
                  type: "number",
                  value: player.phy,
                  onChange: (e) =>
                    setPlayer(
                      Object.assign(Object.assign({}, player), { phy: Number(e.target.value) }),
                    ),
                }),
              ),
            ),
          ),
        ),
        React.createElement(
          "div",
          { className: "preview-panel" },
          React.createElement("p", { className: "preview-label" }, "Live Preview"),
          React.createElement("p", { className: "preview-hint" }, "Updates as you type"),
          React.createElement(
            "div",
            { className: `preview-box tier-${getPlayerTier(player.overallRating)}` },
            React.createElement(PlayerCard, { player: player }),
          ),
        ),
      ),
    ),
  );
};
