import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import moment from 'moment';



const FormAddUser = () => {
  const { user } = useSelector((state) => state.auth);
  const currentDate = moment().format('DD-MM-YYYY')
  const date = new Date();
  const current_time = date.getHours() + ":" + " " + date.getMinutes();
  const today = current_time + "  " + currentDate;
  const userAdded = "User Added"

  const URL = "https://ip.nf./me.json";
  const [ipInfo, setIpInfo] = useState({ ip: "" });
  useEffect(() => {
      fetch(URL, { method: "get" })
          .then((response) => response.json())
          .then((data) => {
              setIpInfo({ ...data });
          })
  }, []);





  const [stockBulkUpload, setStockBulkUpload] = useState("");
 
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const saveUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/stockBulkUpload", {
        stockBulkUpload: stockBulkUpload,
       
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
            <form onSubmit={saveUser} method="POST" encType='multipart/form-data'>
              <p className="has-text-centered">{msg}</p>
              
              
              <div className="field">
               
                <label className="label">Select A CSV File to Upload</label>
                <div className="control">
                  <input
                  required
                    type="file"
                    className="input"
                    value={stockBulkUpload}
                    onChange={(e) => setStockBulkUpload(e.target.value)}
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
