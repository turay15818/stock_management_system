import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";




const FormDirectorEditRequest = () => {
  
  const [reject, setReject] = useState("");
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
        setReject(response.data.reject);

    
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
      
        reject: reject,
      });
      navigate("/directorRequest");
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
            <form onSubmit={updateRequest}>
              <p className="has-text-centered">{msg}</p>

              <div className="field">
                <label className="label">Director Action</label>
                <div className="control">
                  <select
                      value={reject}
                      onChange={(e) => setReject(e.target.value)}
                    >
                      <option value="">Select</option>
                      <option  value="Your Request Have Been Approved by your Manager">Approve</option>
                    <option value="Sorry! but your request have been turn down"> Decline/Reject</option>
                 
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

export default FormDirectorEditRequest;
