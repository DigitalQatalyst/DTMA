"use client";
import {
  AuthSession,
  destroySession,
  getSession,
  storeSession,
} from "@/app/auth/session/authSession";
import React, { createContext, useContext, useState, useEffect } from "react";
// import {
//   AuthSession,
//   getSession,
//   storeSession,
//   destroySession,
// } from "./session/authSession"; // Assuming your session utils are here

interface AuthContextProps {
  user: AuthSession | null;
  authenticated: boolean;
  login: (session: AuthSession) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<AuthSession | null>(null);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    // Check if there is a session in localStorage
    const storedSession = getSession();
    if (storedSession && storedSession?.authenticated) {
      setUser(storedSession);
      setAuthenticated(true);
    }
  }, []);

  const login = (session: AuthSession) => {
    storeSession(session);
    setUser(session);
    setAuthenticated(true);
  };

  const logout = () => {
    destroySession();
    setUser(null);
    setAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ user, authenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
