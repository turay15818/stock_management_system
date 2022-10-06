import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const RequestList = () => {
  const [request, setRequest] = useState([]);

  useEffect(() => {
    getRequest();
  }, []);

  const getRequest = async () => {
    const response = await axios.get("http://localhost:5000/request");
    setRequest(response.data);
  };

  const deleteRequest = async (requestId) => {
    await axios.delete(`http://localhost:5000/request/${requestId}`);
    getRequest();
  };

  return (
    <div>
      <h1 className="title">Request</h1>
      <h2 className="subtitle">List of Request</h2>
      <Link to="/request/add" className="button is-primary mb-2">
        Add New
      </Link>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>No</th>
            <th>Staff ID</th>
            <th>Staff Name</th>
            <th>Item Name</th>
            <th>Requested At</th>
            <th>Approved</th>
            <th>Disapproved</th>
          </tr>
        </thead>
        <tbody>
          {request.map((request, index) => (
            <tr key={request.uid}>
              <td>{index + 1}</td>
              <td>{request.staffId}</td>
              <td>{request.staffName}</td>
              <td>{request.itemName}</td>
              <td>{request.requestAt}</td>
              <td>{request.Approved}</td>
              <td>{request.reject}</td>
              
              <td>
                <Link
                  to={`/request/edit/${request.uid}`}
                  className="button is-small is-info"
                >
                  Edit
                </Link>
                <button
                  onClick={() => deleteRequest(request.uid)}
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

export default RequestList;
