import Checkout from "./Checkout";
import Login from "./Login";
import { UserProvider } from "./context/UserContext";
import Logout from "./Logout";

function App() {
  return (
    <div>
      <UserProvider>
        <Login />
        <Checkout />
        <Logout />
      </UserProvider>
    </div>
  );
}

export default App;
