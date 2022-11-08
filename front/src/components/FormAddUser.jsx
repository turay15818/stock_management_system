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





  const [staffid, setStaffid] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");
  const [staffStatus, setStaffStatus] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [role, setRole] = useState("");
  const [creator, setCreator] = useState(`${user && user.name}`);
  var [ipAddress, setIpAddress] = useState("");
  var [location, setLocation] = useState("");
  var [actionPerformed, setActionPerformed] = useState(`${userAdded}`);
  const [createdTime, setCreatedTime] = useState(`${today}`);
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const saveUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/users", {
        staffid: staffid,
        name: name,
        email: email,
        department: department,
        staffStatus: staffStatus,
        password: password,
        confPassword: confPassword,
        role: role,
        creator: creator,
        ipAddress: ipAddress = (`${ipInfo.ip.ip}`),
        location: location = (`${ipInfo.ip.country}`), //= ipInfo.ip.country + ipInfo.ip.country_code,
        createdTime: createdTime,
        actionPerformed: actionPerformed,
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
      <h1 className="title">Users</h1>
      <h2 className="subtitle">Add New User</h2>
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <form onSubmit={saveUser}>
              <p className="has-text-centered">{msg}</p>
              <div className="field">
                <label className="label">Staff ID</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={staffid}
                    onChange={(e) => setStaffid(e.target.value)}
                    placeholder="Staff Id"
                  />
                </div>
                <label className="label">Name</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Email</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                  />
                </div>
              </div>




              <div className="field">
                <label className="label">Staff Department</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                    placeholder="Staff Department"
                  />
                </div>
              </div>



              <div className="field">
                <label className="label">Staff Status</label>
                <select
                  value={staffStatus}
                  onChange={(e) => setStaffStatus(e.target.value)}
                >
                  <option value="">Select</option>
                  <option value="Active">Active</option>
                  <option value="Not Active">Not Active</option>

                </select>
              </div>








              <div className="field">
                <label className="label">Password</label>
                <div className="control">
                  <input
                    type="password"
                    className="input"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="******"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Confirm Password</label>
                <div className="control">
                  <input
                    type="password"
                    className="input"
                    value={confPassword}
                    onChange={(e) => setConfPassword(e.target.value)}
                    placeholder="******"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Role</label>
                <div className="control">
                  <div className="select is-fullwidth">
                    <select
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                    >
                      <option value="">Select</option>
                      <option value="admin">Admin</option>
                      <option value="director">Director</option>
                      <option value="manager">Manager</option>
                      <option value="user">Users</option>
                    </select>
                  </div>
                </div>
              </div>



              <div className="field">
                {/* <label className="label">creator </label> */}
                <div className="control">
                  <input
                  hidden
                    type="text"
                    className="input"
                    value={user && user.name}
                    onChange={(e) => setCreator(e.target.value)}
                    placeholder="Staff Department"
                  />
                </div>
              </div>




              <div className="field">
                {/* <label className="label">IP Address</label> */}
                <div className="control">
                  <input
                  hidden
                    type="text"
                    className="input"
                    value={ipInfo.ip.ip}
                    onChange={(e) => setIpAddress(e.target.value)}
                    placeholder="Staff Department"
                  />
                </div>
              </div>



              <div className="field">
                {/* <label className="label">Location</label> */}
                <div className="control">
                  <input
                  hidden
                    type="text"
                    className="input"
                    value={ipInfo.ip.country}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Staff Department"
                  />
                </div>
              </div>



              <div className="field">
                {/* <label className="label">created Time</label> */}
                <div className="control">
                  <input
                  hidden
                    type="text"
                    className="input"
                    value={today}
                    onChange={(e) => setCreatedTime(e.target.value)}
                    placeholder="Staff Department"
                  />
                </div>
              </div>


              <div className="field">
                {/* <label className="label">Action Performed</label> */}
                <div className="control">
                  <input
                    type="text"
                    hidden
                    className="input"
                    value={userAdded}
                    onChange={(e) => setActionPerformed(e.target.value)}
                    placeholder="Staff Department"
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
