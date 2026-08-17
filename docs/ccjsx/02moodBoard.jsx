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
    color: "#f16a17",
    image: "../assets/ccAssets/photoAppStretch.jpeg",
    description: "Squirrel stretching",
  },
  {
    color: "#d4901a",
    image: "../assets/ccAssets/photoAppTree.jpeg",
    description: "Squirrel searching",
  },
  {
    color: "#d2b732",
    image: "../assets/ccAssets/photoAppEat.jpeg",
    description: "Squirrel eating",
  },
  {
    color: "#9bbc6f",
    image: "../assets/ccAssets/gallery5.jpeg",
    description: "Squirrel pondering",
  },
  {
    color: "#64abc5",
    image: "../assets/ccAssets/gallery6.jpeg",
    description: "Squirrel smiling",
  },
  {
    color: "#aa8cbf",
    image: "../assets/ccAssets/gallery7.jpeg",
    description: "Squirrel smelling",
  },
];
