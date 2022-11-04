import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoginEmailUser, reset } from "../features/authSlice";
import { Link } from "react-router-dom";
import "./Login.css"


const EmailLink = () => {
    const [staffid, setStaffid] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user, isError, isSuccess, isLoading, message } = useSelector(
        (state) => state.auth
    );

    useEffect(() => {
        if (user || isSuccess) {
            navigate("/passwordLink");
        }

        dispatch(reset());
    }, [user, isSuccess, dispatch, navigate]);

    const Auth = (e) => {
        e.preventDefault();
        dispatch(LoginEmailUser({ staffid }));
    };

    return (
        <section className="hero is-fullheight is-fullwidth" class="loginPage">
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-4">
                            <form onSubmit={Auth} className="box" class="formOne">
                                {isError && <p className="has-text-centered">{message}</p>}
                                <h1 className="title is-2">Sign In</h1>
                                <div className="field">
                                    <label className="label">Enter Your Staff ID</label>
                                    <div className="control">
                                        <input

                                            type="text"
                                            className="input"
                                            value={staffid}
                                            onChange={(e) => setStaffid(e.target.value)}
                                            placeholder="Email"
                                            class="inputField"
                                        />
                                    </div>
                                </div>

                                <div className="field mt-5">
                                    <button
                                        type="submit"
                                        className="button  is-fullwidth"
                                        class="btnField"
                                    >
                                        {isLoading ? "Loading..." : "Login"}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EmailLink;
