import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";






const FormEditUser = () => {
  const { user } = useSelector((state) => state.auth);
  const currentDate = moment().format('DD-MM-YYYY')
  const date = new Date();
  const current_time = date.getHours() + ":" + " " + date.getMinutes();
  const today = current_time + "  " + currentDate;
  const userUpdated = "User Updated"

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
  const [staffStatus, setStaffStatus] = useState("");
  const [department, setDepartment] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [role, setRole] = useState("");
  var [updator, setUpdator] = useState(`${user && user.name}`);
  var [updatorIpAddress, setUpdatorIpAddress] = useState("");
  var [updatorLocation, setUpdatorLocation] = useState("");
  var [updatePerformed, setUpdatePerformed] = useState(`${userUpdated}`);
  var [updatedTime, setUpdatedTime] = useState(`${today}`);
  const [msg, setMsg] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();


  useEffect(() => {
    var getUserById = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/users/${id}`);
        setStaffid(response.data.staffid);
        setName(response.data.name);
        setEmail(response.data.email);
        setStaffStatus(response.data.staffStatus);
        setDepartment(response.data.department);
        setRole(response.data.role);
        setUpdator(response.data.updator);
        setUpdatorIpAddress(response.data.updatorIpAddress);
        setUpdatorLocation(response.data.updatorLocation);
        setUpdatedTime(response.data.updatedTime);
        setUpdatePerformed(response.data.updatePerformed);
      } catch (error) {
        if (error.response) {
          setMsg(error.response.data.msg);
        }
      }
    };
    getUserById();
  }, [id]);

  var updateUser = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/users/${id}`, {
        staffid: staffid,
        name: name,
        email: email,
        department: department,
        staffStatus: staffStatus,
        password: password,
        confPassword: confPassword,
        role: role,
        updator: updator= (`${user && user.name}`),
        updatorIpAddress: updatorIpAddress = (`${ipInfo.ip.ip}`),
        updatorLocation: updatorLocation = (`${ipInfo.ip.country}`), //= ipInfo.ip.country + ipInfo.ip.country_code,
        updatedTime: updatedTime= (`${today}`),
        updatePerformed:updatePerformed= (`${userUpdated}`),
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
      <h2 className="subtitle">Update User</h2>
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <form onSubmit={updateUser}>
              <p className="has-text-centered">{msg}</p>
              <div className="field">
                <label className="label">{user && user.staffid}</label>
                <div className="control">
                  <input
                    type="hidden"
                    className="input"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                  />
                </div>
              </div>
              <div className="field">
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
                <label className="label">Staff Department</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                    placeholder="Email"
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
                <label className="label">Password</label>
                <div className="control">
                  <input
                    type="password"
                    className="input"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="***************"
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
                    placeholder="***************"
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
                      <option value="user">User</option>
                    </select>
                  </div>
                </div>
              </div>
              
              
              <div className="field">
                <label className="label">creator </label>
                <div className="control">
                  <input
                  // hidden
                    type="text"
                    className="input"
                    value={user && user.name}
                    onChange={(e) => setUpdator(e.target.value)}
                    placeholder="Staff Department"
                  />
                </div>
              </div>




              <div className="field">
                <label className="label">IP Address</label>
                <div className="control">
                  <input
                  // hidden
                    type="text"
                    className="input"
                    value={ipInfo.ip.ip}
                    onChange={(e) => setUpdatorIpAddress(e.target.value)}
                    placeholder="Staff Department"
                  />
                </div>
              </div>



              <div className="field">
                <label className="label">Location</label>
                <div className="control">
                  <input
                  // hidden
                    type="text"
                    className="input"
                    value={ipInfo.ip.country}
                    onChange={(e) => setUpdatorLocation(e.target.value)}
                    placeholder="Staff Department"
                  />
                </div>
              </div>



              <div className="field">
                <label className="label">created Time</label>
                <div className="control">
                  <input
                  // hidden
                    type="text"
                    className="input"
                    value={today}
                    onChange={(e) => setUpdatedTime(e.target.value)}
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
                    value={userUpdated}
                    onChange={(e) => setUpdatePerformed(e.target.value)}
                    placeholder="Staff Department"
                  />
                </div>
              </div>
              
              
              
              
              
              
              
              
              
              
              <div className="field">
                <div className="control">
                  <button type="submit" className="button is-success">
                    Update
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

export default FormEditUser;
