import { useContext, useState } from "react";
import { UserContext } from "./context/UserContext";

export default function Login() {
  const [value, setValue] = useState("");
  const { use, dispatch } = useContext(UserContext);
  function handelSubmit(e) {
    e.preventDefault();

    dispatch({ type: "login", payload: value });
  }
  return (
    <div>
      <form onSubmit={handelSubmit}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
