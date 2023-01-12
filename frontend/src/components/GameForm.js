import { useState } from "react";

const GameForm = () => {
  const [title, setTitle] = useState("");
  const [copies, setCopies] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const game = { title, copies, releaseDate, imgUrl };

    // Fetch request to POST new data
    const response = await fetch("http://localhost:4000/api/inventory", {
      method: "POST",
      body: JSON.stringify(game),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      // Reset all states if form is successfully submitted
      setTitle("");
      setCopies("");
      setReleaseDate("");
      setImgUrl("");
      setError(null);
      console.log("New game added", json);
    }
  };

  return (
    <form className='create' onSubmit={handleSubmit}>
      <h3>Add a New Game:</h3>

      <label>Game Title:</label>
      <input
        type='text'
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />

      <label>Number of Copies:</label>
      <input
        type='number'
        onChange={(e) => setCopies(e.target.value)}
        value={copies}
      />

      <label>Release Date:</label>
      <input
        type='date'
        onChange={(e) => setReleaseDate(e.target.value)}
        value={releaseDate}
      />
      <label>Add optional image url:</label>
      <input
        type='text'
        onChange={(e) => setImgUrl(e.target.value)}
        value={imgUrl}
      />
      <button>Add Game</button>
      {error && <div className='error'>{error}</div>}
    </form>
  );
};

export default GameForm;
