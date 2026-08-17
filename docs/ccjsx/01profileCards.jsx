export function Card({ name, title, bio }) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p className="card-title">{title}</p>
      <p>{bio}</p>
    </div>
  );
}

export function App() {
  const profiles = [
    {
      id: 1,
      name: "Chippy",
      title: "Front-End Squirrel",
      bio: "I build beautiful interfaces, collect shiny CSS tricks, and hide acorns in my code for later.",
    },
    {
      id: 2,
      name: "Hazel",
      title: "Engineering Squirrel Manager",
      bio: "I lead a talented scurry of developers and help young squirrels grow their skills, confidence, and acorn reserves.",
    },
    {
      id: 3,
      name: "Nibbles",
      title: "Back-End Squirrel",
      bio: "I've been burrowing through back-end systems for years and love building secure APIs with Go and Rust.",
    },
  ];
  return (
    <div className="flex-container">
      {profiles.map((profile) => (
        <Card key={profile.id} name={profile.name} title={profile.title} bio={profile.bio} />
      ))}
    </div>
  );
}
