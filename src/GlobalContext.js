import { createContext, useEffect, useState } from "react";

const initialState = {
  id: localStorage.getItem("currentUserId"),
};

export const Context = createContext();

export const GlobalContext = ({ children }) => {
  const [user, setUser] = useState(localStorage.getItem("currentUserId") ? initialState : "");


  useEffect(() => {
    localStorage.setItem("currentUserId", user.id);
  }, [user]);

  return (
    <Context.Provider value={[user, setUser]}>{children}</Context.Provider>
  );
};
