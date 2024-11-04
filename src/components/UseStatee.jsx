import { useState } from "react";
export default function UseStatee() {
  const [count, setCount] = useState(0);
  return (
    <div>
      use State:{count}
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <br />
    </div>
  );
}
