import React, { useState } from "react";

export const FavoriteContext = React.createContext({
  id: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

function FavoriteContextProvider({ children }) {
  const [favoriteMeals, setFavoriteMeals] = useState(["m1"]);

  function addFavorite(id) {
    setFavoriteMeals((prevMeals) => [...prevMeals, id]);
  }

  function removeFavorite(id) {
    setFavoriteMeals((prevMeals) => {
      return prevMeals.filter((item) => item !== id);
    });
  }

  const value = {
    id: favoriteMeals,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };

  return (
    <FavoriteContext.Provider value={value}>
      {children}
    </FavoriteContext.Provider>
  );
}

export default FavoriteContextProvider;
