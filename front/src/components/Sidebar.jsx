import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { IoPerson, IoPricetag, IoHome, IoLogOut, IoMan, IoPeopleCircle, IoGitBranchSharp, IoAddCircleOutline, IoAccessibilityOutline } from "react-icons/io5";
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

  const sidebarr = {
    marginLeft: 12,
    fontSize: 18,

  }
  const sidebaar = {
    marginLeft: 12,
    marginTop: 18,
    fontSize: 18,
    color: "white",
  }


  const list = {
    listStyle: "none",
    fontSize: 16,
    fontWeight: 600,
    textDecoration: "none"
  }
  const stylee = {
    listStyle: "none",
    fontSize: 16,
    fontWeight: 600,
    color: "orange",
    textDecoration: "none"
  }

  const sidebad = {
    position: 'fixed',
    backgroundColor: "#001253",
    height: "100vh",
    boxShadow: "0px 0px 15px 0px #000000",
    borderRadius: "0px 80px 0px 0px"
  }

  return (
    <div>
      <aside className="menu pl-2 has-shadow" style={sidebad}>
        <p className="menu-label" style={sidebaar}>General</p>

        <div>
          {/* Admin/Super Admin Role Start here*/}
          {user && user.role === "admin" && (
            <div>
              <p className="menu-label" style={sidebaar}>Users</p>
              <ul className="menu-list">

                <li style={list}>
                  <NavLink to={"/users"} style={stylee}>
                    <IoPeopleCircle style={{ fontSize: "30px" }} /> View Users
                  </NavLink>
                </li>

              </ul>
              <p className="menu-label" style={sidebaar}>Admin</p>
              <ul className="menu-list">

                <li>
                  <NavLink to={"/adminRequest"} style={stylee}>
                    <IoPricetag style={{ fontSize: "30px" }} /> Request
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/adminChart"} style={stylee}>
                    <IoPricetag style={{ fontSize: "30px" }} /> Chart
                  </NavLink>
                </li>

                <li>
                  <NavLink to={"/allStock"} style={stylee}>
                    <IoGitBranchSharp style={{ fontSize: "30px" }} /> Stock
                  </NavLink>
                </li>

                <li>
                  <NavLink to={"/stockInCreate"} style={stylee}>
                    <IoAddCircleOutline style={{ fontSize: "30px" }} /> Add Stock
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



              <li>
                <NavLink to={"/directorRequest"} style={stylee}>
                  <IoAccessibilityOutline style={{ fontSize: "30px" }} /> View Request
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
                  <NavLink to={"/managerRequest"} style={stylee}>
                    <IoPerson style={{ fontSize: "30px" }} /> View Request
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
                  <NavLink to={"/userRequest"} style={stylee}>
                    <IoPerson style={{ fontSize: "30px" }} /> My Request
                  </NavLink>
                </li>
              </ul>
            </div>
          )}
          {/* User Role End here*/}
          <p className="menu-label" style={sidebaar}>Settings</p>
          <ul className="menu-list">
            <li>
              <button onClick={logout} className="button is-white">
                <IoLogOut style={{ fontSize: "30px" }} /> Logout
              </button>
            </li>
          </ul>
        </div>


      </aside>
    </div>
  );
};

export default Sidebar;
