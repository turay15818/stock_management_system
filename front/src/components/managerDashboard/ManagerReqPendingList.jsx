import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import axios from "axios";

const ManagerReqPendingList = () => {
  const [requestPending, setRequestByManagerReqPending] = useState([]);

  const [isHover, setIsHover] = useState(false);
  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  useEffect(() => {
    getRequestByManagerReqPending();
  }, []);

  const getRequestByManagerReqPending = async () => {
    const response = await axios.get("http://localhost:5000/requestByManagerReqPending");
    setRequestByManagerReqPending(response.data);
  };

  // const deleteRequest = async (requestId) => {
  //   await axios.delete(`http://localhost:5000/request/${requestId}`);
  //   getRequestByManagerReqApproved();
  // };

  return (
    <div>
      <div style={{ width: "100%", padding: '25px' }} className="button is-primary mb-2">


        <NavLink to={"/managerApprovedRequest"} className="button is-primary mb-2">
          Approved Request
        </NavLink>

        <NavLink to={"/managerReqPending"} className="button is-primary mb-2">
          Manager Pending
        </NavLink>

        <NavLink to={"/dirRequestPending"} className="button is-primary mb-2">
          Director Pending
        </NavLink>

        <NavLink to={"/managerReqRejected"} className="button is-primary mb-2">
          Manager Decline
        </NavLink>

        <NavLink to={"/dirRequestRejected"} className="button is-primary mb-2">
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
          {requestPending.map((request, index) => (
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





                <td>
                  <Link
                    to={`/request/edit/${request.uid}`}
                    className="button is-small is-info"
                    style={{ backgroundColor: 'black', color: 'White', fontWeight: 500, fontSize: '20px', }}
                  >
                    Take Action
                  </Link>

                </td>
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

export default ManagerReqPendingList;
