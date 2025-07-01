import { createContext, useContext, useReducer } from "react";
import { loginReducer, initialState } from "./LoginReducer";

const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [state, dispatch] = useReducer(loginReducer, initialState);

  return (
    <LoginContext.Provider value={{ state, dispatch }}>
      {children}
    </LoginContext.Provider>
  );
};

export const useLogin = () => useContext(LoginContext);
