import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import axios from "axios";

const DirectorAppRequestList = () => {
  const [request, setRequestByManagerReqApproved] = useState([]);

  const [isHover, setIsHover] = useState(false);
  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  useEffect(() => {
    getRequestByManagerReqApproved();
  }, []);

  const getRequestByManagerReqApproved = async () => {
    const response = await axios.get("http://localhost:5000/requestByManagerReqApproved");
    setRequestByManagerReqApproved(response.data);
  };

  const deleteRequest = async (requestId) => {
    await axios.delete(`http://localhost:5000/request/${requestId}`);
    getRequestByManagerReqApproved();
  };

  return (
    <div>
        <div style={{ width: "100%", padding: '25px', }} className="button is-primary mb-2">


<NavLink to={"/directorPendingRequest"} className="button is-primary mb-2" style={{textDecoration: "none"}}>
  Pending
</NavLink>


<NavLink to={"/directorRequestRejectAll"} className="button is-primary mb-2" style={{textDecoration: "none"}}>
  Director Decline
</NavLink>



<NavLink to={"/directorAppRequest"} className="button is-primary mb-2" style={{textDecoration: "none"}}>
  Approved Request 
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
          {request.map((request, index) => (
            <tr key={request.uid}>
              <td>{index + 1}</td>
              <td>{request.staffid}</td>
              <td>{request.staffName}</td>
              <td>{request.itemName}</td>
              <td>{request.descri}</td>
              <td>{request.requestAt}</td>
              <td style={{ backgroundColor: 'orange', color: 'White', fontWeight: 500, fontSize: '21px', }}>{request.managerApproved}</td>
              <td style={{ backgroundColor: 'black', color: 'White', fontWeight: 500, fontSize: '21px', }}>{request.directorApproved}</td>

            
            </tr>
          ))}
        </tbody>
      </table>

      <h2></h2>
    </div>
  );
};

export default DirectorAppRequestList;
