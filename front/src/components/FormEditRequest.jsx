import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import moment from "moment"

const FormEditRequest = () => {

  const { user } = useSelector((state) => state.auth);
  const currentDate = moment().format('DD-MM-YYYY')
  const date = new Date();
  const current_time = date.getHours() + ":" + " " + date.getMinutes();
  const today = current_time + "  " + currentDate;
  // const stockAssigned = "Stock Assigner To User"
  // const inUsed = "In Use";


  const URL = "https://ip.nf./me.json";
  const [ipInfo, setIpInfo] = useState({ ip: "" });


  useEffect(() => {
    fetch(URL, { method: "get" })
      .then((response) => response.json())
      .then((data) => {
        setIpInfo({ ...data });
      })
  }, []);







  var [managerTime, setManagerTime] = useState(`${today}`);
  var [managerIp, setManagerIp] = useState("");
  var [managerLocation, setManagerLocation] = useState("");
  var [managerName, setManagerName] = useState(`${user && user.name}`);
  const [managerApproved, setManagerApproved] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();




  useEffect(() => {
    const getRequestById = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/request/${id}`
        );

        setManagerApproved(response.data.managerApproved);



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

        managerApproved: managerApproved,
        managerTime: managerTime,
        managerName: managerName,
        managerIp: managerIp = (`${ipInfo.ip.ip}`),
        managerLocation: managerLocation = (`${ipInfo.ip.country}`),
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
              <p className="has-text-centered" style={{ color: 'red' }}>{msg}</p>

              <div className="field">
                <label className="label">Manager Action</label>
                <div className="control">
                  <select
                    value={managerApproved}
                    onChange={(e) => setManagerApproved(e.target.value)}
                  >
                    <option value="">Select</option>
                    <option value="Approved">Approved</option>
                    <option value="Reject"> Decline/Reject</option>
                  </select>
                </div>
              </div>

              <div className="control">
                <input
                  style={{ width: "300px" }}
                  // type="text"
                  hidden
                  className="input"
                  value={today}
                  onChange={(e) => setManagerTime(e.target.value)}
                  placeholder="Purchase Date"
                />
              </div>


              <div className="field">
                <label className="label">IP Address</label>
                <div className="control">
                  <input
                    //   hidden
                    type="text"
                    className="input"
                    value={ipInfo.ip.ip}
                    onChange={(e) => setManagerIp(e.target.value)}
                    placeholder="Staff Department"
                  />
                </div>
              </div>

              <div className="field">
                <label className="label">Location</label>
                <div className="control">
                  <input
                    //   hidden
                    type="text"
                    className="input"
                    value={ipInfo.ip.country}
                    onChange={(e) => setManagerLocation(e.target.value)}
                    placeholder="Staff Department"
                  />
                </div>
              </div>

              <div className="field">
                <label className="label">Action Performed</label>
                <div className="control">
                  <input
                    type="text"
                    // hidden
                    className="input"
                    value={user && user.name}
                    onChange={(e) => setManagerName(e.target.value)}
                    placeholder="Staff Department"
                  />
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
