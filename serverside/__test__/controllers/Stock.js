const express = require ('express');
const  Stock = require ("../models/StockModel")
const  User = require ("../models/UserModel");
const  path = require ("path")
const  fs = require ("fs");



const app = express()
app.use(express.static('./public'))




// "react-redux": "^8.0.4",

// Get All Stock Start Here
 const getStock = async (req, res) => {
    try {
        let response;
        if (req.role !== "admin", "director", "manager", "user") {
            response = await Stock.findAll({
                attributes: [
                    'id', 'stockCode', 'stockName',
                    'description', 'category', 'stockBrand', 'stockColor',
                    'purchaseDate', 'purchaseFrom', 'cost',
                    'assignedTo', 'staffId',

                    'department', 'giver', 'dateGiven',
                    'status', 'image', 'url',
                    'recoderAction', 'recoderLocation', 'recoderIp', 'stockRecoder',
                    'assignerAction', 'assignerLocation', 'assignerIp',

                ],

                where: {
                    status: "Not in Use",

                    // managerApproved: 'Approved',
                    // userId: req.userId,

                },


                include: [{
                    model: User,
                    attributes: ['name', 'email']
                }]
            });
        }
        else {
            response = await Stock.findAll({
                attributes: [
                    'id', 'stockCode', 'stockName',
                    'description', 'category', 'stockBrand', 'stockColor',
                    'purchaseDate', 'purchaseFrom', 'cost',
                    'assignedTo', 'staffId',

                    'department', 'giver', 'dateGiven',
                    'status', 'image', 'url',
                    'recoderAction', 'recoderLocation', 'recoderIp', 'stockRecoder',
                    'assignerAction', 'assignerLocation', 'assignerIp',


                ],
                where: [{
                    userId: req.userId,

                }],
                include: [{
                    model: User,
                    attributes: ['name', 'email']
                }]
            });
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}
// Get All stock end here


// Get All Stock Start Here
 const getAllStock = async (req, res) => {
    try {
        let response;
        if (req.role !== "admin", "director", "manager", "user") {
            response = await Stock.findAll({
                attributes: [
                    'id', 'stockCode', 'stockName',
                    'description', 'category', 'stockBrand', 'stockColor',
                    'purchaseDate', 'purchaseFrom', 'cost',
                    'assignedTo', 'staffId',

                    'department', 'giver', 'dateGiven',
                    'status', 'image', 'url',
                    'recoderAction', 'recoderLocation', 'recoderIp', 'stockRecoder',
                    'assignerAction', 'assignerLocation', 'assignerIp',



                ],

                where: {
                    // status: "Not in Use",
                    // managerApproved: 'Approved',
                    // userId: req.userId,
                    // userId: req.userId
                },


                include: [{
                    model: User,
                    attributes: ['name', 'email']
                }]
            });
        }
        else {
            response = await Stock.findAll({
                attributes: [
                    'id', 'stockCode', 'stockName',
                    'description', 'category', 'stockBrand', 'stockColor',
                    'purchaseDate', 'purchaseFrom', 'cost',
                    'assignedTo', 'staffId',

                    'department', 'giver', 'dateGiven',
                    'status', 'image', 'url',
                    'recoderAction', 'recoderLocation', 'recoderIp', 'stockRecoder',
                    'assignerAction', 'assignerLocation', 'assignerIp',


                ],
                // where: [{
                //     userId: req.userId,

                // }],
                include: [{
                    model: User,
                    attributes: ['name', 'email']
                }]
            });
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}
// Get All stock end here




// Get All Stock  in use Start Here
 const getStockInUse = async (req, res) => {
    try {
        let response;
        if (req.role !== "admin", "director", "manager", "user") {
            response = await Stock.findAll({
                attributes: [
                    'id', 'stockCode', 'stockName',
                    'description', 'category', 'stockBrand', 'stockColor',
                    'purchaseDate', 'purchaseFrom', 'cost',
                    'assignedTo', 'staffId',

                    'department', 'giver', 'dateGiven',
                    'status', 'image', 'url',
                    'recoderAction', 'recoderLocation', 'recoderIp', 'stockRecoder',
                    'assignerAction', 'assignerLocation', 'assignerIp',



                ],

                where: {
                    status: "In Use",
                    // userId: req.userId,
                },


                include: [{
                    model: User,
                    attributes: ['name', 'email']
                }]
            });
        }
        else {
            response = await Stock.findAll({
                attributes: [
                    'id', 'stockCode', 'stockName',
                    'description', 'category', 'stockBrand', 'stockColor',
                    'purchaseDate', 'purchaseFrom', 'cost',
                    'assignedTo', 'staffId',

                    'department', 'giver', 'dateGiven',
                    'status', 'image', 'url',
                    'recoderAction', 'recoderLocation', 'recoderIp', 'stockRecoder',
                    'assignerAction', 'assignerLocation', 'assignerIp',


                ],
                // where: [{
                //     userId: req.userId,

                // }],
                include: [{
                    model: User,
                    attributes: ['name', 'email']
                }]
            });
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}
// Get All stock  in use end here



// Get stock by Id start here
 const getStockInUseId = async (req, res) => {
    try {
        const stock = await Stock.findOne({
            where: {
                // id: req.params.id
            }
        });

        if (!stock) return res.status(404).json({ msg: "Data not found" });
        let response;
        if (req.role === "director", "manager", "admin") {
            response = await Stock.findOne({
                attributes: [
                    'id',
                    'stockCode', 'stockName',
                    'description', 'category', 'stockBrand', 'stockColor',
                    'purchaseDate', 'purchaseFrom', 'cost',
                    'assignedTo', 'staffId',

                    'department', 'giver', 'dateGiven',
                    'status', 'image', 'url',
                    'recoderAction', 'recoderLocation', 'recoderIp', 'stockRecoder',
                    'assignerAction', 'assignerLocation', 'assignerIp',

                ],
                where: {
                    id: stock.id
                },
                include: [{
                    model: User,
                    attributes: ['name', 'email']
                }]
            });
        } else {
            response = await Stock.findOne({
                attributes: [
                    'id', 'stockCode', 'stockName',
                    'description', 'category', 'stockBrand', 'stockColor',
                    'purchaseDate', 'purchaseFrom', 'cost',
                    'assignedTo', 'staffId',
                    'department', 'giver', 'dateGiven',
                    'status', 'image', 'url',
                    'recoderAction', 'recoderLocation', 'recoderIp', 'stockRecoder',
                    'assignerAction', 'assignerLocation', 'assignerIp',

                ],
                where: {
                    [Op.and]: [{ id: stock.id }, { userId: req.userId }]
                },
                include: [{
                    model: User,
                    attributes: ['name', 'email']
                }]
            });
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: "No Stock Found" });
    }
}
// Get stock by ID end here

// Get All Stock  not in use Start Here
 const getStockNotInUse = async (req, res) => {
    try {
        let response;
        if (req.role === "user" && req.role !== "admin", "director", "manager") {
            response = await Stock.findAll({
                attributes: [
                    'id', 'stockCode', 'stockName',
                    'description', 'category', 'stockBrand', 'stockColor',
                    'purchaseDate', 'purchaseFrom', 'cost',
                    'assignedTo', 'staffId',

                    'department', 'giver', 'dateGiven',
                    'status', 'image', 'url',
                    'recoderAction', 'recoderLocation', 'recoderIp', 'stockRecoder',
                    'assignerAction', 'assignerLocation', 'assignerIp',



                ],

                where: {
                    status: "Not in Use",
                    // managerApproved: 'Approved',
                    // userId: req.userId,



                    // userId: req.userId



                },


                include: [{
                    model: User,
                    attributes: ['name', 'email']
                }]
            });
        }
        else {
            response = await Stock.findAll({
                attributes: [
                    'id', 'stockCode', 'stockName',
                    'description', 'category', 'stockBrand', 'stockColor',
                    'purchaseDate', 'purchaseFrom', 'cost',
                    'assignedTo', 'staffId',

                    'department', 'giver', 'dateGiven',
                    'status', 'image', 'url',
                    'recoderAction', 'recoderLocation', 'recoderIp', 'stockRecoder',
                    'assignerAction', 'assignerLocation', 'assignerIp',


                ],
                where: [{
                    userId: req.userId,

                }],
                include: [{
                    model: User,
                    attributes: ['name', 'email']
                }]
            });
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}
// Get All stock not in use end here

// Get stock by Id start here
 const getStockId = async (req, res) => {
    try {
        const stock = await Stock.findOne({
            // where: {
            //     id: req.params.id
            // }
        });

        if (!stock) return res.status(404).json({ msg: "Data not found" });
        let response;
        if (req.role === "director", "manager", "admin") {
            response = await Stock.findOne({
                attributes: [
                    'id',
                    'stockCode', 'stockName',
                    'description', 'category', 'stockBrand', 'stockColor',
                    'purchaseDate', 'purchaseFrom', 'cost',
                    'assignedTo', 'staffId',

                    'department', 'giver', 'dateGiven',
                    'status', 'image', 'url',
                    'recoderAction', 'recoderLocation', 'recoderIp', 'stockRecoder',
                    'assignerAction', 'assignerLocation', 'assignerIp',

                ],
                where: {
                    id: stock.id
                },
                include: [{
                    model: User,
                    attributes: ['name', 'email']
                }]
            });
        } else {
            response = await Stock.findOne({
                attributes: [
                    'id', 'stockCode', 'stockName',
                    'description', 'category', 'stockBrand', 'stockColor',
                    'purchaseDate', 'purchaseFrom', 'cost',
                    'assignedTo', 'staffId',
                    'department', 'giver', 'dateGiven',
                    'status', 'image', 'url',
                    'recoderAction', 'recoderLocation', 'recoderIp', 'stockRecoder',
                    'assignerAction', 'assignerLocation', 'assignerIp',

                ],
                where: {
                    [Op.and]: [{ id: stock.id }, { userId: req.userId }]
                },
                include: [{
                    model: User,
                    attributes: ['name', 'email']
                }]
            });
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: "No Stock Found" });
    }
}
// Get stock by ID end here

// Save/create stock start here
 const saveStock = (req, res) => {
    if (req.files === null) return res.status(400).json({ msg: "No File Uploaded" });
    const stockUId = req.body.stockUId;
    const stockCode = req.body.stockCode;
    const stockName = req.body.stockName;
    const description = req.body.description;
    const category = req.body.category;
    const stockBrand = req.body.stockBrand;
    const stockColor = req.body.stockColor;
    const purchaseDate = req.body.purchaseDate;
    const purchaseFrom = req.body.purchaseFrom;
    const cost = req.body.cost;
    const assignedTo = req.body.assignedTo;
    const staffId = req.body.staffId;
    const department = req.body.department;
    const giver = req.body.giver;
    const dateGiven = req.body.dateGiven;
    const status = req.body.status;
    const recoderAction = req.body.recoderAction;
    const recoderLocation = req.body.recoderLocation
    const recoderIp = req.body.recoderIp;
    const stockRecoder = req.body.stockRecoder;

    const file = req.files.file;
    const fileSize = file.data.length;
    const ext = path.extname(file.name);
    const fileName = file.md5 + ext;
    const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
    const allowedType = ['.png', '.jpg', '.jpeg'];


    if (!allowedType.includes(ext.toLowerCase())) return res.status(422).json({ msg: "Invalid Images" });
    if (fileSize > 20000000) return res.status(422).json({ msg: "Image must be less than 20 MB" });

    file.mv(`./public/images/${fileName}`, async (err) => {
        if (err) return res.status(500).json({ msg: err.message });
        try {
            await Stock.create({
                stockUId: stockUId,
                stockCode: stockCode,
                stockName: stockName,
                description: description,
                category: category,
                stockBrand: stockBrand,
                stockColor: stockColor,
                purchaseDate: purchaseDate,
                purchaseFrom: purchaseFrom,
                cost: cost,
                staffId: staffId,
                department: department,
                assignedTo: assignedTo,
                giver: giver,
                dateGiven: dateGiven,
                recoderAction: recoderAction,
                recoderLocation: recoderLocation,
                recoderIp: recoderIp,
                stockRecoder: stockRecoder,

                status: status,
                image: fileName,
                url: url,

                userId: req.userId

            }); res.status(200).json({ staffId });
            res.status(201).json({ msg: "Stock Created Successfully" });
        } catch (error) {
            console.log(error.message);
        }
    })

}
//save create stock end here

 const updateStock = async (req, res) => {
    try {
        const stock = await Stock.findOne({
            where: {
                // id: req.params.id
            }
        });
        if (!stock) return res.status(404).json({ msg: "Data not found" });
        const { assignedTo, staffId, giver, department, dateGiven, status, assignerAction, assignerLocation, assignerIp, } = req.body;
        if (req.role === "admin", "manager", "director") {
            await Stock.update({ assignedTo, staffId, giver, department, dateGiven, status, assignerAction, assignerLocation, assignerIp, }, {
                where: {
                    id: stock.id
                }
            });
        }
        else {
            if (req.userId !== stock.userId) return res.status(403).json({ msg: "Access forbidden" });
            await Stock.update({ assignedTo, staffId, giver, department, dateGiven, status, assignerAction, assignerLocation, assignerIp, }, {
                where: {
                    [Op.and]: [{ id: stock.id }, { userId: req.userId }]
                }
            });
        }
        res.status(200).json({ msg: "Request updated successfully" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

// delete stock start here
 const deleteStock = async (req, res) => {
    try {
        const stock = await Stock.findOne({
            where: {
                // id: req.params.id
            }
        });
        if (!stock) return res.status(404).json({ msg: "Data not found" });



        const {
            stockCode, stockName,
            description, category, stockBrand, stockColor,
            purchaseDate, purchaseFrom, cost,
            assignedTo, staffId,

            department, giver, dateGiven,
            name, status, image,
        } = req.body;
        if (req.role === "admin", "manager", "director" && req.role !== "user") {
            await stock.destroy({
                stockCode, stockName,
                description, category, stockBrand, stockColor,
                purchaseDate, purchaseFrom, cost,
                assignedTo, staffId,

                department, giver, dateGiven,
                name, status, image,
            }, {
                where: {

                    id: stock.id
                }
            });

        } else {
            if (req.userId !== stock.id) return res.status(403).json({ msg: "Access forbidden" });
            await Stock.destroy({
                where: {
                    [Op.and]: [{ id: stock.id }, { userId: req.userId }]
                }
            });
        }



        res.status(200).json({ msg: " deleted successfully" });
    } catch (error) {
        res.status(500).json({ msg: "Fail to delete" });
    }
}
// delete stock end here


module.exports = { 
    getStock, getAllStock,
    getStockInUse, getStockInUseId, 
    getStockNotInUse, getStockId, 
    updateStock, deleteStock
}