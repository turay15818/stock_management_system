import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
const FormEditRequest = () => {
  // const [staffId, setStaffId] = useState("");
  // const [staffName, setStaffName] = useState("");
  // const [itemName, setItemName] = useState("");
  // const [requestAt, setRequestAt] = useState("");
  const [approved, setApproved] = useState("");
  // const [reject, setReject] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();


  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    const getRequestById = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/request/${id}`
        );
        // setStaffId(response.data.staffId);
        // setStaffName(response.data.staffName);
        // setItemName(response.data.itemName);
        // setRequestAt(response.data.requestAt);
        setApproved(response.data.approved);
        // setReject(response.data.reject);

    
      } catch (error) {
        if (error.response) {
          setMsg(error.response.data.msg);
        }
      }
    };
    getRequestById();
  }, [id]);

  const updateRequest = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/Request/${id}`, {
        // staffId: staffId,
        // staffName: staffName,
        // itemName: itemName,
        // requestAt: requestAt,
        approved: approved,
        // reject: reject,
      });
      navigate("/managerRequest");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    // <div>
    //   <h1 className="title">Request</h1>
    //   <h2 className="subtitle">Edit Request</h2>
    //   <div className="card is-shadowless">
    //     <div className="card-content">
    //       <div className="content">
    //         <form onSubmit={updateRequest}>
    //           <p className="has-text-centered">{msg}</p>
    //           <div className="field">
    //             <label className="label">Name</label>
    //             <div className="control">
    //               <input
    //                 type="text"
    //                 className="input"
    //                 value={name}
    //                 onChange={(e) => setName(e.target.value)}
    //                 placeholder="Request Name"
    //               />
    //             </div>
    //           </div>
    //           <div className="field">
    //             <label className="label">Price</label>
    //             <div className="control">
    //               <input
    //                 type="text"
    //                 className="input"
    //                 value={price}
    //                 onChange={(e) => setPrice(e.target.value)}
    //                 placeholder="Price"
    //               />
    //             </div>
    //           </div>

    //           <div className="field">
    //             <div className="control">
    //               <button type="submit" className="button is-success">
    //                 Update
    //               </button>
    //             </div>
    //           </div>
    //         </form>
    //       </div>
    //     </div>
    //   </div>
    // </div>


    <div>
      <h1 className="title">Respond To Request</h1>
      {/* <h2 className="subtitle">Send New Request</h2> */}
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <form onSubmit={updateRequest}>
              <p className="has-text-centered">{msg}</p>


              {/* <div className="field">
                <label className="label">Staff ID</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={staffId}
                    onChange={(e) => setStaffId(e.target.value)}
                    placeholder="Staff ID"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Staff Name</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={staffName}
                    onChange={(e) => setStaffName(e.target.value)}
                    placeholder="Staff Name"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Item Name</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={itemName}
                    onChange={(e) => setItemName(e.target.value)}
                    placeholder="Item Name"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Requested At</label>
                <div className="control">
                  <input
                    type="date"
                    className="input"
                    value={requestAt}
                    onChange={(e) => setRequestAt(e.target.value)}
                    placeholder=""
                  />
                </div>
              </div> */}



              <div className="field">
              <label className="label">Manager Action</label>
                <div className="control">
                  <select
                      value={approved}
                      onChange={(e) => setApproved(e.target.value)}
                    >
                      <option value="">Select</option>
                      <option value="Approved">Approve</option>
                      <option value="Decline">Decline/Reject</option>
                    </select>
                </div>
              </div>


              {/* <div className="field">
                <label className="label">Director Action</label>
                <div className="control">
                  <select
                      value={reject}
                      onChange={(e) => setReject(e.target.value)}
                    >
                      <option value="">Select</option>
                      <option value="Approved">Approve</option>
                      <option value="Decline">Decline/Reject</option>
                 
                    </select>
                </div>
              </div> */}



              <div className="field">
                <div className="control">
                  <button type="submit" className="button is-success">
                    Respond
                  </button>
                </div>
              </div>
           </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormEditRequest;
