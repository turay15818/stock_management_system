import Request from "../models/RequestModel.js";
import User from "../models/UserModel.js";
import { Op } from "sequelize";

export const getRequest = async (req, res) => {
    try {
        let response;
        if (req.role === "admin", "director", "manager" && req.role !=="user") {
            response = await Request.findAll({
                attributes: ['uid', 'staffid', 'staffName', 'itemName', 'requestAt', 'approved', 'reject'],
                
                
                
                include: [{
                    model: User,
                    attributes: ['name', 'email']
                }]
            });
        }

        else {
            response = await Request.findAll({
                attributes: ['uid', 'staffid', 'staffName', 'itemName', 'requestAt', 'approved', 'reject'],
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




export const getRequestById = async (req, res) => {
    try {
        const request = await Request.findOne({
            where: {
                uid: req.params.id
            }
        });

        if (!request) return res.status(404).json({ msg: "Data not found" });
        let response;
        if (req.role === "user") {
            response = await Request.findOne({
                attributes: ['uid', 'staffid', 'staffName', 'itemName', 'requestAt', 'approved', 'reject'],
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
                attributes: ['uid', 'staffid', 'staffName', 'itemName', 'requestAt', 'approved', 'reject'],
                where: {
                    [Op.and]: [{ id: request.id }, { userId: req.userId }]
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

export const createRequest = async (req, res) => {
    const { staffid, staffName, itemName, requestAt } = req.body;
    try {
        await Request.create({
            staffid: staffid,
            staffName: staffName,
            itemName: itemName,
            requestAt: requestAt,
            requestAt: requestAt,

            userId: req.userId
        });
        res.status(201).json({ msg: "Request Created Successfuly" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

export const updateRequest = async (req, res) => {
    try {
        const request = await Request.findOne({
            where: {
                uid: req.params.id
            }
        });
        if (!request) return res.status(404).json({ msg: "Data not found" });
        const { staffid, staffName, itemName, requestAt, approved, reject } = req.body;
        if (req.role === "manager", "director") {
            await Request.update({ staffid, staffName, itemName, requestAt, approved, reject }, {
                where: {
                    id: request.id
                }
            });
        }
        else {
            if (req.userId !== request.userId) return res.status(403).json({ msg: "Access forbidden" });
            await Request.update({ staffid, staffName, itemName, requestAt, approved, reject }, {
                where: {
                    [Op.and]: [{ id: request.id }, { userId: req.userId }]
                }
            });
        }
        res.status(200).json({ msg: "Request updated successfuly" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

export const deleteRequest = async (req, res) => {
    try {
        const request = await Request.findOne({
            where: {
                uid: req.params.id
            }
        });
        if (!request) return res.status(404).json({ msg: "Data not found" });
        const { staffid, staffName, itemName, requestAt, approved, reject } = req.body;
        if (req.role === "admin") {
            await Request.destroy({ staffid, staffName, itemName, requestAt, approved, reject }, {
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
        res.status(200).json({ msg: " deleted successfuly" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}