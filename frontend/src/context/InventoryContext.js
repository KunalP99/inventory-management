import { createContext, useReducer } from "react";

export const InventoryContext = createContext();

// 'state' => previous state before changes ... 'action' => the object passed into dispatch (Type property and payload property)
export const inventoryReducer = (state, action) => {
  switch (action.type) {
    case "SET_GAMES":
      return {
        games: action.payload,
      };

    case "CREATE_GAME":
      return {
        games: [action.payload, ...state.games],
      };
    default:
      return state;
  }
};

// The children prop is the App component meaning that all components will be able to use this context and its values
export const InventoryContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(inventoryReducer, {
    games: null,
  });
  // All components will have access to state and dispatch
  return (
    <InventoryContext.Provider value={{ ...state, dispatch }}>
      {children}
    </InventoryContext.Provider>
  );
};
