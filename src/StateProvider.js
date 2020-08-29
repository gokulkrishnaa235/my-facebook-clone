import React, { createContext, useContext, useReducer } from "react";

export const StateContext = createContext(); //this is essentially for preparing data layer 

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
); //hoc to wrap our app 

export const useStateValue = () => useContext(StateContext); //used to pulls off value from data layer 