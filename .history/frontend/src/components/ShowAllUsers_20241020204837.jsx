import React from 'react'
import axios from 'axios'

function ShowAllUsers() {
    const getAllUsers = async() =>{
       const users = axios.get("")
    }

    return (
        <>
        <table className='w-[800px] text-sm border-2 rounded-md  overflow-hidden'>

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

            </tbody>
        </table>
        </>
    )
}

export default ShowAllUsers