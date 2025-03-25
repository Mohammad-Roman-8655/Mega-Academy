import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token") || "");

  useEffect(() => {
    if (token) {
      fetchUserProfile();
    }
  }, [token]);

  const fetchUserProfile = async () => {
    try {
      const res = await fetch("http://localhost:8080/api/auth/profile", {
        headers: {
          Authorization: token,
        },
      });

      const data = await res.json();
      if (res.ok) {
        setUser(data);
      } else {
        setUser(null);
      }
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };

  const login = (token) => {
    localStorage.setItem("token", token);
    setToken(token);
    fetchUserProfile();
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    setToken("");
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
