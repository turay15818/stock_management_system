import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FormAddRequest = () => {
  const [staffId, setStaffId] = useState("");
  const [staffName, setStaffName] = useState("");
  const [itemName, setItemName] = useState("");
  const [requestAt, setRequestAt] = useState("");
  const [approved, setApproved] = useState("");
  const [reject, setReject] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const saveRequest = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/request", {
        staffId: staffId,
        staffName: staffName,
        itemName: itemName,
        requestAt: requestAt,
        approved: approved,
        reject: reject,
      });
      navigate("/request");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <div>
      <h1 className="title">Request</h1>
      <h2 className="subtitle">Send New Request</h2>
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <form onSubmit={saveRequest}>
              <p className="has-text-centered">{msg}</p>
              <div className="field">
                <label className="label">Staff ID</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={staffId}
                    onChange={(e) => setStaffId(e.target.value)}
                    placeholder="Product Name"
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
                    placeholder="Product Name"
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
              </div>

              <div className="field">
              
                <div className="control">
                  <input
                    type="hidden"
                    className="input"
                    value={approved}
                    onChange={(e) => setApproved(e.target.value)}
                    placeholder=""
                  />

                </div>
              </div>
              <div className="field">
                {/* <label className="label"></label> */}
                <div className="control">
                  <input
                    type="hidden"
                    className="field"
                    value={reject}
                    onChange={(e) => setReject(e.target.value)}
                    placeholder=""
                  />
                </div>
              </div>

              <div className="field">
                <div className="control">
                  <button type="submit" className="button is-success">
                    Save
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

export default FormAddRequest;
