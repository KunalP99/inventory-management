import { useInventoryContext } from "../hooks/useInventoryContext";
import moment from "moment";

const GameDetails = ({ game }) => {
  // Format release date of each game
  const formattedReleaseDate = moment(game.releaseDate).format("YYYY-DD-MM");
  const { dispatch } = useInventoryContext();

  const handleClick = async () => {
    const response = await fetch(
      `http://localhost:4000/api/inventory/${game._id}`,
      { method: "DELETE" }
    );

    // json = the document that was just deleted
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_GAME", payload: json });
    }
  };

  return (
    <div className='game-details'>
      <h3>{game.title}</h3>
      <p className='date-text'> {formattedReleaseDate}</p>
      <img
        className='coverImg'
        src={game.imgUrl}
        alt={`Cover art for ${game.title}`}
      />
      <p className='copies-text'>Copies: {game.copies}</p>
      <button onClick={handleClick}>Delete</button>
    </div>
  );
};

export default GameDetails;
