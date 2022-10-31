import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import axios from "axios";
const StockApprovedViewList = () => {
    const [stockInUse, setStockInUse,] = useState([]);
    useEffect(() => {
        getStockInUse();
    }, []);

    const getStockInUse = async () => {
        const response = await axios.get("http://localhost:5000/stockInUse");
        setStockInUse(response.data);
    };

    const image = {
        boxShadow: '1px 2px 9px #F4AAB9',
    }

    return (
        <div className="container mt-5">



            <tbody >
                {stockInUse.map((stock) => (
                    <tr key={stock.uid} >

                        <div className="columns is-multiline mt-2">

                            <div className="column is-one-quarter" key={stock.id} style={{ width: "100%", boxShadow: '1px 2px 9px #F4AAB9', backgroundColor: "#FF6D28" }}>
                                <div className="card" style={{ width: "100%" }}>
                                    <p className="title is-5" style={{ marginTop: "18px", backgroundColor: "black", padding: "10px", color: "white" }}>Stock ID:  <span style={{ color: "orange" }}>{"  " + "  " + stock.id}</span> </p>
                                    <div className="card-image" >
                                        <figure className="image is-4by3">
                                            <img require src="http://localhost:5000/images/1a9cfdffff56ab3796f25b7cd4993bf5.jpg" alt="Image" />
                                        </figure>
                                    </div>

                                    <div style={image}>
                                        <div>
                                            <p className="title is-5" style={{ marginLeft: "15px" }}>Attached To:  <span style={{ color: "orange" }}>{" " + " " + stock.assignedTo}</span> </p>
                                        </div>
                                        <div >
                                            <p className="title is-5" style={{ marginLeft: "15px" }}>Staff ID:  <span style={{ color: "blue" }}>{" " + " " + stock.staffId}</span> </p>
                                        </div>


                                        <div >
                                            <p className="title is-5" style={{ marginTop: "18px", marginLeft: "15px" }}>Item Name:  <span style={{ color: "green" }}>{" " + " " + stock.stockName}</span></p>
                                        </div>

                                        <div >
                                            <div className="media">
                                                <div className="media-content">
                                                    <p className="title is-5" style={{ marginTop: "18px", marginLeft: "15px" }}>Assigner:  <span style={{ color: "#00F5FF" }}>{" " + " " + stock.giver}</span></p>
                                                </div>
                                            </div>
                                        </div>

                                        <div >
                                            <div className="media">
                                                <div className="media-content">
                                                    <p className="title is-5" style={{ marginTop: "18px", marginLeft: "15px" }}>Category:  <span style={{ color: "#00F5FF" }}>{" " + " " + stock.category}</span></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </tr>
                ))}
            </tbody>








        </div>
    );
};

export default StockApprovedViewList;






































