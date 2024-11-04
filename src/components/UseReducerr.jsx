import { useReducer } from "react";
export default function UseReducerr() {
  const [state, dispatch] = useReducer(reducer, 0);
  function reducer(state, action) {
    if (action.type == "increment") {
      return state + action.payload;
    }
    if (action.type == "decerement") return state - action.payload;
  }
  return (
    <div>
      use Reducer:{state}
      <button onClick={() => dispatch({ type: "increment", payload: 1 })}>
        Increment Count
      </button>
      <button onClick={() => dispatch({ type: "decerement", payload: 1 })}>
        Decrement Count
      </button>
    </div>
  );
}
