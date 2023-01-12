import { useEffect, useState } from "react";

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
        {inventory &&
          inventory.map((game) => <p key={game._id}>{game.title}</p>)}
      </div>
    </div>
  );
};

export default Inventory;
