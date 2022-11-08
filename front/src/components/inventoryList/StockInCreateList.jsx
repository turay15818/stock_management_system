import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import moment from 'moment'
// "react-redux": "^8.0.2",
const StockInCreateList = () => {

    console.log(create_random_string(8))

    function create_random_string(string_length) {
        var random_string = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
        for (var  i = 0; i < string_length; i++) {
            random_string += characters.charAt(Math.floor(Math.random() * characters.length))
        }
        return random_string
    }



    const { user } = useSelector((state) => state.auth);
    const currentDate = moment().format('DD-MM-YYYY')
    const date = new Date();
    const current_time = date.getHours() + ":" + " " + date.getMinutes();
    const today = current_time + "  " + currentDate;
    const stockAdded = "Stock Added"
  
    const URL = "https://ip.nf./me.json";
    const [ipInfo, setIpInfo] = useState({ ip: "" });
    useEffect(() => {
        fetch(URL, { method: "get" })
            .then((response) => response.json())
            .then((data) => {
                setIpInfo({ ...data });
            })
    }, []);
    const sts = ("Not In Use");
    const assignToo = ("Not Assign");
    const staffIdd = ("Not Assign");
    const deptM = ("Not Assign");
    const giv = ("Not Assign");
    const dateGiv = ("Not Assign");

    const [stockCode, setStockCode] = useState(`${create_random_string(8)}`);
    const [stockName, setStockName] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [stockBrand, setStockBrand] = useState("");
    const [stockColor, setStockColor] = useState("");
    const [purchaseDate, setPurchaseDate] = useState(`${today}`);
    const [purchaseFrom, setPurchaseFrom] = useState("");
    const [cost, setCost] = useState("");
    const [assignedTo, setAssignedTo] = useState(`${assignToo}`);
    const [staffId, setStaffId] = useState(`${staffIdd}`);
    const [department, setDepartment] = useState(`${deptM}`);
    const [giver, setGiver] = useState(`${giv}`);
    const [dateGiven, setDateGiven] = useState(`${dateGiv}`);
    const [status, setStatus] = useState(`${sts}`);
    // const [title, setTitle] = useState("");
    var [recoderIp, setRecoderIp] = useState(`${ipInfo.ip.ip}`);
    var [recoderLocation, setRecoderLocation] = useState(`${ipInfo.ip.country}`);
    var [stockRecoder, setStockRecoder] = useState(`${user && user.name}`);
    var [recoderAction, setRecoderAction] = useState(`${stockAdded}`);
    
  

    const [file, setFile] = useState("");
    const [preview, setPreview] = useState("");

    const [msg, setMsg] = useState("");
    const navigate = useNavigate();


    const loadImage = (e) => {
        const image = e.target.files[0];
        setFile(image);
        setPreview(URL.createObjectURL(image));
    };



    const Stock = async (e) => {

        e.preventDefault()
        const formData = new FormData()

        formData.append('stockCode', stockCode)
        formData.append('stockName', stockName)
        formData.append('description', description)
        formData.append('category', category)
        formData.append('stockBrand', stockBrand)
        formData.append('stockColor', stockColor)
        formData.append('purchaseDate', purchaseDate)
        formData.append('purchaseFrom', purchaseFrom)
        formData.append('cost', cost)
        formData.append('assignedTo', assignedTo)
        formData.append('staffId', staffId)
        formData.append('department', department)
        formData.append('giver', giver)
        formData.append('dateGiven,', dateGiven)
        formData.append('status', status)
        formData.append('recoderLocation', ipInfo.ip.country)
        formData.append('recoderIp', ipInfo.ip.ip)
        formData.append('stockRecoder', stockRecoder)
        formData.append('recoderAction', recoderAction)

        formData.append("file", file);
        // formData.append("title", title);

        try {
            await axios.post("http://localhost:5000/stock", formData, {
                headers: {
                    "Content-type": "multipart/form-data",
                },
            });
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    };






    return (
        <div>

            <div><p className="has-text-centered" style={{ color: "red", fontSize: "40px" }}>{msg}</p></div>
            <div className="card is-shadowless" style={{ width: "700px", alignItems: "center", backgroundColor: "orange", borderRadius: "20px" }}>
                <div className="card-content">
                    <div className="content">
                        <h1>{msg}</h1>
                        <form onSubmit={Stock} enctype="multipart/form-data" method="post" style={{ width: "600px" }}>



                            {/* Stock Code and name  */}
                            <div style={{ display: "flex" }}>
                                <div className="field" style={{ maxWidth: "550px" }}>
                                    <label className="label">Stock Code</label>
                                    <div className="control">
                                        <input
                                            type='text'
                                            style={{ width: "300px" }}
                                            className="input"
                                            value={create_random_string(8)}
                                            onChange={(e) => setStockCode(e.target.value)}
                                            placeholder="Stock Code"
                                        />
                                    </div>
                                </div>

                                <div className="field" style={{ maxWidth: "300px", marginLeft: "25px" }}>
                                    <label className="label">Stock Name</label>
                                    <div className="control">

                                        <input
                                            type="text"
                                            style={{ width: "300px" }}

                                            className="input"
                                            value={stockName}

                                            onChange={(e) => setStockName(e.target.value)}
                                            placeholder="Stock Name"

                                        />
                                    </div>
                                </div>
                            </div>
                            {/* Stock Code and Image  */}



                            {/* Disc and Category */}
                            <div style={{ display: "flex" }}>
                                <div className="field" style={{ maxWidth: "550px" }}>
                                    <label className="label">Description</label>
                                    <div className="control">
                                        <input
                                            type='textarea'
                                            style={{ width: "300px" }}
                                            className="input"
                                            value={description}
                                            onChange={(e) => setDescription(e.target.value)}
                                            placeholder="Stock Code"
                                        />
                                    </div>
                                </div>

                                <div className="field" style={{ maxWidth: "300px", marginLeft: "25px" }}>
                                    <label className="label">Category</label>
                                    <div className="select is-fullwidth">
                                        <select
                                            style={{ width: "300px" }}
                                            // value={category}
                                            onChange={(e) => setCategory(e.target.value)}
                                        >
                                            <option value="">Select</option>
                                            <option value="Electronic">Electronic</option>
                                            <option value="Stationary">Stationary</option>
                                            <option value="Vehicle">Vehicle</option>
                                            <option value="others">Others</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/* Disc and Category  */}




                            {/* Stock Brand and Color */}
                            <div style={{ display: "flex" }}>
                                <div className="field" style={{ maxWidth: "550px" }}>
                                    <label className="label">Stock Brand</label>
                                    <div className="control">
                                        <input
                                            type='textarea'
                                            style={{ width: "300px" }}
                                            className="input"
                                            value={stockBrand}
                                            onChange={(e) => setStockBrand(e.target.value)}
                                            placeholder="Stock Code"
                                        />
                                    </div>
                                </div>

                                <div className="field" style={{ maxWidth: "300px", marginLeft: "25px" }}>
                                    <label className="label">Stock Color</label>
                                    <div className="control">

                                        <input
                                            type="text"
                                            style={{ width: "300px" }}

                                            className="input"
                                            value={stockColor}

                                            onChange={(e) => setStockColor(e.target.value)}
                                            placeholder="Stock Color"
                                            size="lg"
                                        />
                                    </div>
                                </div>
                            </div>
                            {/* Stock Brand and Color */}



                            {/*Purchase Date and Purchase from*/}
                            <div style={{ display: "flex" }}>
                                <div className="field" style={{ maxWidth: "550px" }}>
                                    {/* <label className="label">Purchase Date</label> */}
                                    <div className="control">
                                        <input
                                            hidden
                                            style={{ width: "300px" }}
                                            className="input"
                                            value={today}
                                            onChange={(e) => setPurchaseDate(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div className="field" style={{ maxWidth: "300px", marginLeft: "25px" }}>
                                    <label className="label">Purchase From</label>
                                    <div className="control">

                                        <input
                                            type="text"
                                            style={{ width: "300px" }}

                                            className="input"
                                            value={purchaseFrom}

                                            onChange={(e) => setPurchaseFrom(e.target.value)}
                                            placeholder="Stock Color"
                                            size="lg"
                                        />
                                    </div>
                                </div>
                            </div>
                            {/* Purchase Date and Purchase from */}





                            {/* cost and assigned to*/}
                            <div style={{ display: "flex" }}>
                                <div className="field" style={{ maxWidth: "500px", }}>
                                    <label className="label">Cost</label>
                                    <div className="control">

                                        <input
                                            style={{ width: "300px" }}
                                            type='text'
                                            className="input"
                                            value={cost}

                                            onChange={(e) => setCost(e.target.value)}
                                            placeholder="Cost Le"
                                        />
                                    </div>
                                </div>

                            </div>
                           

                            {/* Status  */}
                            <div style={{ display: "flex" }}>
                                <div className="field" style={{ maxWidth: "300px", }}>
                                    <label className="label">Status</label>
                                    <div className="control">
                                        <input
                                            type='hidden'
                                            style={{ width: "300px" }}
                                            className="input"
                                            value={sts}
                                            onChange={(e) => setStatus(e.target.value)}
                                            placeholder="Status"
                                        />
                                    </div>




                                    <div className="field">
                                        <label className="label"></label>
                                        <div className="control">
                                            <input
                                                type="hidden"
                                                className="input"
                                                value={assignToo}
                                                onChange={(e) => setAssignedTo(e.target.value)}
                                                placeholder="Product Name"
                                            />
                                        </div>
                                    </div>


                                    <div className="field">
                                        <label className="label"></label>
                                        <div className="control">
                                            <input
                                                type="hidden"
                                                className="input"
                                                value={staffIdd}
                                                onChange={(e) => setStaffId(e.target.value)}

                                            />
                                        </div>
                                    </div>
                                    <div className="field">
                                        <label className="label"></label>
                                        <div className="control">
                                            <input
                                                type="hidden"
                                                className="input"
                                                value={deptM}
                                                onChange={(e) => setDepartment(e.target.value)}

                                            />
                                        </div>
                                    </div>
                                    <div className="field">
                                        <label className="label"></label>
                                        <div className="control">
                                            <input
                                                type="hidden"
                                                className="input"
                                                value={giv}
                                                onChange={(e) => setGiver(e.target.value)}
                                                placeholder="Product Name"
                                            />
                                        </div>
                                    </div>
                                    <div className="field">
                                        <label className="label"></label>
                                        <div className="control">
                                            <input
                                                type="hidden"
                                                className="input"
                                                value={dateGiv}
                                                onChange={(e) => setDateGiven(e.target.value)}
                                                placeholder="Product Name"
                                            />
                                        </div>
                                    </div>










                                    <div className="field">
                                        <label className="label">Image</label>
                                        <div className="control">
                                            <div className="file">
                                                <label className="file-label">
                                                    <input
                                                        type="file"
                                                        className="file-input"
                                                        onChange={loadImage}
                                                    />
                                                    <span className="file-cta">
                                                        <span className="file-label">Choose a file...</span>
                                                    </span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    {preview ? (
                                        <figure className="image is-128x128">
                                            <img src={preview} alt="Img" />
                                        </figure>
                                    ) : (
                                        ""
                                    )}


<div className="field">
                <label className="label">creator </label>
                <div className="control">
                  <input
                //   hidden
                    type="text"
                    className="input"
                    value={user && user.name}
                    onChange={(e) => setStockRecoder(e.target.value)}
                    placeholder="Staff Department"
                  />
                </div>
              </div>




              <div className="field">
                <label className="label">IP Address</label>
                <div className="control">
                  <input
                //   hidden
                    type="text"
                    className="input"
                    value={ipInfo.ip.ip}
                    onChange={(e) => setRecoderIp(e.target.value)}
                    placeholder="Staff Department"
                  />
                </div>
              </div>



              <div className="field">
                <label className="label">Location</label>
                <div className="control">
                  <input
                //   hidden
                    type="text"
                    className="input"
                    value={ipInfo.ip.country}
                    onChange={(e) => setRecoderLocation(e.target.value)}
                    placeholder="Staff Department"
                  />
                </div>
              </div>

              <div className="field">
                <label className="label">Action Performed</label>
                <div className="control">
                  <input
                    type="text"
                    // hidden
                    className="input"
                    value={stockAdded}
                    onChange={(e) => setRecoderAction(e.target.value)}
                    placeholder="Staff Department"
                  />
                </div>
              </div>




















                                    <div className="field" style={{ marginTop: "30px", marginLeft: "25px" }}>
                                        <div className="control">
                                            <button type="submit" className="button is-success">
                                                Save Stock
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                {/* Status  */}

                            </div>

                        </form>
                    </div>
                </div>
            </div >
        </div >
    )
};

export default StockInCreateList;
