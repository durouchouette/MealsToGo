/* eslint-disable react/react-in-jsx-scope */
import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components/native";
import * as firebase from "firebase";

import { theme } from "./src/infrastructure/theme";
import { Navigation } from "./src/infrastructure/navigation";

import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { FavoritesContextProvider } from "./src/services/favorites/favorites.context";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";

// import AppLoading from 'expo-app-loading';
import { useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';

const firebaseConfig = {
  apiKey: "AIzaSyCbbSRiGFcbCQjEcqbPOMiidG0ld7fmyF0",
  authDomain: "meals-to-go-124ad.firebaseapp.com",
  projectId: "meals-to-go-124ad",
  storageBucket: "meals-to-go-124ad.appspot.com",
  messagingSenderId: "646295424652",
  appId: "1:646295424652:web:32334c713c26a01f96b5a9"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <FavoritesContextProvider>
            <LocationContextProvider>
              <RestaurantsContextProvider>
                <Navigation />
              </RestaurantsContextProvider>
            </LocationContextProvider>
          </FavoritesContextProvider>
         </AuthenticationContextProvider>
      </ThemeProvider>
    </>
  ); 
}

