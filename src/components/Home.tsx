import { useContext } from "react";
import { LoginContext } from "../App";
import { DisplayLogin } from "./DisplayLogin";

export const Home = () => {
  const { loggedIn, setLoggedIn } = useContext(LoginContext);

  return (
    <div className="pageLayout">
      <div>
        <h3>Home Page</h3>
      </div>
      {!loggedIn && <DisplayLogin />}
      <div></div>
    </div>
  );
};
