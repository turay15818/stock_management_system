import React from "react";
import { useSelector } from "react-redux";
import Request from "../pages/Request"
const Welcome = () => {
  const { user } = useSelector((state) => state.auth);
  const welcome = {
    height: "90vh",
    width: 'auto',
    // marginTop: "30px"
  }
  return (
    <div style={welcome}>
      {user && user.role === "admin" && (
        <div>
          <h1 className="title">Dashboard</h1>
          <h2 className="subtitle">
            Welcome Back <strong>{user && user.name}</strong>
          </h2>
        </div>
      )}


      {user && user.role === "user" && (
        <div>
          <h1 className="title">Dashboard</h1>
          <h2 className="subtitle">
            Welcome Back <strong>{user && user.name}</strong>
          </h2>
        </div>
      )}


      {user && user.role === "manager" && (
        <div>
          <h1 className="title">Dashboard</h1>
          <h2 className="subtitle">
            Welcome Back <strong>{user && user.name}</strong>
          </h2>
        </div>
      )}


      {user && user.role === "director" && (
        <div>
          <h1 className="title">Dashboard</h1>
          <h2 className="subtitle">
            Welcome Back <strong>{user && user.name}</strong>
          </h2>
        </div>
      )}
    </div>
  );
};

export default Welcome;
