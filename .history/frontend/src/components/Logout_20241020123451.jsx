import React, { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

function Logout() {

      const navigate = useNavigate();
      
      useEffect(() => {
        const logout = async () => {
          try {
            const response = await axios.post(
              "http://localhost:3000/api/user/signOut",
              {
                headers: {
                  "Content-Type": "application/json",
                },
                withCredentials: true,
              }
            );

          
          } catch (error) {}
        };

        logout();
      });


    return (
        <>


        </>
    )
}

export default Logout
