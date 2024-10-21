import { createContext, useState } from "react";

import React from 'react'

function UserEmail() {
    return (
        <UserEmailContext.Provider
        value={
            {
                
                userEmail,
                setUserEmail
            }
        }
        ></UserEmailContext.Provider>
    )
}

export default UserEmail
