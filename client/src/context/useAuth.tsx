import React, { useState, useEffect, createContext } from "react";

import SecureLS from "secure-ls";
import User from "../models/User";
import UserService from "../services/UserService";

const ls = new SecureLS({ encodingType: "aes" });

export interface IAuthContext {
  currentUser: User | null;
  signin: (user: User) => void;
  signout: () => void;
}

interface ProviderProps {
  children: React.ReactElement | React.ReactElement[];
}

export const AuthContext = createContext<IAuthContext | null>(null);

export const AuthProvider = ({ children }: ProviderProps) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    checkUser();
  }, [currentUser]);

  const signin = async (user: User) => {
    const { userFound, token } = await UserService.login(user);

    ls.set("token", JSON.stringify(token));
    ls.set("currentUser", JSON.stringify(userFound));
    setCurrentUser(user);
  };

  const signout = () => {
    setCurrentUser(null);
    ls.removeAll();
  };

  const checkUser = () => {
    let user = null;
    const auth = ls.get("currentUser");
    if (auth !== "") {
      user = new User(JSON.parse(auth));
      if (!currentUser) setCurrentUser(user);
      else if (user.id !== currentUser.id) setCurrentUser(user);
    }
  };

  return (
    <AuthContext.Provider value={{ currentUser, signin, signout }}>
      {children}
    </AuthContext.Provider>
  );
};
