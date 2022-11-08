import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import moment from "moment"



const FormDirectorEditRequest = () => {

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







  var [directorTime, setDirectorTime] = useState(`${today}`);
  var [directorIp, setDirectorIp] = useState("");
  var [directorLocation, setDirectorLocation] = useState("");
  var [directorName, setDirectorName] = useState(`${user && user.name}`);
  const [directorApproved, setDirectorApproved] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();


  useEffect(() => {
    const getRequestById = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/request/${id}`
        );
        setDirectorApproved(response.data.directorApproved);


      } catch (error) {
        if (error.response) {
          setMsg(error.response.data.msg);
        }
      }
    };
    getRequestById();
  }, [id]);

  const updateDirectorRequest = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/directorRequest/${id}`, {

        directorApproved: directorApproved,
        directorTime: directorTime,
        directorName: directorName,
        directorIp: directorIp = (`${ipInfo.ip.ip}`),
        directorLocation: directorLocation = (`${ipInfo.ip.country}`),
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
            <form onSubmit={updateDirectorRequest}>
              <p className="has-text-centered">{msg}</p>

              <div className="field">
                <label className="label">Director Action</label>
                <div className="control">
                  <select
                    value={directorApproved}
                    onChange={(e) => setDirectorApproved(e.target.value)}
                  >
                    <option value="">Select</option>
                    <option value="Approved">Approved</option>
                    <option value="Reject"> Decline/Reject</option>

                  </select>

                  <div className="control">
                    <input
                      style={{ width: "300px" }}
                      // type="text"
                      hidden
                      className="input"
                      value={today}
                      onChange={(e) => setDirectorTime(e.target.value)}
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
                        onChange={(e) => setDirectorIp(e.target.value)}
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
                        onChange={(e) => setDirectorLocation(e.target.value)}
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
                        onChange={(e) => setDirectorName(e.target.value)}
                        placeholder="Staff Department"
                      />
                    </div>
                  </div>






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
