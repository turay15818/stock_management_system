import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const FormAddUser = () => {

  const [stockBulkUpload, setStockBulkUpload] = useState("");
 
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const saveUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/stockBulkUpload", {
        stockBulkUpload: stockBulkUpload,
        headers: {
            // Multer only parses "multipart/form-data" requests
            'Content-Type': 'multipart/form-data',
          },
      });
    
      navigate("/users");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };
  return (
    <div>
      <h1 className="title">Bulk Stock Upload</h1>
      {/* <h2 className="subtitle">Add New User</h2> */}
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <form onSubmit={saveUser} method="POST" encType='multipart/form-data' action="./uploads">
              <p className="has-text-centered">{msg}</p>
              
              
              <div className="field">
               
                <label className="label">Select A CSV File to Upload</label>
                <div className="control">
                  <input
                  required
                    type="file"
                    accept='csv'
                    className="input"
                    value={stockBulkUpload}
                    onChange={(e) => {setStockBulkUpload(e.current.files[0])}}
                    
                    placeholder="Name"
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

export default FormAddUser;
