import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import axios from "axios";
import StockInCreateView from "../../pages/inventory/StockInCreateView";
import { Scrollbars } from 'react-custom-scrollbars';


const StockInList = () => {
    const { user } = useSelector((state) => state.auth);
    const [stock, setStock,] = useState([]);
    useEffect(() => {
        getStock();
    }, []);

    const getStock = async () => {
        const response = await axios.get("http://localhost:5000/stock");
        setStock(response.data);
    };

 
    return (
        <div>

            <div style={{ width: "100%", padding: '25px' }} className="button is-primary mb-2">


                <NavLink to={"/stockIn"} className="button is-primary mb-2" style={{textDecoration: "none"}}>
                    Stock Not In Use
                </NavLink>

                <NavLink to={"/stockInUse"} className="button is-primary mb-2" style={{textDecoration: "none"}}>
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
                                <th >Category</th>
                                <th >Purchase From</th>
                                <th >Cost</th>
                                <th >Status</th>
                                <th>Attached</th>
                            </tr>
                        </thead>
                        <tbody >

                            {stock.map((stock, index) => (
                                <tr key={stock.id} >
                                    <td className="shadow-inner">{index + 1}</td>
                                    <td>{stock.stockCode}</td>
                                    <td>{stock.stockName}</td>
                                    <td>{stock.category}</td>
                                    {/* <td>{stock.purchaseDate}</td> */}
                                    <td>{stock.purchaseFrom}</td>
                                    <td>{stock.cost}</td>
                                    <td>{stock.status}</td>
                             
                                    <td>
                                        <Link
                                            to={`/stock/edit/${stock.id}`}
                                            className="button is-small is-info"
                                            style={{ backgroundColor: 'black', color: 'White', fontWeight: 500, fontSize: '10px', }}
                                        >
                                            Assigned To User
                                        </Link>
                                    </td>
                                  
                                </tr>
                            ))}
                        </tbody>
                    </table>

                </div>


                <Scrollbars
                    style={{ width: 270, height: 500, marginLeft: 40}}
                    autoHide
                    autoHideTimeout={1000}
                    autoHideDuration={200}
                    autoHeight
                    autoHeightMin={0}
                    autoHeightMax={500}
                    thumbMinSize={30}
                    universal={true}
                >
                    <div><StockInCreateView /></div>
                </Scrollbars>

            </div>


        </div>
    );
};

export default StockInList;






































