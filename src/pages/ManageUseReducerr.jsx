import UseStatee from "../components/UseStatee";
import UseReducerr from "../components/UseReducerr";
import UseReducerr2 from "../components/UseReducerr2";
import UseReducerr3 from "../components/UseReducerr3";
import UseReducerr4 from "../components/UseReducerr4";
import { Link } from "react-router-dom";
export default function ManageUseReducerrr() {
  return (
    <div>
      <Link to="/">Homepage</Link>
      <h3>UseState & UseReducer</h3>
      <UseStatee />
      <UseReducerr />
      <hr />
      <h3>UseReducer-2</h3>
      <UseReducerr2 />
      <hr />
      <h3>UseReducer-3</h3>
      <UseReducerr3 />
      <hr />
      <h3>UseReducer-4</h3>
      <UseReducerr4 />
      <hr />
    </div>
  );
}
