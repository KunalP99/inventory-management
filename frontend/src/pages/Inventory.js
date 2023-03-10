import { useEffect, useState } from "react";
import { useInventoryContext } from "../hooks/useInventoryContext";
import GameDetails from "../components/GameDetails";
import GameForm from "../components/GameForm";
import Plus from "../images/plus.svg";
import PulseLoader from "react-spinners/PulseLoader";

const Inventory = () => {
  const { games, dispatch } = useInventoryContext();

  // Checks to see if data is still being fetched from database
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchInventory = async () => {
      setIsLoading(true);
      const response = await fetch(
        "https://games-inventory-api.onrender.com/api/inventory"
      );
      const json = await response.json(); // Returns array of objects which are each of the games stored in the database

      // If fetch is successful then set the games array to the data that came back
      if (response.ok) {
        // Setting games array in context to entire array of games in the database
        dispatch({ type: "SET_GAMES", payload: json });
        setIsLoading(false);
      }
    };

    fetchInventory();
  }, []);

  // Show and hides form when button is clicked
  const toggleForm = () => {
    // Change styling of toggle to translate from right to left
    const sidebar = document.querySelector(".sidebar");
    const darken = document.querySelector(".darken-screen");

    sidebar.classList.toggle("show-sidebar");
    darken.classList.toggle("show-dark-screen");
  };

  return (
    <div className='container'>
      <div className='heading-btn-container'>
        <h3>My Games Collection</h3>
        <button data-test-btn='add-game-btn' onClick={toggleForm}>
          Add game
          <img src={Plus} alt='Add a new game button' />
        </button>
      </div>
      <div>
        <GameForm toggleForm={toggleForm} />
        {isLoading ? (
          <div className='pulse-loader'>
            <PulseLoader color='#dd6031' />
          </div>
        ) : (
          <div className='inventory'>
            {games &&
              games.map((game) => <GameDetails key={game._id} game={game} />)}
          </div>
        )}
      </div>
    </div>
  );
};

export default Inventory;
