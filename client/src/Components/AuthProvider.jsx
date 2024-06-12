import { createContext, useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    token: null,
    isAuthenticated: false,
  });

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      setAuthState({ token, isAuthenticated: true });
    }
  }, []);

  const log = (token) => {
    localStorage.setItem("authToken", token);
    setAuthState({ token, isAuthenticated: true });
  };

  const login = (token) => {
    localStorage.setItem("authToken", token);
    setAuthState({ token, isAuthenticated: true });
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    setAuthState({ token: null, isAuthenticated: false });
  };

  return (
    <AuthContext.Provider value={{ authState, log, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.PropTypes = {
  children: PropTypes.object.isRequired,
};

export const useAuth = () => useContext(AuthContext);
