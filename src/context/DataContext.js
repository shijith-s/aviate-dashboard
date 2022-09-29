import React, { createContext, useReducer, useContext } from "react";
import reducer, { initialState } from "./Reducer";

export const DataContext = createContext();

export const DataProvider = ({ children }) => (
  <DataContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </DataContext.Provider>
);

const DataContextProvider = () => useContext(DataContext);

export default DataContextProvider;
