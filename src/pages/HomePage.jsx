import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
export default function HomePage() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  function handelClick() {
    navigate("/dashboard/profile", { state: { username } });
  }
  return (
    <div>
      This is HomePage <br />
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <button onClick={handelClick}>Go to ProfilePage</button>
      <br />
      <Link to="./contactus">ContactUs</Link>
      <br />
      <Link to="./reducer">ReducerPage</Link>
      <br />
      <Link to="./*">PageNotFound</Link>
    </div>
  );
}
