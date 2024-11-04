import { useReducer, useState } from "react";

export default function UseReducerr4() {
  const [state, dispatch] = useReducer(reducer, { balance: 0 });
  const [amount, setAmount] = useState(0);
  function reducer(state, action) {
    if (action.type === "add") {
      return { ...state, balance: state.balance + action.payload };
    }

    if (action.type === "minus")
      return { ...state, balance: state.balance - action.payload };
  }

  return (
    <div>
      Total Balance:{state.balance} <br />
      <input
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        type="text"
      />
      <button
        onClick={() => dispatch({ type: "add", payload: Number(amount) })}
      >
        Deposite
      </button>
      <button
        onClick={() => dispatch({ type: "minus", payload: Number(amount) })}
      >
        Withraw
      </button>
    </div>
  );
}
