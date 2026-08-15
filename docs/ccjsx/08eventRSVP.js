const { useState } = React;

export function EventRSVPForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nameSq, setNameSq] = useState("");
  const [numberAttendees, setNumberAttendees] = useState("");
  const [diet, setDiet] = useState("");
  const [guests, setGuests] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;

    if (id === "name") setName(value);
    if (id === "nameSq") setName(value);
    if (id === "email") setEmail(value);
    if (id === "numberAttendees") {
      setNumberAttendees(value === "" ? "" : Number(value));
    }
    if (id === "diet") setDiet(value);
    if (id === "guests") setGuests(type === "checkbox" ? checked : value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (numberAttendees < 1) {
      alert("Number of attendees must be at least 1");
      return;
    }

    setSubmitted(true);
  };

  return (
    <>
      <h1 className="h1">Squirrel Party</h1>
      <p className="p">
        <em>
          Join us for a nutty good time as we celebrate squirrel-style with snacks, games, and
          tail-twitching fun!
        </em>
      </p>

      <form id="form" method="post" className="ccform" onSubmit={handleSubmit}>
        <label className="cclabel" htmlFor="name">
          Your name
        </label>
        <input
          className="ccinput"
          value={name}
          id="name"
          onChange={handleChange}
          type="text"
          required
        />

        <label className="cclabel" htmlFor="nameSq">
          Squirrel name
        </label>
        <input className="ccinput" value={nameSq} id="nameSq" onChange={handleChange} type="text" />

        <label className="cclabel" htmlFor="email">
          Email Address
        </label>
        <input
          className="ccinput"
          value={email}
          id="email"
          onChange={handleChange}
          type="email"
          required
        />

        <label className="cclabel" htmlFor="numberAttendees">
          Number of Attendees
        </label>
        <input
          className="ccinput"
          value={numberAttendees}
          id="numberAttendees"
          onChange={handleChange}
          type="number"
          min="1"
          required
        />

        <label className="cclabel" htmlFor="diet">
          Dietary Preferences
        </label>
        <textarea
          className="cctextarea"
          value={diet}
          id="diet"
          onChange={handleChange}
          rows="3"
          cols="30"
          placeholder="I’m happy with nuts, seeds, fruits, and the occasional veggie snack, but please avoid salty junk food and chocolate because they can make me sick."
        ></textarea>

        <label className="form-check-label ms-2 text-nowrap cclabel" htmlFor="guests">
          Check if bringing additional squirrels
        </label>
        <input
          className="form-check-input"
          checked={guests}
          id="guests"
          onChange={handleChange}
          type="checkbox"
        />

        <button className="btn btn-secondary" value="Submit" type="submit">
          Submit
        </button>
      </form>

      {submitted && (
        <div>
          <p>RSVP Submitted!</p>
          <p>Name: {name}</p>
          <p>Email: {email}</p>
          <p>Number of attendees: {numberAttendees}</p>
          <p>Dietary preferences: {diet ? diet : "None"}</p>
          <p>Bringing additional guests: {guests ? "Yes" : "No"}</p>
        </div>
      )}
    </>
  );
}
