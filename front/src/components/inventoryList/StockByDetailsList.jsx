import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const StockByDetailsList = () => {
    const [stockCode, setStockCode] = useState([]);
    const [stockName, setStockName] = useState([]);
    const [description, setDescription] = useState([]);
    const [category, setCategory] = useState([]);
    const [stockColor, setStockColor] = useState([]);
    const [stockBrand, setStockBrand] = useState([]);
    const [purchaseDate, setPurchaseDate] = useState([]);
    const [purchaseFrom, setPurchaseFrom] = useState([]);
    const [cost, setCost] = useState([]);
    const [assignedTo, setAssignedTo] = useState([]);
    const [staffId, setStaffId] = useState([]);
    const [department, setDepartment] = useState([]);
    const [giver, setGiver] = useState([]);
    const [url, setUrl] = useState([]);
    const [dateGiven, setDateGiven] = useState([]);

    const [msg, setMsg] = useState("");
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        const getStockById = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/stock/${id}`);
                setStockCode(response.data.stockCode);
                setStockName(response.data.stockName);
                setDescription(response.data.description);
                setCategory(response.data.category);
                setStockColor(response.data.stockColor);
                setStockBrand(response.data.stockBrand);
                setPurchaseDate(response.data.purchaseDate);
                setPurchaseFrom(response.data.purchaseFrom);
                setCost(response.data.cost);
                setAssignedTo(response.data.assignedTo);
                setStaffId(response.data.staffId);
                setDepartment(response.data.department);
                setGiver(response.data.giver);
                setUrl(response.data.url);
                setDateGiven(response.data.dateGiven);


            } catch (error) {
                if (error.response) {
                    setMsg(error.response.data.msg);
                }
            }
        };
        getStockById();
    }, [id]);


    const itemStyle = {
        backgroundColor: "#FAF7F0",
        boxShadow: '1px 2px 9px #F4AAB9',
        padding: 10,
    }

    const headingFour = {
        fontSize: 12,
        paddingRight: 12,
        fontWeight: 540,

    }

    const div = {
        boxShadow: '1px 2px 9px #F4AAB9',
        padding: 5,
        margin: 5,
        borderRadius: 18
    }
    const flex = {
        display: "flex",
        alignItems: "center",
    }

    return (
        <div>
            <div className=" card is-shadowless" style={{ alignItems: "center", borderRadius: "20px",  }}>
                <div className="card-content">

                    <div className="card-content">
                        <h3 style={{ textAlign: "center", fontSize: "15px" }}>Orange Sierra Leone</h3>
                        <h4 style={{ textAlign: "center", fontSize: "13px" }}>Stock Management System</h4>

                        <h2 style={{ textAlign: "center", fontSize: "12px" }}>Stock Details</h2>




                        <div style={itemStyle}>

                            <div className="card-image" >
                                <figure className="image is-4by3">

                                    <img src={url} alt="Image" style={{ size: "100px" }}/>

                                </figure>
                            </div>


                            <div style={flex}>
                                <div style={div}>
                                    <h4 style={headingFour}><span>Stock Code:</span> {" " + " " + stockCode}</h4>
                                </div>
                                <hr />
                                <div style={div}>
                                    <h4 style={headingFour}><span>Stock Name:</span> {" " + " " + stockName}</h4>
                                </div>
                            </div>



                            <div style={flex}>

                                <div style={div}>
                                    <h4 style={headingFour}><span>Stock Name:</span> {" " + " " + stockName}</h4>
                                </div>


                                <div style={div}>
                                    <h4 style={headingFour}><span>Stock Description:</span> {" " + " " + description}</h4>
                                </div>

                            </div>
                            <div style={flex}>

                                <div style={div}>
                                    <h4 style={headingFour}><span>Stock Stock Brand:</span> {" " + " " + stockBrand}</h4>
                                </div>

                                <div style={div}>
                                    <h4 style={headingFour}><span>Stock Color:</span> {" " + " " + stockColor}</h4>
                                </div>
                            </div>


                            <div style={flex}>
                                <div style={div}>
                                    <h4 style={headingFour}><span>Purchase Date:</span> {" " + " " + purchaseDate}</h4>
                                </div>

                                <div style={div}>
                                    <h4 style={headingFour}><span>Purchase From:</span> {" " + " " + purchaseFrom}</h4>
                                </div>

                               
                            </div>


                            <div style={flex}>
                                <div style={div}>
                                    <h4 style={headingFour}><span>Assigner:</span> {" " + " " + giver}</h4>
                                </div>
                                <div style={div}>
                                    <h4 style={headingFour}><span>Assign Date:</span> {" " + " " + dateGiven}</h4>
                                </div>
                            </div>
                            <div style={flex}>
                            <div style={div}>
                                    <h4 style={headingFour}><span>Purchase Date:</span> {" " + " " + purchaseDate}</h4>
                                </div>
                            </div>




                        </div>






                    </div>




                </div>
            </div >
        </div >
    );
};

export default StockByDetailsList;
