import { useEffect, useState } from "react";
import GameDetails from "../components/GameDetails";
import GameForm from "../components/GameForm";
import Plus from "../images/plus.svg";
import Minus from "../images/minus.svg";

const Inventory = () => {
  const [inventory, setInventory] = useState(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const fetchInventory = async () => {
      const response = await fetch("http://localhost:4000/api/inventory");
      const json = await response.json(); // Returns array of objects which are each of the games stored in the database

      // If fetch is successful then set the inventory to the data that came back
      if (response.ok) {
        setInventory(json);
      }
    };

    fetchInventory();
  }, []);

  const toggleForm = () => {
    if (showForm) {
      setShowForm(false);
    } else {
      setShowForm(true);
    }
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
          {inventory &&
            inventory.map((game) => <GameDetails key={game._id} game={game} />)}
        </div>
      </div>
    </div>
  );
};

export default Inventory;
