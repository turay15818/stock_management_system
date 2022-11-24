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
            <div className="grid place-items-center h-screen bg-[#F9FAFB">
                <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-md w-full space-y-8">
                        <div>

                            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                                Change Password Page
                            </h2>
                            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                                {user && user.name} This is the User Name
                            </h2>
                        </div>

                        <form onSubmit={updateTokenUser} className="mt-8 space-y-6">

                            <div className="rounded-md shadow-sm -space-y-px">


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
















                                <div>
                                    <button type="submit" className="button is-success">
                                        Update
                                    </button>
                                </div>

                            </div>

                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ResetPassword