import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export default function Checkout() {
  const { user } = useContext(UserContext);

  return <div>This is the checkout components value:{user}</div>;
}
