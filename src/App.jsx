import "./styles/App.css";
import Router from "./Router";
import { useState, createContext, useEffect } from "react";

export const UserContext = createContext({
  user: false,
  token: "",
  setUser: () => {},
  setToken: () => {},
});

function App() {
  const [user, setUser] = useState(false);
  const [token, setToken] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("blogUser");
    const storedToken = localStorage.getItem("token");

    if (storedUser && storedToken) {
      setUser(JSON.parse(storedUser));
      setToken(storedToken);
      console.log(storedUser);
      console.log(storedToken);
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, token, setUser, setToken }}>
      <Router></Router>
    </UserContext.Provider>
  );
}

export default App;
