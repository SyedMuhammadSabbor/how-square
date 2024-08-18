"use client";

import React, { createContext, useState, useContext } from "react";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

const token = Cookies.get("accessToken");
let userInfo = null;
if (token) {
  userInfo = jwtDecode(token);
}

const UserContext = createContext({
  user: userInfo,
  setUser: () => {},
  accessToken: token,
  setAccessToken: () => {},
  scrolled: false,
  setScrolled: () => {},
  showPopup: false,
  setShowPopup: () => {},
});

export const StoreProvider = ({ children }) => {
  const [user, setUser] = useState(userInfo);
  const [accessToken, setAccessToken] = useState(token);
  const [showPopup, setShowPopup] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const values = {
    scrolled,
    setScrolled,
    showPopup,
    setShowPopup,
    user,
    setUser,
    accessToken,
    setAccessToken,
  };

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

export const useStoreContext = () => useContext(UserContext);
