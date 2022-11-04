import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Userlist = (props) => {
  const [users, setUsers] = useState([]);
 

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/users");
    setUsers(response.data);

  };

  const deleteUser = async (userId) => {
    await axios.delete(`http://localhost:5000/users/${userId}`);
    getUsers();

  };

  return (
    <div>
         <h2>Turaymathic{props.totalStock}</h2>
      <h1 className="title">Users</h1>
      <h2 className="subtitle">List of Users</h2>
      <Link to="/users/add" className="button is-primary mb-2">
        Add New New User
      </Link>
      <table className="table is-striped is-fullwidth">
        <h1>{alert}</h1>
        <thead>
          <tr>
            <th>No</th>
            <th>Staff ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Staff Dept</th>
            <th>Staff Status</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.uid}>
              <td>{index + 1}</td>
              <td>{user.staffid}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.department}</td>
              <td>{user.staffStatus}</td>
              <td>{user.role}</td>
              <td>
                <Link
                  to={`/users/edit/${user.uid}`}
                  className="button is-small is-info"
                >
                  Edit
                </Link>
                <button
                  onClick={() => deleteUser(user.uid)}
                  className="button is-small is-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Userlist;
