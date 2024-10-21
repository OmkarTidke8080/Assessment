import React, { useEffect, useState } from "react";
import axios from "axios";

function ShowAllUsers() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  const getAllUsers = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/user/getAllUsers",
        {
          withCredentials: true,
        }
      );

      console.log("API Response:", response.data);

      if (response.data && response.data.users) {
        setUsers(response.data.users);
      } else {
        setError("No users found.");
      }
    } catch (error) {
      console.error(
        "Error fetching users:",
        error.response ? error.response.data : error.message
      );
      setError("Failed to load users.");
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <div className="flex alin justify-center items-center min-h-screen bg-gray-800">
      <table className="w-[800px] text-sm border-2 border-white rounded-md text-white overflow-hidden">
        <thead>
          <tr>
            <th className="p-2 border-b border-white">First Name</th>
            <th className="p-2 border-b border-white">Last Name</th>
            <th className="p-2 border-b border-white">Email</th>
            <th className="p-2 border-b border-white">Role</th>
            <th className="p-2 border-b border-white">Actions</th>
          </tr>
        </thead>

        <tbody>
          {error ? (
            <tr>
              <td colSpan="5" className="text-center p-4 text-red-500">
                {error}
              </td>
            </tr>
          ) : users.length === 0 ? (
            <tr>
              <td colSpan="5" className="text-center p-4">
                No Users found
              </td>
            </tr>
          ) : (
            users.map((user) => (
              <tr key={user.id}>
                <td className="p-2 border-b border-white">{user.FirstName}</td>
                <td className="p-2 border-b border-white">{user.LastName}</td>
                <td className="p-2 border-b border-white">{user.Email}</td>
                <td className="p-2 border-b border-white">{user.Role}</td>
                <td className="p-2 border-b border-white">
                  <button className="text-blue-400">Delete</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ShowAllUsers;
