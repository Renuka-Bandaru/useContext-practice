import React, { createContext, useState } from 'react'

export const UserContext = createContext();

export function  UserProvider({children}) {
    const [user, setUser] = useState({
        name: "Renuka",
        profilePic: "profilepic.jpg",
        notifications: 5 
    })
    return(
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}
 