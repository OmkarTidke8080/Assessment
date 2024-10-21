import React, { useEffect, useState } from 'react'
import axios from 'axios'

function ShowAllUsers() {
    const [users, setUsers] = useState([]);


    const getAllUsers = async() =>{
       const allUsers = await axios.get(
         "http://localhost:3000/api/user/getAllUsers",
         {
            withCredentials:true
         }
       );
       setUsers(allUsers.data.users)

       console.log(use)
    }


    useEffect(() =>{
        getAllUsers();
    },[]);

    return (
        <>
        <table className='w-[800px] text-sm border-2 rounded-md  text-white overflow-hidden'>

            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email </th>
                    <th>Role</th>
                    <th>Actions</th>
                </tr>
            </thead>

            <tbody>
                {users.length === 0 ? (
                    <h1>No Users found</h1>
                ) : (
                   users.map((user) =>
                    <tr>
                        <td>
                            {user.FirstName}
                        </td>
                        <td>
                            {user.LastName}
                        </td>
                        <td>
                            {user.Email}
                        </td>
                        <td>
                            {user.UserName}
                        </td>
                        <td>
                            {user.FirstName}
                        </td>
                    </tr>
                )
                )}

            </tbody>
        </table>
        </>
    )
}

export default ShowAllUsers
