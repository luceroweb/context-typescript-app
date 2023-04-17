import { useLoginContext } from "./useLoginContext";
import { DisplayLogin } from "./DisplayLogin";

export const Settings = () => {
  const { loggedIn } = useLoginContext();

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
