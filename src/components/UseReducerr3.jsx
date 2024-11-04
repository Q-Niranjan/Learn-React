import { useReducer } from "react";
export default function UseReducerr3() {
  const [state, dispatch] = useReducer(reducer, { count: 0, incrementBy: 1 });
  function reducer(state, action) {
    if (action.type == "increment")
      return { ...state, count: state.count + state.incrementBy };

    if (action.type == "decerement")
      return { ...state, count: state.count - state.incrementBy };

    if (action.type == "setIncrement")
      return { ...state, incrementBy: action.payload };
  }
  return (
    <div>
      use Reducer:{state.count} <br />
      incrementBy:
      <br />
      <input
        onChange={(e) =>
          dispatch({ type: "setIncrement", payload: Number(e.target.value) })
        }
        type="text"
        value={state.incrementBy}
      />
      <br />
      <br />
      <button onClick={() => dispatch({ type: "increment", payload: 1 })}>
        Increment Count
      </button>
      <button onClick={() => dispatch({ type: "decerement", payload: 1 })}>
        Decrement Count
      </button>
    </div>
  );
}
