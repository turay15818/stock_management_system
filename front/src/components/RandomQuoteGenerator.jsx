import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { FaQuoteRight, FaQuoteLeft, FaCopy, FaTwitter } from 'react-icons/fa';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import moment from 'moment'
import Layout from "../pages/Layout";
import { getMe } from "../features/authSlice";


const RandomQuoteGenerator = () => {
    const { user } = useSelector((state) => state.auth);
    const currentDate = moment().format('DD-MM-YYYY')
    const date = new Date();
    const current_time = date.getHours() + ":" + " " + date.getMinutes();
    const today = current_time + "  " + currentDate;
    // const pending = ("Pending");

    console.log(user && user.username + "Turaymathic")

    const URL = "https://ip.nf./me.json";
    const [ipInfo, setIpInfo] = useState({ ip: "" });
    useEffect(() => {
        fetch(URL, { method: "get" })
            .then((response) => response.json())
            .then((data) => {
                setIpInfo({ ...data });
            })
    }, []);


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
    };


    var [staffid, setStaffid] = useState(`${user && user.staffid}`);
    var [staffName, setStaffName] = useState(`${user && user.name}`);
    var [email, setEmail] = useState(`${user && user.email}`);
    var [ipAddress, setIpAddress] = useState("");
    var [location, setLocation] = useState("");
    const [loginTime, setLoginTime] = useState(`${today}`);
    const [msg, setMsg] = useState("");
    const navigate = useNavigate();

    var createList = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/list", {
                staffid: staffid= (`${user && user.staffid}`),
                staffName: staffName= (`${user && user.name}`),
                email: email=(`${user && user.email}`),
                ipAddress: ipAddress = (`${ipInfo.ip.ip}`),
                location: location = (`${ipInfo.ip.country}`),
                loginTime: loginTime,
            });
            navigate("/dashboard");
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    };

    const dispatch = useDispatch();
    const { isError } = useSelector((state) => state.auth);
  
    useEffect(() => {
      dispatch(getMe());
    }, [dispatch]);
  
    useEffect(() => {
      if (isError) {
        navigate("/");
      }
    }, [isError, navigate]);
    return (
        
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
<form onSubmit={createList} style={{width: "70%"}}>
<div className="row">
<div className="col text-center">

<div className="">
<div className="">



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
type="email"
className="input"
value={`${user && user.email}`}
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
value={ipInfo.ip.ip}
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
value={ipInfo.ip.country}
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



<button type="submit" className="button is-success">
Move to Dashboard
</button>


</div>

</div>

</div>

</div>
</form>
</div>
  
    );

};

export default RandomQuoteGenerator;