import React, { createContext, useState, useEffect, useContext } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

import { AuthenticationContext } from "../authentication/authentication.context";

export const FavoritesContext = createContext();

export const FavoritesContextProvider = ({ children }) => {
    const { user } = useContext(AuthenticationContext);
    const [favorites, setFavorites] = useState([]);

    const saveFavorite = async (value, uid) => {
      try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem('@favorites-${uid}', jsonValue)
      } catch (e) {
        console.log("Unable to save favorites with error:", e);
      }
    }

    const loadFavorites = async (uid) => {
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
      if(user) {
        loadFavorites(user.uid);
      }
    }, [user]);
    
    useEffect(() => {
      if(user) {
        saveFavorite(favorites, user.uid);
      }
    }, [favorites, user]);

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