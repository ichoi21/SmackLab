import React, { createContext, useReducer } from "react";
import { initialState, AuthReducer} from "../reducers/authReducer";

const authContext = createContext({});

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useReducer(AuthReducer, initialState);

  //const setAuthData = (data) => { setAuth({ data: data }); };

  console.log("auth context", auth);
  return (
    <authContext.Provider value={{ auth, setAuth }}>
      {children}
    </authContext.Provider>
  );
};

const useAuthContext = () => {
  return React.useContext(authContext)
}


export { AuthProvider, useAuthContext};
