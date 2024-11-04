import { Link } from "react-router-dom";

export default function PageNotFount() {
  return (
    <div>
      Something Went Wrong, Try Again!!
      <br />
      <Link to="/">HomePage</Link>
    </div>
  );
}
