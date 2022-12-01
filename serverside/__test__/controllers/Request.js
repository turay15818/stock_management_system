const Request = require ("../models/RequestModel");
const User = require ("../models/UserModel");
const { Op } = require ("sequelize");


 const getRequest = async (req, res) => {
    try {
        let response;
        if (req.role === "user" && req.role !== "admin", "director", "manager") {
            response = await Request.findAll({
                attributes: ['uid', 'staffid', 'staffName', 'itemName', 'descri', 'requestAt', 'managerApproved', 'directorApproved'],

                where: {
                    // directorApproved: "Reject",
                    // managerApproved: 'Approved',
                    // userId: req.userId,
                },


                include: [{
                    model: User,
                    attributes: ['name', 'email', 'staffid']
                }]
            });
        }
        else {
            response = await Request.findAll({
                attributes: ['uid', 'staffid', 'staffName', 'itemName', 'descri', 'requestAt', 'managerApproved', 'directorApproved'],
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


 const getRequestByDirectorApproved = async (req, res) => {
    try {

        let response;

        if (req.role === "admin", "director", "manager") {
            response = await Request.findAll({
                attributes: ['uid', 'staffid', 'staffName', 'itemName', 'descri', 'requestAt', 'managerApproved', 'directorApproved'],
                where: {
                    managerApproved: "approved",

                },

                include: [{
                    model: User,
                    attributes: ['name', 'email']
                }]
            });
        }

        else {
            response = await Request.findAll({
                attributes: ['uid', 'staffid', 'staffName', 'itemName', 'descri', 'requestAt', 'managerApproved', 'directorApproved'],
                where: {
                    userId: req.userId
                },
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


 const getRequestByDirectorReject = async (req, res) => {
    try {

        let response;

        if (req.role === "user" && req.role !== "admin", "director", "manager") {
            response = await Request.findAll({
                attributes: ['uid', 'staffid', 'staffName', 'itemName', 'descri', 'requestAt', 'managerApproved', 'directorApproved'],
                where: {
                    DirectorApproved: "Reject",
                    userId: req.userId
                },

                include: [{
                    model: User,
                    attributes: ['name', 'email']
                }]
            });
        }

        else {
            response = await Request.findAll({
                attributes: ['uid', 'staffid', 'staffName', 'itemName', 'descri', 'requestAt', 'managerApproved', 'directorApproved'],
                where: {
                    userId: req.userId
                },
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

 const getRequestDirectorPending = async (req, res) => {
    try {

        let response;

        if (req.role === "user" && req.role !== "admin", "director", "manager") {
            response = await Request.findAll({
                attributes: ['uid', 'staffid', 'staffName', 'itemName', 'descri', 'requestAt', 'managerApproved', 'directorApproved'],
                where: {
                    managerApproved: "Approved",
                    directorApproved: 'Pending',
                    // userId: req.userId
                },

                include: [{
                    model: User,
                    attributes: ['name', 'email']
                }]
            });
        }

        else {
            response = await Request.findAll({
                attributes: ['uid', 'staffid', 'staffName', 'itemName', 'descri', 'requestAt', 'managerApproved', 'directorApproved'],
                where: {
                    userId: req.userId
                },
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

 const getRequestByBothApproved = async (req, res) => {
    try {

        let response;

        if (req.role === "admin" && req.role !== "user", "director", "manager") {
            response = await Request.findAll({
                attributes: ['uid', 'staffid', 'staffName', 'itemName', 'descri', 'requestAt', 'managerApproved', 'directorApproved'],
                where: {
                    directorApproved: "approved",
                    managerApproved: "approved",
                    // userId: req.userId,

                },

                include: [{
                    model: User,
                    attributes: ['name', 'email']
                }]
            });
        }

        else {
            response = await Request.findAll({
                attributes: ['uid', 'staffid', 'staffName', 'itemName', 'descri', 'requestAt', 'managerApproved', 'directorApproved'],
                where: {
                    userId: req.userId
                },
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


 const getPendingRequest = async (req, res) => {
    try {

        let response;

        if (req.role === "user" && req.role !== "admin", "director", "manager") {
            response = await Request.findAll({
                attributes: ['uid', 'staffid', 'staffName', 'itemName', 'descri', 'requestAt', 'managerApproved', 'directorApproved'],
                where: {
                    // directorApproved: "Reject",
                    managerApproved: 'Pending',
                },

                include: [{
                    model: User,
                    attributes: ['name', 'email']
                }]
            });
        }

        else {
            response = await Request.findAll({
                attributes: ['uid', 'staffid', 'staffName', 'itemName', 'descri', 'requestAt', 'managerApproved', 'directorApproved'],
                where: {
                    userId: req.userId
                },
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

 const getRejectedRequest = async (req, res) => {
    try {

        let response;

        if (req.role === "user" && req.role !== "admin", "director", "manager") {
            response = await Request.findAll({
                attributes: ['uid', 'staffid', 'staffName', 'itemName', 'descri', 'requestAt', 'managerApproved', 'directorApproved'],
                where: {
                    // directorApproved: "Reject",
                    managerApproved: 'Reject',
                },

                include: [{
                    model: User,
                    attributes: ['name', 'email']
                }]
            });
        }

        else {
            response = await Request.findAll({
                attributes: ['uid', 'staffid', 'staffName', 'itemName', 'descri', 'requestAt', 'managerApproved', 'directorApproved'],
                where: {
                    userId: req.userId
                },
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


// Admin RequestList Start Here
 const getAdminRequest = async (req, res) => {
    try {
        let response;
        if (req.role === "admin" && req.role !== "user", "director", "manager") {
            response = await Request.findAll({
                attributes: ['uid', 'staffid', 'staffName', 'itemName', 'descri', 'requestAt', 'managerApproved', 'directorApproved'],

                where: {
                    directorApproved: "Approved",
                    managerApproved: 'Approved',
                    // userId: req.userId,
                },


                include: [{
                    model: User,
                    attributes: ['name', 'email']
                }]
            });
        }
        else {
            response = await Request.findAll({
                attributes: ['uid', 'staffid', 'staffName', 'itemName', 'descri', 'requestAt', 'managerApproved', 'directorApproved'],
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
// Admin RequestList End Here

// User Route Setting Start Here
 const getManagerRequest = async (req, res) => {
    try {
        let response;
        if (req.role === "user" && req.role !== "admin", "director", "manager") {
            response = await Request.findAll({
                attributes: ['uid', 'staffid', 'staffName', 'descri', 'itemName', 'requestAt', 'managerApproved', 'directorApproved'],

                where: {
                    // directorApproved: "Reject",
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
            response = await Request.findAll({
                attributes: ['uid', 'staffid', 'staffName', 'itemName', 'descri', 'requestAt', 'managerApproved', 'directorApproved'],
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

 const getManagerRequestPending = async (req, res) => {
    try {
        let response;
        if (req.role === "user" && req.role !== "admin", "director", "manager") {
            response = await Request.findAll({
                attributes: ['uid', 'staffid', 'staffName', 'descri', 'itemName', 'requestAt', 'managerApproved', 'directorApproved'],

                where: {
                    // directorApproved: "Reject",
                    managerApproved: 'Pending',
                    userId: req.userId,
                },


                include: [{
                    model: User,
                    attributes: ['name', 'email']
                }]
            });
        }
        else {
            response = await Request.findAll({
                attributes: ['uid', 'staffid', 'staffName', 'itemName', 'descri', 'requestAt', 'managerApproved', 'directorApproved'],
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

 const getManagerRequestApproved = async (req, res) => {
    try {
        let response;
        if (req.role === "user" && req.role !== "admin", "director", "manager") {
            response = await Request.findAll({
                attributes: ['uid', 'staffid', 'staffName', 'descri', 'itemName', 'requestAt', 'managerApproved', 'directorApproved'],

                where: {
                    // directorApproved: "Reject",
                    managerApproved: 'Approved',
                    userId: req.userId,
                },


                include: [{
                    model: User,
                    attributes: ['name', 'email']
                }]
            });
        }
        else {
            response = await Request.findAll({
                attributes: ['uid', 'staffid', 'staffName', 'itemName', 'descri', 'requestAt', 'managerApproved', 'directorApproved'],
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

 const getManagerRequestRejected = async (req, res) => {
    try {
        let response;
        if (req.role === "user" && req.role !== "admin", "director", "manager") {
            response = await Request.findAll({
                attributes: ['uid', 'staffid', 'staffName', 'descri', 'itemName', 'requestAt', 'managerApproved', 'directorApproved'],

                where: {
                    // directorApproved: "Reject",
                    managerApproved: 'Reject',
                    userId: req.userId,
                },


                include: [{
                    model: User,
                    attributes: ['name', 'email']
                }]
            });
        }
        else {
            response = await Request.findAll({
                attributes: ['uid', 'staffid', 'staffName', 'itemName', 'descri', 'requestAt', 'managerApproved', 'directorApproved'],
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

 const getDirectorRequestPending = async (req, res) => {
    try {
        let response;
        if (req.role === "user" && req.role !== "admin", "director", "manager") {
            response = await Request.findAll({
                attributes: ['uid', 'staffid', 'staffName', 'descri', 'itemName', 'requestAt', 'managerApproved', 'directorApproved'],

                where: {
                    // directorApproved: "Reject",
                    directorApproved: 'Pending',
                    userId: req.userId,
                },


                include: [{
                    model: User,
                    attributes: ['name', 'email']
                }]
            });
        }
        else {
            response = await Request.findAll({
                attributes: ['uid', 'staffid', 'staffName', 'itemName', 'descri', 'requestAt', 'managerApproved', 'directorApproved'],
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

 const getRequestByDirector = async (req, res) => {
    try {
        let response;
        if (req.role === "user" && req.role !== "admin", "director", "manager") {
            response = await Request.findAll({
                attributes: ['uid', 'staffid', 'staffName', 'descri', 'itemName', 'requestAt', 'managerApproved', 'directorApproved'],

                where: {
                    managerApproved: 'Approved',
                    directorApproved: "Rejected",

                    userId: req.userId,
                },


                include: [{
                    model: User,
                    attributes: ['name', 'email']
                }]
            });
        }
        else {
            response = await Request.findAll({
                attributes: ['uid', 'staffid', 'staffName', 'itemName', 'descri', 'requestAt', 'managerApproved', 'directorApproved'],
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

// User Route Setting End Here

// User Route Setting Start Here
 const getManagerRequestAll = async (req, res) => {
    try {
        let response;
        if (req.role === "user" && req.role !== "admin", "director", "manager") {
            response = await Request.findAll({
                attributes: ['uid', 'staffid', 'staffName', 'descri', 'itemName', 'requestAt', 'managerApproved', 'directorApproved'],

                where: {
                    // directorApproved: "Reject",
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
            response = await Request.findAll({
                attributes: ['uid', 'staffid', 'staffName', 'itemName', 'descri', 'requestAt', 'managerApproved', 'directorApproved'],
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

 const getRequestByManagerReqPending = async (req, res) => {
    try {
        let response;
        if (req.role === "manager" && req.role !== "admin", "director", "user") {
            response = await Request.findAll({
                attributes: ['uid', 'staffid', 'staffName', 'descri', 'itemName', 'requestAt', 'managerApproved', 'directorApproved'],

                where: {
                    // directorApproved: "Approved",
                    managerApproved: 'pending',
                    // userId: req.userId,
                },


                include: [{
                    model: User,
                    attributes: ['name', 'email']
                }]
            });
        }
        else {
            response = await Request.findAll({
                attributes: ['uid', 'staffid', 'staffName', 'itemName', 'descri', 'requestAt', 'managerApproved', 'directorApproved'],
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

 const getRequestByManagerReqApproved = async (req, res) => {
    try {
        let response;
        if (req.role === "manager" && req.role !== "admin", "director", "user") {
            response = await Request.findAll({
                attributes: ['uid', 'staffid', 'staffName', 'descri', 'itemName', 'requestAt', 'managerApproved', 'directorApproved'],

                where: {
                    directorApproved: "Approved",
                    managerApproved: 'Approved',
                    // userId: req.userId,
                },


                include: [{
                    model: User,
                    attributes: ['name', 'email']
                }]
            });
        }
        else {
            response = await Request.findAll({
                attributes: ['uid', 'staffid', 'staffName', 'itemName', 'descri', 'requestAt', 'managerApproved', 'directorApproved'],
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


 const getRequestByManageRejected = async (req, res) => {
    try {
        let response;
        if (req.role === "manager" && req.role !== "admin", "director", "user") {
            response = await Request.findAll({
                attributes: ['uid', 'staffid', 'staffName', 'descri', 'itemName', 'requestAt', 'managerApproved', 'directorApproved'],

                where: {
                    // directorApproved: "Reject",
                    managerApproved: 'Reject',

                    // userId: req.userId,
                },


                include: [{
                    model: User,
                    attributes: ['name', 'email']
                }]
            });
        }
        else {
            response = await Request.findAll({
                attributes: ['uid', 'staffid', 'staffName', 'itemName', 'descri', 'requestAt', 'managerApproved', 'directorApproved'],
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

 const getRequestDirectorReqPending = async (req, res) => {
    try {
        let response;
        if (req.role === "manager" && req.role !== "admin", "director", "user") {
            response = await Request.findAll({
                attributes: ['uid', 'staffid', 'staffName', 'descri', 'itemName', 'requestAt', 'managerApproved', 'directorApproved'],

                where: {
                    managerApproved: "Approved",
                    directorApproved: 'Pending',
                    // userId: req.userId,
                },


                include: [{
                    model: User,
                    attributes: ['name', 'email']
                }]
            });
        }
        else {
            response = await Request.findAll({
                attributes: ['uid', 'staffid', 'staffName', 'itemName', 'descri', 'requestAt', 'managerApproved', 'directorApproved'],
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


 const getRequestDirectorReqRejected = async (req, res) => {
    try {
        let response;
        if (req.role === "manager" && req.role !== "admin", "director", "user") {
            response = await Request.findAll({
                attributes: ['uid', 'staffid', 'staffName', 'descri', 'itemName', 'requestAt', 'managerApproved', 'directorApproved'],

                where: {
                    managerApproved: 'Approved',
                    directorApproved: "Rejected",

                    // userId: req.userId,
                },


                include: [{
                    model: User,
                    attributes: ['name', 'email']
                }]
            });
        }
        else {
            response = await Request.findAll({
                attributes: ['uid', 'staffid', 'staffName', 'itemName', 'descri', 'requestAt', 'managerApproved', 'directorApproved'],
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

// User Route Setting End Here

// Director Route Setting Start Here
 const getDirectorRequestAll = async (req, res) => {
    try {
        let response;
        if (req.role === "director" && req.role !== "admin", "user", "manager") {
            response = await Request.findAll({
                attributes: ['uid', 'staffid', 'staffName', 'descri', 'itemName', 'requestAt', 'managerApproved', 'directorApproved'],

                where: {
                    // directorApproved: "Reject",
                    managerApproved: 'Approved',
                    // userId: req.userId,
                },


                include: [{
                    model: User,
                    attributes: ['name', 'email']
                }]
            });
        }
        else {
            response = await Request.findAll({
                attributes: ['uid', 'staffid', 'staffName', 'itemName', 'descri', 'requestAt', 'managerApproved', 'directorApproved'],
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

 const getDirectorRequestPendingAll = async (req, res) => {
    try {
        let response;
        if (req.role === "director" && req.role !== "admin", "manager", "user") {
            response = await Request.findAll({
                attributes: ['uid', 'staffid', 'staffName', 'descri', 'itemName', 'requestAt', 'managerApproved', 'directorApproved'],

                where: {
                    directorApproved: "Pending",
                    managerApproved: 'Approved'
                    // userId: req.userId,
                },


                include: [{
                    model: User,
                    attributes: ['name', 'email']
                }]
            });
        }
        else {
            response = await Request.findAll({
                attributes: ['uid', 'staffid', 'staffName', 'itemName', 'descri', 'requestAt', 'managerApproved', 'directorApproved'],
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

 const getDirectorRequestRejectAll = async (req, res) => {
    try {
        let response;
        if (req.role === "director" && req.role !== "admin", "manager", "user") {
            response = await Request.findAll({
                attributes: ['uid', 'staffid', 'staffName', 'descri', 'itemName', 'requestAt', 'managerApproved', 'directorApproved'],

                where: {
                    directorApproved: "Rejected",
                    managerApproved: 'Approved'
                    // userId: req.userId,
                },


                include: [{
                    model: User,
                    attributes: ['name', 'email']
                }]
            });
        }
        else {
            response = await Request.findAll({
                attributes: ['uid', 'staffid', 'staffName', 'itemName', 'descri', 'requestAt', 'managerApproved', 'directorApproved'],
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

 const getRequestById = async (req, res) => {
    try {
        const request = await Request.findOne({
            where: {
                id: req.params.id
            }
        });

        if (!request) return res.status(404).json({ msg: "Data not found" });
        let response;
        if (req.role === "user") {
            response = await Request.findOne({
                attributes: ['id', 'uid', 'staffid', 'staffName', 'itemName', 'requestAt', 'managerApproved', 'directorApproved'],
                where: {
                    id: request.id
                },
                include: [{
                    model: User,
                    attributes: ['name', 'email']
                }]
            });
        } else {
            response = await Request.findOne({
                attributes: ['id', 'uid', 'staffid', 'staffName', 'itemName', 'requestAt', 'managerApproved', 'directorApproved'],
                where: {
                    [Op.and]: [{ id: request.id }]
                },
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

 const createRequest = async (req, res) => {
    const { staffid, staffName, itemName, descri, requestAt, managerApproved, directorApproved, senderIp, senderLocation, senderAction } = req.body;
    try {
        await Request.create({
            staffid: staffid,
            staffName: staffName,
            itemName: itemName,
            descri: descri,
            requestAt: requestAt,
            managerApproved: managerApproved,
            directorApproved: directorApproved,
            senderLocation: senderLocation,
            senderIp: senderIp,
            senderAction: senderAction,


            userId: req.userId
        });
        res.status(201).json({ msg: "Request Created Successfully" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

 const updateRequest = async (req, res) => {
    try {
        const request = await Request.findOne({
            where: {
                uid: req.params.id
            }
        });
        if (!request) return res.status(404).json({ msg: "Data not found" });
        const { staffid, staffName, itemName, descri, requestAt, managerApproved, directorApproved, managerName, managerIp, managerLocation, managerTime, reason } = req.body;
        if (req.role !== "manager", "director", "admin", "users") {
            await Request.update({ staffid, staffName, itemName, descri, requestAt, managerApproved, directorApproved, managerName, managerIp, managerLocation, managerTime, reason }, {
                where: {
                    id: request.id
                }
            });
        }
        else {
            if (req.userId !== request.userId) return res.status(403).json({ msg: "Access forbidden" });
            await Request.update({ staffid, staffName, itemName, descri, requestAt, managerApproved, directorApproved, managerName, managerIp, managerLocation, managerTime, reason }, {
                where: {
                    [Op.and]: [{ id: request.id }]
                }
            });
        }
        res.status(200).json({ msg: "Request updated successfully" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}


 const updateDirectorRequest = async (req, res) => {
    try {
        const request = await Request.findOne({
            where: {
                uid: req.params.id
            }
        });
        if (!request) return res.status(404).json({ msg: "Data not found" });
        const { staffid, staffName, itemName, descri, requestAt, managerApproved, directorApproved, directorName, directorIp, directorLocation, directorTime, reason } = req.body;
        if (req.role === "manager", "director") {
            await Request.update({ staffid, staffName, itemName, descri, requestAt, directorApproved, directorApproved, directorName, directorIp, directorLocation, directorTime, reason }, {
                where: {
                    id: request.id
                }
            });
        }
        else {
            if (req.userId !== request.userId) return res.status(403).json({ msg: "Access forbidden" });
            await Request.update({ staffid, staffName, itemName, descri, requestAt, directorApproved, directorApproved, directorName, directorIp, directorLocation, directorTime, reason }, {
                where: {
                    [Op.and]: [{ id: request.id }, { userId: req.userId }]
                }
            });
        }
        res.status(200).json({ msg: "Request updated successfully" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

 const deleteRequest = async (req, res) => {
    try {
        const request = await Request.findOne({
            where: {
                uid: req.params.id
            }
        });
        if (!request) return res.status(404).json({ msg: "Data not found" });
        const { staffid, staffName, itemName, descri, requestAt, managerApproved, directorApproved } = req.body;
        if (req.role !== "admin", "manager", "director", "users") {
            await Request.destroy({ staffid, staffName, itemName, descri, requestAt, managerApproved, directorApproved }, {
                where: {

                    id: request.id
                }
            });

        } else {
            if (req.userId !== request.userId) return res.status(403).json({ msg: "Access forbidden" });
            await Request.destroy({
                where: {
                    [Op.and]: [{ id: request.id }, { userId: req.userId }]
                }
            });
        }
        res.status(200).json({ msg: " deleted successfully" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

module.exports = {
    getRequest,
    getRequestByDirectorApproved,
    getRequestByDirectorReject,
    getRequestDirectorPending,
    getRequestByBothApproved,
    getPendingRequest,
    getRejectedRequest,
    getAdminRequest,
    getManagerRequest,
    getManagerRequestPending,
    getManagerRequestApproved,
    getManagerRequestRejected,
    getDirectorRequestPending,
    getRequestByDirector,
    getRequestByDirector,
    getManagerRequestAll,
    getRequestByManagerReqPending,
    getRequestByManagerReqApproved,
    getRequestByManageRejected,
    getRequestDirectorReqPending,
    getRequestDirectorReqRejected,
    getDirectorRequestAll,
    getDirectorRequestPendingAll,
    getDirectorRequestPendingAll,
    getDirectorRequestRejectAll,
    getDirectorRequestRejectAll,
    getRequestById,
    getRequestById,
    createRequest,
    updateRequest,
    updateRequest,
    updateDirectorRequest,
    deleteRequest
}