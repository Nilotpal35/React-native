import { createContext, useState } from "react";

export const FavouriteCtx = createContext({
  ids: [],
  addFavourite: (id) => {},
  removeFavourite: (id) => {},
});

export default function FavouriteContextProvider({ children }) {
  const [favouriteIds, setFavouriteIds] = useState([]);

  const addFavourite = (id) => {
    setFavouriteIds((currIds) => [...currIds, id]);
  };

  const removeFavourite = (id) => {
    setFavouriteIds((currIds) => currIds.filter((item) => item !== id));
  };

  const value = {
    ids: favouriteIds,
    addFavourite: addFavourite,
    removeFavourite: removeFavourite,
  };
  return (
    <FavouriteCtx.Provider value={value}>{children}</FavouriteCtx.Provider>
  );
}
