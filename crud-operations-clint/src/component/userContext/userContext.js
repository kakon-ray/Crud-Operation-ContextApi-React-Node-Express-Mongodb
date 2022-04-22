import React, { useState, createContext, useEffect } from "react";

export const userContext = createContext();

export const UserProvider = (props) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/item")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <userContext.Provider value={[users, setUsers]}>
      {props.children}
    </userContext.Provider>
  );
};
