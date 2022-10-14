import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
const FormEditRequest = () => {
  // const [staffId, setStaffId] = useState("");
  // const [staffName, setStaffName] = useState("");
  // const [itemName, setItemName] = useState("");
  // const [requestAt, setRequestAt] = useState("");
  const [managerApproved, setManagerApproved] = useState("");
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
        setManagerApproved(response.data.managerApproved);
        // setReject(response.data.reject);


      } catch (error) {
        if (error.response) {
          setMsg(error.response.data.msg);
        }
      }
    };
    getRequestById();
  }, [id]);

  const updateManagerApproved = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/Request/${id}`, {
        // staffId: staffId,
        // staffName: staffName,
        // itemName: itemName,
        // requestAt: requestAt,
        managerApproved: managerApproved,
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


    <div>
      <h1 className="title">Respond To Request</h1>
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <form onSubmit={updateManagerApproved}>
              <p className="has-text-centered">{msg}</p>

              <div className="field">
                <label className="label">Manager Action</label>
                <div className="control">
                  <select
                    value={managerApproved}
                    onChange={(e) => setManagerApproved(e.target.value)}
                  >
                    <option value="">Select</option>
                    <option value="approve">Approved</option>
                    <option value="reject"> Decline/Reject</option>
                  </select>
                </div>
              </div>


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
