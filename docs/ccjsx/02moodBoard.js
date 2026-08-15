export function MoodBoardItem({ color, image, description }) {
  return (
    <div
      className="mood-board-item"
      style={{
        backgroundColor: color,
      }}
    >
      <img className="mood-board-image" src={image} />
      <h3 className="mood-board-text">{description}</h3>
    </div>
  );
}

export function MoodBoard() {
  return (
    <div className="mood-board">
      <h1 className="mood-board-heading">Destination Mood Board</h1>
      {items.map((item, index) => (
        <MoodBoardItem key={index} {...item} />
      ))}
    </div>
  );
}

const items = [
  {
    color: "red",
    image: "https://cdn.freecodecamp.org/curriculum/labs/grass.jpg",
    description: "grass",
  },
  {
    color: "orange",
    image: "https://cdn.freecodecamp.org/curriculum/labs/pathway.jpg",
    description: "pathway",
  },
  {
    color: "yellow",
    image: "https://cdn.freecodecamp.org/curriculum/labs/shore.jpg",
    description: "shore",
  },
  {
    color: "green",
    image: "https://cdn.freecodecamp.org/curriculum/labs/ship.jpg",
    description: "ship",
  },
  {
    color: "blue",
    image: "https://cdn.freecodecamp.org/curriculum/labs/santorini.jpg",
    description: "santorini",
  },
  {
    color: "purple",
    image: "https://cdn.freecodecamp.org/curriculum/labs/pigeon.jpg",
    description: "pigeon",
  },
];
