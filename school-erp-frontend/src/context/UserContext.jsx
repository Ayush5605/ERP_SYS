import React from "react";
import { createContext,useContext,useState } from "react";

export const UserContext=createContext();

export const UserProvider=({children})=>{
    const[user,setUser]=useState({
        name:"Admin",
        role:"ADMIN"
    })


    return(
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>

    )
};

export const useUser=()=>useContext(UserContext);