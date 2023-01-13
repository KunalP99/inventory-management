import moment from "moment";

const GameDetails = ({ game }) => {
  // Format release date of each game
  const formattedReleaseDate = moment(game.releaseDate).format("YYYY-DD-MM");
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
    </div>
  );
};

export default GameDetails;
