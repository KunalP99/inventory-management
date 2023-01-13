import { useInventoryContext } from "../hooks/useInventoryContext";
import moment from "moment";
import Edit from "../images/edit.svg";
import Delete from "../images/delete.svg";
import { useState } from "react";

const GameDetails = ({ game }) => {
  const formattedReleaseDate = moment(game.releaseDate).format("YYYY-MM-DD");

  const [title, setTitle] = useState(game.title);
  const [copies, setCopies] = useState(game.copies);
  const [releaseDate, setReleaseDate] = useState(formattedReleaseDate);
  const [imgUrl, setImgUrl] = useState(game.imgUrl);

  console.log(game.releaseDate);

  // Format release date of each game
  const { dispatch } = useInventoryContext();
  const [showEdit, setShowEdit] = useState(false);

  const handleDelete = async () => {
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

  const handleShowEdit = () => {
    setShowEdit((prev) => !prev);
  };

  // Replace the current ID game with the new values
  const handleEdit = async () => {
    const changes = { title, copies, releaseDate, imgUrl };

    const response = await fetch(
      `http://localhost:4000/api/inventory/${game._id}`,
      {
        method: "PATCH",
        body: JSON.stringify(changes),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const json = await response.json();
    if (response.ok) {
      setShowEdit(false);
    }
  };

  return (
    <div className='game-details'>
      <h3>
        {showEdit ? (
          <input
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          game.title
        )}
      </h3>
      <p className='date-text'>
        {showEdit ? (
          <input
            type='date'
            value={formattedReleaseDate}
            onChange={(e) => setReleaseDate(e.target.value)}
          />
        ) : (
          formattedReleaseDate
        )}
      </p>
      <img
        className='cover-img'
        src={game.imgUrl}
        alt={`Cover art for ${game.title}`}
      />
      {showEdit && (
        <div className='edit-imgurl-input'>
          <p>Image Url: </p>
          <input
            type='text'
            value={imgUrl}
            onChange={(e) => setImgUrl(e.target.value)}
          />
        </div>
      )}
      <p className='copies-text'>
        Copies:{" "}
        {showEdit ? (
          <input
            type='number'
            value={copies}
            onChange={(e) => setCopies(e.target.value)}
          />
        ) : (
          game.copies
        )}
      </p>
      <div className='game-details-btn-container'>
        <button className='delete-btn' onClick={handleDelete}>
          <img src={Delete} alt='Delete current game' />
        </button>
        <button className='update-btn' onClick={handleShowEdit}>
          <img src={Edit} alt='Edit current game details' />
        </button>
      </div>
      {showEdit && <button onClick={handleEdit}>Submit Changes</button>}
    </div>
  );
};

export default GameDetails;
