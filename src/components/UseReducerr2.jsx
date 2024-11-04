import { useReducer } from "react";
export default function UseReducerr2() {
  const [state, dispatch] = useReducer(reducer, { count: 0, somevalue: 5 });
  function reducer(state, action) {
    if (action.type == "increment")
      return { ...state, count: state.count + action.payload };

    if (action.type == "decerement")
      return { ...state, count: state.count - action.payload };
  }
  return (
    <div>
      use Reducer:{state.count}
      <button onClick={() => dispatch({ type: "increment", payload: 1 })}>
        Increment Count
      </button>
      <button onClick={() => dispatch({ type: "decerement", payload: 1 })}>
        Decrement Count
      </button>
    </div>
  );
}
