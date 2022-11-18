import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import moment from 'moment'

const FormAddRequest = () => {
  const requestSent = "Sent Request"

  const URL = "https://ip.nf./me.json";
    const [ipInfo, setIpInfo] = useState({ ip: "" });
    useEffect(() => {
        fetch(URL, { method: "get" })
            .then((response) => response.json())
            .then((data) => {
                setIpInfo({ ...data });
            })
    }, []);


  const { user } = useSelector((state) => state.auth);
  const currentDate = moment().format('DD-MM-YYYY')
  const date = new Date();
  const current_time = date.getHours() + ":" + " " + date.getMinutes();
  const today = current_time + "  " + currentDate;
  const pending = ("Pending");


  var [senderIp, setSenderIp] = useState(`${ipInfo.ip.ip}`);
    var [senderLocation, setSenderLocation] = useState(`${ipInfo.ip.country}`);
    var [senderAction, setSenderAction] = useState(`${requestSent}`);

  const [staffid, setStaffid] = useState(`${user && user.staffid}`);
  const [staffName, setStaffName] = useState(`${user && user.name}`);
  const [itemName, setItemName] = useState("");
  const [descri, setDescri] = useState("");
  const [requestAt, setRequestAt] = useState(`${today}`);
  const [managerApproved, setManagerApproved] = useState(`${pending}`);
  const [directorApproved, setDirectorApproved] = useState(`${pending}`);
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();


  const saveRequest = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/request", {
        staffid: staffid,
        staffName: staffName,
        itemName: itemName,
        descri: descri,
        requestAt: requestAt,
        managerApproved: managerApproved,
        directorApproved: directorApproved,
        senderAction: senderAction=(`${requestSent}`),
        senderIp: senderIp= (`${ipInfo.ip.ip}`),
        senderLocation: senderLocation= (`${ipInfo.ip.country}`),
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
                {/* <label className="label">Staff ID</label> */}
                <div className="control">
                  <input
                    type='hidden'

                    className="input"
                    value={user && user.staffid}
                    onChange={(e) => setStaffid(e.target.value)}
                    placeholder="Staff ID"
                  />
                </div>
              </div>
              <div className="field">
                {/* <label className="label">User Name</label> */}
                <div className="control">

                  <input
                    type='hidden'
                    className="input"
                    value={user && user.name}

                    onChange={(e) => setStaffName(e.target.value)}
                    placeholder="User Name"
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
                <label className="label">Description</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={descri}
                    onChange={(e) => setDescri(e.target.value)}
                    placeholder="Description"
                  />
                </div>
              </div>
              <div className="field">
                {/* <label className="label">Requested At</label> */}
                <div className="control">
                  <input
                    // type="datetime-local"
                    hidden
                    className="input"
                    value={today}
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
                    value={pending}
                    onChange={(e) => setManagerApproved(e.target.value)}
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
                    value={pending}
                    onChange={(e) => setDirectorApproved(e.target.value)}
                    placeholder=""
                  />
                </div>
              </div>


              {/* <div className="field">
                <label className="label">IP Address</label>
                <div className="control">
                  <input
                  hidden
                    type="text"
                    className="input"
                    value={ipInfo.ip.ip}
                    onChange={(e) => setSenderIp(e.target.value)}
                    placeholder="Staff Department"
                  />
                </div>
              </div> */}



{ 
    user && user?.role === 'admin' ? (
      <div className="field">
        <label className="label">IP Address</label>
        <div className="control">
          <input
            hidden
            type="text"
            className="input"
            value={ipInfo.ip.ip}
            onChange={(e) => setSenderIp(e.target.value)}
            placeholder="Staff Department"
          />
        </div>
      </div>
    ) : ('')
  
  }






              <div className="field">
                {/* <label className="label">Location</label> */}
                <div className="control">
                  <input
                  hidden
                    type="text"
                    className="input"
                    value={ipInfo.ip.country}
                    onChange={(e) => setSenderLocation(e.target.value)}
                    placeholder="Staff Department"
                  />
                </div>
              </div>

              <div className="field">
                <label className="label">Action Performed</label>
                <div className="control">
                  <input
                    type="text"
                    hidden
                    className="input"
                    value={requestSent}
                    onChange={(e) => setSenderAction(e.target.value)}
                    placeholder="Sender Action"
                  />
                </div>
              </div>













              <div className="field">
                <div className="control">
                  <button type="submit" className="button is-success">
                    Send Request
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



