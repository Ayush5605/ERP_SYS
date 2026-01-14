import React, { useEffect } from "react";
import { createContext,useContext,useState } from "react";

export const UserContext=createContext();
import { ROLES } from "../constants/roles.js";

export const UserProvider=({children})=>{
    const[user,setUser]=useState(null);

    useEffect(()=>{
        const storedUser=localStorage.getItem("user");
        if(storedUser){
            setUser(JSON.parse(storedUser));
        }
    },[]);


    return(
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>

    )
};

export const useUser=()=>useContext(UserContext);