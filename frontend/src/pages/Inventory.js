import { useEffect, useState } from "react";
import { useInventoryContext } from "../hooks/useInventoryContext";
import GameDetails from "../components/GameDetails";
import GameForm from "../components/GameForm";
import Plus from "../images/plus.svg";
import Minus from "../images/minus.svg";

const Inventory = () => {
  const { games, dispatch } = useInventoryContext();
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const fetchInventory = async () => {
      const response = await fetch("http://localhost:4000/api/inventory");
      const json = await response.json(); // Returns array of objects which are each of the games stored in the database

      // If fetch is successful then set the games array to the data that came back
      if (response.ok) {
        // Setting games array in context to entire array of games in the database
        dispatch({ type: "SET_GAMES", payload: json });
      }
    };

    fetchInventory();
  }, []);

  const toggleForm = () => {
    setShowForm((prevToggle) => !prevToggle);
  };

  return (
    <div className='container'>
      <button onClick={toggleForm} className='show-hide-form'>
        {showForm ? (
          <img src={Minus} alt='Hide form' />
        ) : (
          <img src={Plus} alt='Open form' />
        )}
      </button>

      <div>
        {showForm && <GameForm />}
        <div className='inventory'>
          {games &&
            games.map((game) => <GameDetails key={game._id} game={game} />)}
        </div>
      </div>
    </div>
  );
};

export default Inventory;
