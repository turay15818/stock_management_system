import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import axios from "axios";


const AllStockList = () => {
    // const { user } = useSelector((state) => state.auth);
    const [allStock, setAllStock,] = useState([]);
    useEffect(() => {
        getAllStock();
    }, []);


    const getAllStock = async () => {
        const response = await axios.get("http://localhost:5000/allStock");
        setAllStock(response.data);
    };

    return (
        <div>

            <div style={{ width: "100%", padding: '25px' }} className="button is-primary mb-2">


                <NavLink to={"/stockIn"} className="button is-primary mb-2" style={{ textDecoration: "none" }}>
                    Stock Not In Use
                </NavLink>

                <NavLink to={"/stockInUse"} className="button is-primary mb-2" style={{ textDecoration: "none" }}>
                    Stock In Use
                </NavLink>

            </div>





            <div style={{ display: "flex" }}>
                <div>
                    <table className="table is-striped is-fullwidth">
                        <thead>
                            <tr style={{ boxShadow: "0px 0px 10px #000000", }}>
                                <th >No</th>
                                <th >Stock Code</th>
                                <th >Stock Name</th>
                                <th >Description</th>
                                <th >Category</th>
                                <th >Color</th>
                                <th >Brand</th>
                                <th >Purchase Date</th>
                                <th >Purchase From</th>
                                <th >Cost</th>
                                <th >Status</th>
                                <th>Attached To</th>
                                <th>Staff ID</th>
                                <th>Department</th>
                                <th>Assigner</th>
                            </tr>
                        </thead>
                        <tbody>

                            {allStock.map((stock, index) => (
                                <tr key={stock.id} >
                                    <td className="shadow-inner">OSL_{index + 1}</td>
                                    <td>{stock.stockCode}</td>
                                    <td>{stock.stockName}</td>
                                    <td>{stock.description}</td>
                                    <td>{stock.category}</td>
                                    <td>{stock.stockColor}</td>
                                    <td>{stock.stockBrand}</td>
                                    <td>{stock.purchaseDate}</td>
                                    <td>{stock.purchaseFrom}</td>
                                    <td>{stock.cost}</td>
                                    <td>{stock.status}</td>
                                    <td>{stock.assignedTo}</td>
                                    <td>{stock.staffId}</td>
                                    <td>{stock.department}</td>
                                    <td>{stock.giver}</td>





                                </tr>

                            ))}
                        </tbody>

                    </table>

                </div>

            </div>
        </div>
    );
};

export default AllStockList;






































