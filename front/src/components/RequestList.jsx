import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import axios from "axios";

const RequestList = () => {
  const [requestA, setRequestByBothApproved] = useState([]);

  const [isHover, setIsHover] = useState(false);
  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  useEffect(() => {
    getRequestByBothApproved();
  }, []);

  const getRequestByBothApproved = async () => {
    const response = await axios.get("http://localhost:5000/requestByBothApproved");
    setRequestByBothApproved(response.data);
  };

  // const deleteRequest = async (requestId) => {
  //   await axios.delete(`http://localhost:5000/request/${requestId}`);
  //   getRequestByBothApproved();
  // };

  return (
    <div>
        <h1 className="title">Request</h1>
      <Link to="/request/add" className="button is-primary mb-2">
        Send New Request
      </Link>
      <h2 className="subtitle">List of Request</h2>

      <div style={{ width: "100%",  padding: '25px'}} className="button is-primary mb-2">


        <NavLink to={"/request"} className="button is-primary mb-2" style={{textDecoration: "none"}}>
          Approved Request
        </NavLink>

        <NavLink to={"/managerRequestPending"} className="button is-primary mb-2" style={{textDecoration: "none"}}>
          Manager Pending
        </NavLink>

        <NavLink to={"/directorRequestPending"} className="button is-primary mb-2" style={{textDecoration: "none"}}>
          Director Pending
        </NavLink>

        <NavLink to={"/managerRequestRejected"} className="button is-primary mb-2" style={{textDecoration: "none"}}>
          Manager Decline
        </NavLink>

        <NavLink to={"/directorRequestRejectedUser"} className="button is-primary mb-2" style={{textDecoration: "none"}}>
          Director Decline
        </NavLink>

      </div>






      <table className="table is-striped is-fullwidth">
        <thead>
          <tr style={{ boxShadow: "0px 0px 10px #000000", }}>
            <th style={{ border: "solid 2px", boxShadow: "0px 0px 10px #000000" }}>No</th>
            <th style={{ border: "solid 2px", boxShadow: "0px 0px 10px #000000" }}>Staff ID</th>
            <th style={{ border: "solid 2px", boxShadow: "0px 0px 10px #000000" }}>Staff Name</th>
            <th style={{ border: "solid 2px", boxShadow: "0px 0px 10px #000000" }}>Item Name</th>
            <th style={{ border: "solid 2px", boxShadow: "0px 0px 10px #000000" }}>Description</th>
            <th style={{ border: "solid 2px", boxShadow: "0px 0px 10px #000000" }}>Requested At</th>
            <th style={{ border: "solid 2px", boxShadow: "0px 0px 10px #000000" }}>Manager Action</th>
            <th style={{ border: "solid 2px", boxShadow: "0px 0px 10px #000000", }}>Director Action</th>
            {/* <th>Action</th> */}
          </tr>
        </thead>
        <tbody>
          {requestA.map((request, index) => (
            <tr key={request.uid}>
              <td>{index + 1}</td>
              <td>{request.staffid}</td>
              <td>{request.staffName}</td>
              <td>{request.itemName}</td>
              <td>{request.descri}</td>
              <td>{request.requestAt}</td>
              <td style={{ backgroundColor: 'orange', color: 'White', fontWeight: 500, fontSize: '21px', }}>{request.managerApproved}</td>
              <td style={{ backgroundColor: 'black', color: 'White', fontWeight: 500, fontSize: '21px', }}>{request.directorApproved}</td>

              <td>
                {/* <Link
                  to={`/request/edit/${request.uid}`}
                  className="button is-small is-info"
                  style={{backgroundColor: 'black', color: 'White', fontWeight: 500, fontSize: '10px',}}
                >
                  Take Action
                </Link> */}
                {/* <button
                  onClick={() => deleteRequest(request.uid)}
                  className="button is-small is-danger"
                >
                  Delete
                </button> */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RequestList;
