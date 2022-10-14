import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { IoPerson, IoPricetag, IoHome, IoLogOut } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { LogOut, reset } from "../features/authSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const logout = () => {
    dispatch(LogOut());
    dispatch(reset());
    navigate("/");
  };

  return (
    <div>
      <aside className="menu pl-2 has-shadow">
        <p className="menu-label">General</p>

        <ul className="menu-list">
          {/* <li>
            <NavLink to={"/dashboard"}>
              <IoHome /> Dashboard
            </NavLink>
          </li> */}
          {/* <li>
            <NavLink to={"/request"}>
              <IoPricetag /> Request
            </NavLink>
          </li> */}
        </ul>


        {/* Admin/Super Admin Role Start here*/}
        {user && user.role === "admin" && (
          <div>
            <p className="menu-label">Users</p>
            <ul className="menu-list">

              <li>
                <NavLink to={"/users"}>
                  <IoPricetag /> View Users
                </NavLink>
              </li>

            </ul>
            <p className="menu-label">Admin</p>
            <ul className="menu-list">

              <li>
                <NavLink to={"/request"}>
                  <IoPricetag /> Request
                </NavLink>
              </li>

            </ul>
          </div>
        )}
        {/* Admin/Super Admin  Role End here*/}


        {/* Director  Role Start here*/}
        {user && user.role === "director" && (
          <div>
            <p className="menu-label">Director</p>
            {/* <ul className="menu-list">
              <li>
                <NavLink to={"/users"}>
                  <IoPerson /> Users
                </NavLink>
              </li>
            </ul> */}


            <li>
              <NavLink to={"/directorRequest"}>
                <IoPerson /> View Request
              </NavLink>
            </li>
          </div>
        )}
        {/* Director Role end here*/}


        {/* Manager Role  Start here*/}
        {user && user.role === "manager" && (
          <div>
            <p className="menu-label">Manager</p>
            <ul className="menu-list">
              <li>
                <NavLink to={"/managerRequest"}>
                  <IoPerson /> View Request
                </NavLink>
              </li>
            </ul>
          </div>
        )}
        {/* Manage Role end Here*/}

        {/* User Role  Start here*/}
        {user && user.role === "user" && (
          <div>
            <p className="menu-label">Users</p>
            <ul className="menu-list">
              <li>
                <NavLink to={"/userRequest"}>
                  <IoPerson /> My Request
                </NavLink>
              </li>
            </ul>
          </div>
        )}
        {/* User Role End here*/}












        <p className="menu-label">Settings</p>
        <ul className="menu-list">
          <li>
            <button onClick={logout} className="button is-white">
              <IoLogOut /> Logout
            </button>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
