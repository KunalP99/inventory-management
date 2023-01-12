import { useEffect, useState } from "react";
import GameDetails from "../components/GameDetails";
import GameForm from "../components/GameForm";

const Inventory = () => {
  const [inventory, setInventory] = useState(null);

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
  return (
    <div>
      <div className='inventory'>
        <GameForm />
        {inventory &&
          inventory.map((game) => <GameDetails key={game._id} game={game} />)}
      </div>
    </div>
  );
};

export default Inventory;
