import React, { useContext, useState, useEffect, createContext } from "react";
import { auth } from "../helpers/firebase";
import Router from "next/router";

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState({});
    const [loading, setLoading] = useState(true);

    const signup = (email, password) => {
        return auth.createUserWithEmailAndPassword(email, password);
    };

    const login = (email, password) => {
        return auth.signInWithEmailAndPassword(email, password);
    };

    const logout = () => {
        return auth.signOut();
    };

    useEffect(() => {
        const changeOfUserStatus = auth.onAuthStateChanged((user) => {
            if (user !== null && user.uid !== undefined && currentUser.uid === undefined) {
                Router.push("/");
            } else if (user !== null && user.uid !== undefined && currentUser.uid !== undefined && currentUser.uid !== user.uid) {
                Router.push("/");
            }

            setCurrentUser(user);
            setLoading(false);
        });
        return changeOfUserStatus;
    }, []);

    const contextValue = {
        currentUser,
        signup,
        login,
        logout,
        setCurrentUser,
    };

    return <AuthContext.Provider value={contextValue}>{!loading && children}</AuthContext.Provider>;
};
