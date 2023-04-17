import "./App.css";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Settings } from "./components/Settings";
import { createContext, useState } from "react";

export const LoginContext = createContext({
  loggedIn: false,
  setLoggedIn: (loggedIn: boolean) => {},
});

function App() {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);

  return (
    <LoginContext.Provider value={{ loggedIn, setLoggedIn }}>
      <Login />
      <Home />
      <Settings />
    </LoginContext.Provider>
  );
}

export default App;
