import { useContext } from "react";
import { LoginContext } from "../App";
import { DisplayLogin } from "./DisplayLogin";

export const Settings = () => {
  const { loggedIn, setLoggedIn } = useContext(LoginContext);

  return (
    <div className="pageLayout">
      <div>
        <h3>Settings</h3>
      </div>
      {!loggedIn && <DisplayLogin />}
      <div></div>
    </div>
  );
};
