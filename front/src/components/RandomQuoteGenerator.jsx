import React from "react";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { FaQuoteRight, FaQuoteLeft, FaCopy, FaTwitter } from 'react-icons/fa';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import moment from 'moment'
import Layout from "../pages/Layout";


const RandomQuoteGenerator = () => {
    const { user } = useSelector((state) => state.auth);
    const currentDate = moment().format('DD-MM-YYYY')
    const date = new Date();
    const current_time = date.getHours() + ":" + " " + date.getMinutes();
    const today = current_time + "  " + currentDate;
    // const pending = ("Pending");





    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');

    useEffect(() => {
        getQuote()
    }, []);

    const getQuote = () => {
        let url = `https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                let dataQuotes = data.quotes;
                let randomNum = Math.floor(Math.random() * dataQuotes.length);
                let randomQuote = dataQuotes[randomNum];

                setQuote(randomQuote.quote);
                setAuthor(randomQuote.author);
            })
    }

    const handleClick = () => {
        getQuote();
    }









    const [details, setDetails] = useState(null);

    const getUserGeolocationDetails = () => {
        fetch(
            "https://geolocation-db.com/json/89eb4d70-4cbe-11ed-a0f2-51b843ebe8d7"
        )
            .then(response => response.json())
            .then(data => setDetails(data));
    }; console.log(fetch)




    const [staffid, setStaffid] = useState(`${user && user.staffid}`);
    const [staffName, setStaffName] = useState(`${user && user.name}`);
    const [email, setEmail] = useState(`${user && user.email}`);
    var [ipAddress, setIpAddress] = useState("");
    var [location, setLocation] = useState("");
    const [loginTime, setLoginTime] = useState(`${today}`);
    const [msg, setMsg] = useState("");
    const navigate = useNavigate();

    const createList = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/list", {
                staffid: staffid,
                staffName: staffName,
                email: email,
                ipAddress: ipAddress = details.IPv4,
                location: location = details.country_name + " " + details.country_code,
                loginTime: loginTime,
            });
            navigate("/users");
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    };


    return (
        <Layout>
            <div>
                <div id="quote-box">
                    <div id="text"><p> <FaQuoteLeft /> {quote} <FaQuoteRight /> </p></div>
                    <div id="author"><p>{author}</p></div>


                    <div id="buttons">
                        <div className="social-media">
                            <a href="#" id="twet-quote">
                                <span><FaTwitter /></span>
                            </a>
                            <a href="#" id="tumlr-quote">

                            </a>
                        </div>
                        <button onClick={handleClick} id="new-quote">New Quote</button>
                    </div>
                </div>
                <form onSubmit={createList}>
                    <div className="row">
                        <div className="col text-center">

                            <div className="">
                                <div className="">

                                    {details && (

                                        <ul className="list-group">


                                            <div className="content">
                                                {/* <form onSubmit={createList}> */}
                                                <p className="has-text-centered">{msg}</p>
                                                <div className="field">
                                                    {/* <label className="label">Staff ID</label> */}
                                                    <div className="control">
                                                        <input
                                                            type="text"
                                                            hidden
                                                            className="input"
                                                            value={user && user.staffid}
                                                            onChange={(e) => setStaffid(e.target.value)}
                                                            placeholder="Staff Id"
                                                        />
                                                    </div>
                                                    {/* <label className="label">Name</label> */}
                                                    <div className="control">
                                                        <input
                                                            hidden
                                                            type="text"
                                                            className="input"
                                                            value={user && user.name}
                                                            onChange={(e) => setStaffName(e.target.value)}
                                                            placeholder="Name"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="field">
                                                    {/* <label className="label">Email</label> */}
                                                    <div className="control">
                                                        <input
                                                            hidden
                                                            type="text"
                                                            className="input"
                                                            value={user && user.email}
                                                            onChange={(e) => setEmail(e.target.value)}
                                                            placeholder="Email"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="field">
                                                    {/* <label className="label">Ip Address</label> */}
                                                    <div className="control">
                                                        <input
                                                            hidden
                                                            type=""
                                                            required
                                                            className="input"
                                                            value={`${details.IPv4}`}
                                                            onChange={(e) => setIpAddress(e.target.value)}
                                                            placeholder="Staff Department"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="field">
                                                    {/* <label className="label">Location</label> */}
                                                    <input
                                                        hidden
                                                        type="text"
                                                        className="input"
                                                        value={details.country_name + "/" + details.country_code}
                                                        onChange={(e) => setLocation(e.target.value)}
                                                        placeholder="Staff Department"
                                                    />
                                                </div>

                                                <div className="field">
                                                    {/* <label className="label">Login Time</label> */}
                                                    <div className="control">
                                                        <input
                                                            hidden
                                                            className="input"
                                                            value={today}
                                                            onChange={(e) => setLoginTime(e.target.value)}

                                                        />
                                                    </div>
                                                </div>
                                                <div className="field">
                                                    <div className="control">
                                                    </div>
                                                </div>

                                            </div>

                                        </ul>
                                    )}

                                    <button
                                        className="button is-success"
                                        onClick={getUserGeolocationDetails}
                                    >
                                        <button type="submit" className="button is-success">
                                            Move to Dashboard

                                        </button>
                                    </button>

                                </div>

                            </div>

                        </div>

                    </div>
                </form>
            </div>
            </Layout>
            );
        
};

export default RandomQuoteGenerator;