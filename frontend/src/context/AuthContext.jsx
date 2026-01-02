import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
 
const AuthContext = createContext();
 
export function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
 
  const handleLogin = (username, password) => {
    if (username === "user1" && password === "1234") {
      setIsLoggedIn(true);
      setUser(username);
      navigate("/Home");
    } else {
      setIsLoggedIn(false);
      setUser(null);
      navigate("/Login");
    }
  };
 
  return (
    <AuthContext.Provider value={{ isLoggedIn, user, handleLogin }}>
      {children}
    </AuthContext.Provider>
  );
}
 
export function useAuth() {
  return useContext(AuthContext);
}
 