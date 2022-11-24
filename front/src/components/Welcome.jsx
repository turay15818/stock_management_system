import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import { useSelector } from "react-redux";
import axios from "axios";
import { FaQuoteRight, FaQuoteLeft, FaCopy, FaTwitter } from 'react-icons/fa';
import { BsFillVolumeUpFill } from 'react-icons/bs';
// import ListGroup from 'react-bootstrap/ListGroup';
import { Bar } from 'react-chartjs-2';
import Chart from "react-apexcharts";
import Badge from 'react-bootstrap/Badge';
import AdminChart from "../pages/inventory/AdminChart";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardHeader,
  MDBCardFooter,
  MDBBtn
} from 'mdb-react-ui-kit';
import "./Welcome.css"



const Welcome = () => {
  const { user } = useSelector((state) => state.auth);


  const [allStock, setAllStock] = useState([]);
  useEffect(() => {
    getAllStock();
  }, []);

  const getAllStock = async () => {
    const response = await axios.get("http://localhost:5000/allStock");
    setAllStock(response.data);
  };

  const [stock, setStock,] = useState([]);
  useEffect(() => {
    getStock();
  }, []);

  const getStock = async () => {
    const response = await axios.get("http://localhost:5000/stock");
    setStock(response.data);
  };



  const [stockInUse, setStockInUse,] = useState([]);
  useEffect(() => {
    getStockInUse();
  }, []);

  const getStockInUse = async () => {
    const response = await axios.get("http://localhost:5000/stockInUse");
    setStockInUse(response.data);
  };


  const [request, setAdminRequest] = useState([]);
  useEffect(() => {
    getAdminRequest();
  }, []);


  const getAdminRequest = async () => {
    const response = await axios.get("http://localhost:5000/adminRequest");
    setAdminRequest(response.data);
  };

  // Admin Dashboard End here
  const [requests, setRequest] = useState([]);
  useEffect(() => {
    getRequest();
  }, []);

  const getRequest = async () => {
    const response = await axios.get("http://localhost:5000/request");
    setRequest(response.data);
  };


  const [requestM, setManagerRequestRejected] = useState([]);

  useEffect(() => {
    getManagerRequestRejected();
  }, []);

  const getManagerRequestRejected = async () => {
    const response = await axios.get("http://localhost:5000/managerRequestRejected");
    setManagerRequestRejected(response.data);
  };



  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/users");
    setUsers(response.data);
  };



  const [requestA, setRequestByBothApproved] = useState([]);

  useEffect(() => {
    getRequestByBothApproved();
  }, []);

  const getRequestByBothApproved = async () => {
    const response = await axios.get("http://localhost:5000/requestByBothApproved");
    setRequestByBothApproved(response.data);
  };


  // Manager Dashboard Design Start here

  const [requestManager, setManagerRequestAll] = useState([]);

  useEffect(() => {
    getManagerRequestAll();
  }, []);

  const getManagerRequestAll = async () => {
    const response = await axios.get("http://localhost:5000/managerRequestAll");
    setManagerRequestAll(response.data);
  };



  const [requestApproved, setRequestByManagerReqApproved] = useState([]);

  useEffect(() => {
    getRequestByManagerReqApproved();
  }, []);

  const getRequestByManagerReqApproved = async () => {
    const response = await axios.get("http://localhost:5000/requestByManagerReqApproved");
    setRequestByManagerReqApproved(response.data);
  };


  const [requestPending, setRequestByManagerReqPending] = useState([]);
  useEffect(() => {
    getRequestByManagerReqPending();
  }, []);

  const getRequestByManagerReqPending = async () => {
    const response = await axios.get("http://localhost:5000/requestByManagerReqPending");
    setRequestByManagerReqPending(response.data);
  };

  const [requestDirectorPending, setRequestDirectorReqPending] = useState([]);

  useEffect(() => {
    getRequestDirectorReqPending();
  }, []);

  const getRequestDirectorReqPending = async () => {
    const response = await axios.get("http://localhost:5000/requestDirectorReqPending");
    setRequestDirectorReqPending(response.data);
  };


  const [requestManagerRejected, setRejectedRequest] = useState([]);

  useEffect(() => {
    getRejectedRequest();
  }, []);

  const getRejectedRequest = async () => {
    const response = await axios.get("http://localhost:5000/rejectedRequest");
    setRejectedRequest(response.data);
  };

  const [requestDirectorRejected, setRequestDirectorReqRejected] = useState([]);
  useEffect(() => {
    getRequestDirectorReqRejected();
  }, []);

  const getRequestDirectorReqRejected = async () => {
    const response = await axios.get("http://localhost:5000/requestDirectorReqRejected");
    setRequestDirectorReqRejected(response.data);
  };

  // Director Dashboard Design Start here
  const [requestDirectorAll, setDirectorRequestAll] = useState([]);

  useEffect(() => {
    getDirectorRequestAll();
  }, []);

  const getDirectorRequestAll = async () => {
    const response = await axios.get("http://localhost:5000/directorRequestAll");
    setDirectorRequestAll(response.data);
  };


  // User
  const [requesting, setRequestDirectorPending] = useState([]);

  useEffect(() => {
    getRequestDirectorPending();
  }, []);

  const getRequestDirectorPending = async () => {
    const response = await axios.get("http://localhost:5000/requestDirectorPending");
    setRequestDirectorPending(response.data);
  };

  const [requestDirectorRejectedForUser, setRequestByDirectorApproved] = useState([]);

  useEffect(() => {
    getRequestByDirectorApproved();
  }, []);

  const getRequestByDirectorApproved = async () => {
    const response = await axios.get("http://localhost:5000/directorRequestRej");
    setRequestByDirectorApproved(response.data);
  };



  const welcome = {
    height: "90vh",
    width: 'auto',
    // marginTop: "30px"
  }


  const [ip, setIP] = useState('');

  //creating function to load ip address from the API
  const getData = async () => {
    const res = await axios.get('https://geolocation-db.com/json/')
    console.log(res.data);
    setIP(res.data.IPv4)
  }
  useEffect(() => {
    //passing getData method to the lifecycle method
    getData()

  }, [])



  const [state] = useState({
    options: { chart: { id: "basic-bar" }, xaxis: { categories: ["All Stock", "Stock Not in Use", "Stock In Use", "Approved Stock"] } },
    series: [
      {
        // {allStock.length}
        // {stock.length}
        // {stockInUse.length}
        // {request.length}
        name: "series-1",
        data: [`${allStock.length}`, 2, 2, 1]
        // data: [`${allStock.length}`, `${allStock.length}`, `${allStock.length}`, `${allStock.length}`]
      }
    ]
  })


  console.log(create_random_string(8))

  function create_random_string(string_length) {
    var random_string = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz'
    for (var i, i = 0; i < string_length; i++) {
      random_string += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    return random_string
  };





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


  return (
    <div style={welcome}>
      <h1>{user && user.email}</h1>
      {user && user.role === "admin" && (
        <div>



          <h1>{allStock.length - stockInUse.length} Musa</h1>

























          <div id="quote-box">
            <div id="text"><p>{quote}</p></div>
            <div id="author"><p>{author}</p></div>

            <div id="buttons">
              <div className="social-media">
                <a href="#" id="twet-quote">
                  <span><FaTwitter /> </span>
                </a>
                <a href="#" id="tumlr-quote">
                  {/* <span><img src={tumblrIcon} alt="" /></span> */}
                </a>
              </div>
              <button onClick={handleClick} id="new-quote">New Quote</button>
            </div>
          </div>

          <div style={{ display: "flex" }}>

            <div class="adminStockDetails">


              <MDBCard alignment='center'>
                <MDBCardHeader alignment='center'>Stock Details</MDBCardHeader>
                <MDBCardBody>
                  <MDBCardTitle>Total Number of All Stock</MDBCardTitle>
                  <h3>
                    <Badge bg="secondary">{" " + " " + allStock.length}</Badge>
                  </h3>
                  {/* <MDBCardText class="length">{" " + " " + allStock.length}</MDBCardText> */}
                  <MDBBtn href={"/allStock"}>View Stock</MDBBtn>
                </MDBCardBody>
                <MDBCardFooter className='text-muted'>2 days ago</MDBCardFooter>
              </MDBCard>
            </div>


            <div class="adminStockDetails">
              <MDBCard alignment='center'>
                <MDBCardHeader>Stock Details</MDBCardHeader>
                <MDBCardBody>
                  <MDBCardTitle>Total Number of All Stock Not In Use</MDBCardTitle>
                  <h3>
                    <Badge bg="secondary">{" " + " " + stock.length}</Badge>
                  </h3>
                  <MDBBtn href={"/stockIn"}>View</MDBBtn>
                </MDBCardBody>
                <MDBCardFooter className='text-muted'>2 days ago</MDBCardFooter>
              </MDBCard>
            </div>

            <div class="adminStockDetails">
              <MDBCard alignment='center'>
                <MDBCardHeader>Stock Details</MDBCardHeader>
                <MDBCardBody>
                  <MDBCardTitle>Total Number of All Stock In Use</MDBCardTitle>
                  <h3>
                    <Badge bg="secondary">{" " + " " + stockInUse.length}</Badge>
                  </h3>
                  <MDBBtn href={"/stockInUse"}> View</MDBBtn>
                </MDBCardBody>
                <MDBCardFooter className='text-muted'>2 days ago</MDBCardFooter>
              </MDBCard>
            </div>


            <div class="adminStockDetails">
              <MDBCard alignment='center'>
                <MDBCardHeader>Stock Details</MDBCardHeader>
                <MDBCardBody>
                  <MDBCardTitle>Total Number of All of Approved Request</MDBCardTitle>
                  <h3>
                    <Badge bg="secondary">{" " + " " + request.length}</Badge>
                  </h3>
                  <MDBBtn href={"/adminRequest"}> View</MDBBtn>
                </MDBCardBody>
                <MDBCardFooter className='text-muted'>2 days ago</MDBCardFooter>
              </MDBCard>
            </div>


            <div class="adminStockDetails">
              <MDBCard class="bg1">
                <MDBCard alignment='center'>
                  <MDBCardHeader>Users Details</MDBCardHeader>
                  <MDBCardBody>
                    <MDBCardTitle>Total Number of All of Users</MDBCardTitle>
                    <h3>
                      <Badge bg="secondary">{" " + " " + users.length}</Badge>
                    </h3>
                    <MDBBtn href={"/users"}> View Users</MDBBtn>
                  </MDBCardBody>
                  <MDBCardFooter className='text-muted'>2 days ago</MDBCardFooter>
                </MDBCard>
              </MDBCard>
            </div>
          </div>

          <Chart
            options={state.options}
            series={state.series}
            type="bar"
            width="500"
          />

          <div className="App">
            <h2>Your IP Address is</h2>
            <h4>{ip}</h4>
          </div>

          {create_random_string(8)}
        </div>
      )}


      {user && user.role === "user" && (
        <div style={{ display: "flex" }}>


          <div class="adminStockDetails">
            <MDBCard alignment='center'>
              <MDBCardHeader>Users Request Details</MDBCardHeader>
              <MDBCardBody>
                <MDBCardTitle class="">Total Number of All Request Sent</MDBCardTitle>

                <MDBCardText class="length">{" " + " " + requests.length}</MDBCardText>
                <MDBBtn class="mdbtn" href={"/userRequest"}> View All Request</MDBBtn>
              </MDBCardBody>
              <MDBCardFooter className='text-muted'>2 days ago</MDBCardFooter>
            </MDBCard>
          </div>


          <div class="adminStockDetails">
            <MDBCard alignment='center'>
              <MDBCardHeader>Users Request Details</MDBCardHeader>
              <MDBCardBody>
                <MDBCardTitle>View All Request Rejected By Manager</MDBCardTitle>
                <MDBCardText class="length">{" " + " " + requestM.length}</MDBCardText>
                <MDBBtn class="mdbtn" href={"/managerRequestRejected"}>View All</MDBBtn>
              </MDBCardBody>
              <MDBCardFooter className='text-muted'>2 days ago</MDBCardFooter>
            </MDBCard>
          </div>

          <div class="adminStockDetails">
            <MDBCard alignment='center'>
              <MDBCardHeader>Approved Request</MDBCardHeader>
              <MDBCardBody>
                <MDBCardTitle>Total Number of All Approved Request</MDBCardTitle>
                <MDBCardText class="length">{" " + " " + requestA.length}</MDBCardText>
                <MDBBtn class="mdbtn" href={"/request"}> View Approved Request</MDBBtn>
              </MDBCardBody>
              <MDBCardFooter className='text-muted'>2 days ago</MDBCardFooter>
            </MDBCard>
          </div>

          <div class="adminStockDetails">
            <MDBCard alignment='center'>
              <MDBCardHeader >Pending Request By Director</MDBCardHeader>
              <MDBCardBody>
                <MDBCardTitle>View All Request Pending By Director</MDBCardTitle>
                <MDBCardText class="length">{" " + " " + requesting.length}</MDBCardText>
                <MDBBtn class="mdbtn" href={"/directorRequestPending"}>View Details</MDBBtn>
              </MDBCardBody>
              <MDBCardFooter className='text-muted'>2 days ago</MDBCardFooter>
            </MDBCard>
          </div>

          <div class="adminStockDetails">
            <MDBCard alignment='center'>
              <MDBCardHeader >Director Request Rejected</MDBCardHeader>
              <MDBCardBody>
                <MDBCardTitle>View All Rejected Request By Director</MDBCardTitle>
                <MDBCardText class="length">{" " + " " + requestDirectorRejectedForUser.length}</MDBCardText>
                <MDBBtn class="mdbtn" href={"/directorRequestRejectedForUser"}>View Details</MDBBtn>
              </MDBCardBody>
              <MDBCardFooter className='text-muted'>2 days ago</MDBCardFooter>
            </MDBCard>
          </div>

        </div>
      )}


      {user && user.role === "manager" && (
        <div style={{ display: "flex" }}>

          <div class="adminStockDetails">
            <MDBCard alignment='center'>
              <MDBCardHeader class="header">Request Rejected By Director</MDBCardHeader>
              <MDBCardBody>
                <MDBCardTitle>View All Request Rejected By Director</MDBCardTitle>
                <MDBCardText>{" " + " " + requestManager.length}</MDBCardText>
                <MDBBtn href={"/managerRequest"}>View Details</MDBBtn>
              </MDBCardBody>
              <MDBCardFooter className='text-muted'>2 days ago</MDBCardFooter>
            </MDBCard>
          </div>

          <div class="adminStockDetails">
            <MDBCard alignment='center'>
              <MDBCardHeader class="header">Request Rejected By Director</MDBCardHeader>
              <MDBCardBody>
                <MDBCardTitle>View All Request Rejected By Director</MDBCardTitle>
                <MDBCardText>{" " + " " + requestApproved.length}</MDBCardText>
                <MDBBtn href={"/managerApprovedRequest"}>View Details</MDBBtn>
              </MDBCardBody>
              <MDBCardFooter className='text-muted'>2 days ago</MDBCardFooter>
            </MDBCard>
          </div>

          <div class="adminStockDetails">
            <MDBCard alignment='center'>
              <MDBCardHeader class="header">Pending Request</MDBCardHeader>
              <MDBCardBody>
                <MDBCardTitle>View All Pending Request</MDBCardTitle>
                <MDBCardText>{" " + " " + requestPending.length}</MDBCardText>
                <MDBBtn href={"/managerReqPending"}>View Details</MDBBtn>
              </MDBCardBody>
              <MDBCardFooter className='text-muted'>2 days ago</MDBCardFooter>
            </MDBCard>
          </div>


          <div class="adminStockDetails">
            <MDBCard alignment='center'>
              <MDBCardHeader class="header">Pending Request By Director</MDBCardHeader>
              <MDBCardBody>
                <MDBCardTitle>View All Request Pending By Director</MDBCardTitle>
                <MDBCardText>{" " + " " + requestDirectorPending.length}</MDBCardText>
                <MDBBtn href={"/dirRequestPending"}>View Details</MDBBtn>
              </MDBCardBody>
              <MDBCardFooter className='text-muted'>2 days ago</MDBCardFooter>
            </MDBCard>
          </div>


          <div class="adminStockDetails">
            <MDBCard alignment='center'>
              <MDBCardHeader class="header">Rejected Request</MDBCardHeader>
              <MDBCardBody>
                <MDBCardTitle>View All Request Rejected</MDBCardTitle>
                <MDBCardText>{" " + " " + requestManagerRejected.length}</MDBCardText>
                <MDBBtn href={"/managerReqRejected"}>View Details</MDBBtn>
              </MDBCardBody>
              <MDBCardFooter className='text-muted'>2 days ago</MDBCardFooter>
            </MDBCard>
          </div>


          <div class="adminStockDetails">
            <MDBCard alignment='center'>
              <MDBCardHeader class="header">Request Rejected By Director</MDBCardHeader>
              <MDBCardBody>
                <MDBCardTitle>View All Request Rejected By Director</MDBCardTitle>
                <MDBCardText>{" " + " " + requestDirectorRejected.length}</MDBCardText>
                <MDBBtn href={"/dirRequestRejected"}>View Details</MDBBtn>
              </MDBCardBody>
              <MDBCardFooter className='text-muted'>2 days ago</MDBCardFooter>
            </MDBCard>
          </div>


        </div>
      )}


      {user && user.role === "director" && (
        <div style={{ display: "flex" }}>

          <div class="adminStockDetails">
            <MDBCard alignment='center'>
              <MDBCardHeader>All Request</MDBCardHeader>
              <MDBCardBody>
                <MDBCardTitle>View All Request</MDBCardTitle>
                <MDBCardText>{" " + " " + requestDirectorAll.length}</MDBCardText>
                <MDBBtn href={"/directorRequest"}>View Details</MDBBtn>
              </MDBCardBody>
              <MDBCardFooter className='text-muted'>2 days ago</MDBCardFooter>
            </MDBCard>
          </div>


          <div class="adminStockDetails">
            <MDBCard alignment='center'>
              <MDBCardHeader>All Approved Request</MDBCardHeader>
              <MDBCardBody>
                <MDBCardTitle>View All Request</MDBCardTitle>
                <MDBCardText>{" " + " " + requestApproved.length}</MDBCardText>
                <MDBBtn href={"/directorAppRequest"}>View Details</MDBBtn>
              </MDBCardBody>
              <MDBCardFooter className='text-muted'>2 days ago</MDBCardFooter>
            </MDBCard>
          </div>

          <div class="adminStockDetails">
            <MDBCard alignment='center'>
              <MDBCardHeader>Pending Request</MDBCardHeader>
              <MDBCardBody>
                <MDBCardTitle>View All Pending Request</MDBCardTitle>
                <MDBCardText>{" " + " " + requestDirectorPending.length}</MDBCardText>
                <MDBBtn href={"/directorPendingRequest"}>View Details</MDBBtn>
              </MDBCardBody>
              <MDBCardFooter className='text-muted'>2 days ago</MDBCardFooter>
            </MDBCard>
          </div>

          <div class="adminStockDetails">
            <MDBCard alignment='center'>
              <MDBCardHeader>All Rejected</MDBCardHeader>
              <MDBCardBody>
                <MDBCardTitle>View All Rejected Request</MDBCardTitle>
                <MDBCardText>{" " + " " + requestDirectorRejected.length}</MDBCardText>
                <MDBBtn href={"/directorRequestRejectAll"}>View Details</MDBBtn>
              </MDBCardBody>
              <MDBCardFooter className='text-muted'>2 days ago</MDBCardFooter>
            </MDBCard>
          </div>
        </div>
      )}







      <div className="content">
        <header>Quote of the Day</header>
        <div className="quote-area">
          <i className="fas fa-quote-left" ></i>
          <p className="quote">Never give up because you never know if the next day is going to be the one that works</p>
          <i class="fa fa-quote-right" aria-hidden="true"></i>
        </div>
      </div>










    </div>
  );
};

export default Welcome;
