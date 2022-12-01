import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMe } from "../features/authSlice";


const ResetPassword = () => {
    const dispatch = useDispatch();
    const { isError } = useSelector((state) => state.auth);


    const { user } = useSelector((state) => state.auth);
    const [tokenUser, setTokenUser] = useState("");
    const [password, setPassword] = useState("");
    const [confPassword, setConfPassword] = useState("");
    // const { id } = useParams();
    // const [confPassword, setConfPassword] = useState("");
    // const [msg, setMsg] = useState("");
    const { token } = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        var getTokenUser = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/reset-password/${token}`);
                setTokenUser(response.data.tokenUser);

            } catch (error) {
                if (error.response) {
                    //   setMsg(error.response.data.msg);
                }
            }
        };
        getTokenUser();
    },);


    useEffect(() => {
        dispatch(getMe());
    }, [dispatch]);


    var updateTokenUser = async (e) => {
        e.preventDefault();
        try {
            await axios.patch(`http://localhost:5000/usersUpdate/${token}`, {
                password: password,
                confPassword: confPassword,
                // confPassword: confPassword

            });
            navigate("/");
        } catch (error) {
            if (error.response) {
                //   setMsg(error.response.data.msg);
            }
        }
    };








    return (
        <>
             <section section className = "hero is-fullheight is-fullwidth" class="loginPage" >
        <div className="hero-body">
            <div className="container">
                <div className="columns is-centered">
                    <div className="column is-4">
                        <form onSubmit={updateTokenUser} className="box" class="formOne">
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                                Change Password Page
                            </h2>
                            <h2 className="mt-6 text-center text-2xl font-bold text-light-blue-90">
                               Welcome Back  {user && user.name} 
                            </h2>
                            <div className="field">
                                <label className="label">New Password</label>
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
                                <label className="label">Confirm New Password</label>
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
                            <div className="field mt-5">
                                <button
                                    type="submit"
                                    className="button  is-fullwidth"
                                    class="btnField"
                                >
                                    Save
                                </button>


                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
</section>

        </>
    )
}

export default ResetPassword






   