import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoginUser, reset } from "../features/authSlice";
// import { NavLink, Link } from "react-router-dom";
import "./Login.css"
import { getMe } from "../features/authSlice";


const PasswordLink = () => {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isError, isSuccess, isLoading, message } = useSelector((state) => state.auth);
    const { user } = useSelector((state) => state.auth);
    useEffect(() => {
        if (user || isSuccess) {
            // navigate("/");
        }

        dispatch(reset());
    }, [user, isSuccess, dispatch, navigate]);

    const Auth = (e) => {
        e.preventDefault();
        dispatch(LoginUser({ password, email }));
    };

    useEffect(() => {
        dispatch(getMe());
    }, [dispatch]);

    useEffect(() => {
        if (isError) {
            navigate("/emailLink");
        }
    }, [isError, navigate]);




    return (
        <section className="hero is-fullheight is-fullwidth" class="loginPage">
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-4">
                            <form onSubmit={Auth} className="box" class="formOne">
                                {isError && <p className="has-text-centered">{message}</p>}
                                <h1 className="title is-2">Forgot Password</h1>
                                <div className="field">
                                    <label className="label">Please Enter Your Old Password</label>

                                    <div className="field">
                                        <label className="label">Email{user && user.staffid}</label>
                                        <div className="control">
                                            <input

                                                type="text"
                                                className="input"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                placeholder="Email"
                                                class="inputField"
                                            />
                                        </div>
                                    </div>

                                    <div className="control">
                                        <input
                                            type="password"

                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            placeholder="******"
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

export default PasswordLink;
