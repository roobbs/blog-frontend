import "./styles/App.css";
import Router from "./Router";
import { useState, createContext, useEffect } from "react";

export const UserContext = createContext({
  user: false,
  token: "",
  setUser: () => {},
  logOut: () => {},
});

function App() {
  const [user, setUser] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("blogUser");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
      console.log(storedUser);
    }
  }, []);

  const handleLogout = (navigate) => {
    setUser(false);
    localStorage.removeItem("blogUser");
    localStorage.removeItem("token");
    navigate();
  };

  return (
    <UserContext.Provider value={{ user, setUser, handleLogout }}>
      <Router></Router>
    </UserContext.Provider>
  );
}

export default App;
