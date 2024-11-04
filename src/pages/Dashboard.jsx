import { Link, Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
    <div>
      This is dashborad page!
      <ul>
        <li>
          <Link to="profile">Profile</Link>
        </li>
        <li>
          <Link to="setting">Setting</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
