import { createContext, useState } from "react";

import React from 'react'

export const UserEmailContext = createContext({
    userEmail:""
})

function UserEmail({children}) {
    const [userEmail , setUserEmail] = useState("");

    return (
        <UserEmailContext.Provider
        value={
            {
                userEmail,
                setUserEmail
            }
        }
        >
            {children}
        </UserEmailContext.Provider>
    )
}

export default UserEmail
