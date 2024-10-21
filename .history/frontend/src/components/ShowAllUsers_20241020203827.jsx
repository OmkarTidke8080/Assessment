import React from 'react'

function ShowAllUsers() {
    return (
        <>
        <table className='w-[800px] text-sm border-2 rounded-md  overflow-hidden'>

            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email </th>
                    <th>Role</th>
                </tr>
            </thead>
        </table>
        </>
    )
}

export default ShowAllUsers
