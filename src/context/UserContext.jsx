import { createContext, useReducer } from "react";
const UserContext = createContext();

function UserProvider({ children }) {
  function userReducer(state, action) {
    if (action.type == "login") {
      return action.payload;
    }
    if (action.type == "logout") {
      return action.payload;
    }
  }
  const [user, dispatch] = useReducer(userReducer, "");
  return (
    <UserContext.Provider value={{ user, dispatch }}>
      {children}
    </UserContext.Provider>
  );
}

export { UserProvider, UserContext };
