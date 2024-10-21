import React, { useEffect } from 'react'

function Logout() {

      useEffect(() => {
        const getUserDetails = async () => {
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

        getUserDetails();
      }, [setViewProfile]);


    return (
        <>

        </>
    )
}

export default Logout
