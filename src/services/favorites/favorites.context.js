import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const FavoritesContext = createContext();

export const FavoritesContextProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);

    const saveFavorite = async (value) => {
      try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem('@favorites', jsonValue)
      } catch (e) {
        console.log("Unable to save favorites with error:", e);
      }
    }

    const loadFavorites = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('@favorites')
        setFavorites(JSON.parse(jsonValue));
      } catch(e) {
        console.log("Unable to load favorites with error:", e);
      }
    }

    const add = (restaurant) => {
      setFavorites([...favorites, restaurant]);
    }

    const remove = (restaurant) => {
      const newFavorites = favorites.filter(
        (x) => x.placeId !== restaurant.placeId
      );
      setFavorites(newFavorites);
    }

    useEffect(() => {
      loadFavorites();
    }, []);
    
    useEffect(() => {
      saveFavorite(favorites);
    }, [favorites]);

    return ( 
      <FavoritesContext.Provider
        value={{
          favorites,
          addToFavorites: add,
          removeFromFavorites: remove,
        }}>
        {children}
      </FavoritesContext.Provider>
    );
}