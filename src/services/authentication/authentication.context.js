import React, { createContext, useState, useEffect } from "react";
import * as firebase from "firebase";

import { loginRequest } from "./authentication.service";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState([]);
  const [error, setError] = useState([]);

  const onLogin = (email, password) => {
    setIsLoading(true);
    loginRequest(email, password).then((u) => {
      setUser(u);
      setIsLoading(false);
    }).catch((e) => {
      setIsLoading(false);
      setError(e.toString());
    });
  };

  const onRegister = (email, password, repeatedPassword) => {
    if (password !== repeatedPassword) {
      setError("Error: Passwords do not match");
      return;
    }
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((u) => {
        setUser(u);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e.toString());
      });
  };

  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        isLoading, 
        error,
        login: onLogin,
        register: onRegister,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
}