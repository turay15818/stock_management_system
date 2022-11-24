import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
const EmailLink = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [msg, setMsg] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          await axios.post("http://localhost:5000/resetPasswordEmail", {
           
            email: email,
           
          });
          navigate("/");
        } catch (error) {
          if (error.response) {
            setMsg(error.response.data.msg);
          }
        }
      };








    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     console.log('forgot password form submitted')
    //     if (email === '') {
    //         alert('email is required')
    //     } else {
    //         const res = await fetch("http://localhost:5000/resetPasswordEmail", {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json"
    //             },
    //             body: JSON.stringify({ email })
    //         })

    //         const data = await res.json();

    //         console.log('data', data);

    //         if (data.status === 201) {
    //             setEmail('');
    //             navigate("/");
    //             setMsg(true);
    //         } else {
    //             alert('Invalid User')
    //         }
    //     }

    //     // call our forget password api 

    // }

    return (
        <section className="hero is-fullheight is-fullwidth" class="loginPage">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-centered">
              <div className="column is-4">
                <form onSubmit={handleSubmit} className="box" class="formOne">
                  {/* {isError && <p className="has-text-centered">{message}</p>} */}
                  <h1 className="title is-2">Forgot Password</h1>
                  <div className="field">
                    <label className="label">Email</label>
                    <div className="control">
                      <input
  
                        type="email"
                        required
                        className="input"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="example@example.com"
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
                      Send Reset Link 
                    </button>
  
                    {/* <Link to="/emailLink" className="button is-primary mb-2">
                      Forgot Password
                    </Link> */}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default EmailLink

