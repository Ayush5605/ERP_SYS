import React from "react";
import { createContext,useContext,useState } from "react";

export const UserContext=createContext();
import { ROLES } from "../constants/roles.js";

export const UserProvider=({children})=>{
    const[user,setUser]=useState({
        name:"Admin",
        role:ROLES.TEACHER
    })


    return(
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>

    )
};

export const useUser=()=>useContext(UserContext);