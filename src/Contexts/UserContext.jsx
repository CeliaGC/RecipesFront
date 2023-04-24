import React, { createContext, useEffect, useState } from "react";
import { useLocalStorage } from "../Hooks/useLocalStorage";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {

    const [userStorage, setUserStorage] = useLocalStorage('userData', '')

    const userData = localStorage.getItem('userData');
    const parsedUserData = JSON.parse(userData);
    const IdRol = parsedUserData && parsedUserData.item2;
    

    const data = {
        userStorage, setUserStorage, IdRol
    }

    return (
        <UserContext.Provider value={data}>
            {children}
        </UserContext.Provider>
    )
}