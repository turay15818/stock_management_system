import User from "../models/UserModel.js";
import Request from "../models/RequestModel.js";
import argon2 from "argon2";

export const getUsers = async(req, res) =>{
    try {
        const response = await User.findAll({
            attributes:['uid', 'staffid', 'name','email', 'department', 'staffStatus', 'password','role'],

            include: [{
                model: Request,
                attributes: ['staffId', 'staffName', 'itemName',]
            }]
        });

        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const getUserById = async(req, res) =>{
    try {
        const response = await User.findOne({
            attributes:['uid', 'staffid', 'name','email', 'department', 'staffStatus', 'password', 'role'],
            where: {
                uid: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const createUser = async(req, res) =>{
    const {staffid, name, email, department, staffStatus, password, confPassword, role} = req.body;
    if(password !== confPassword) return res.status(400).json({msg: "Password and Confirm Password do not match"});
    const hashPassword = await argon2.hash(password);
    try {
        await User.create({
            staffid: staffid,
            name: name,
            email: email,
            department: department,
            staffStatus: staffStatus,
            password: hashPassword,
            role: role
        });
        res.status(201).json({msg: "Register Successful"});
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}

export const updateUser = async(req, res) =>{
    const user = await User.findOne({
        where: {
            uid: req.params.id
        }
    });
    if(!user) return res.status(404).json({msg: "User not found"});
    const {staffid, name, email, department, staffStatus, password, confPassword, role} = req.body;
    let hashPassword;
    if(password === "" || password === null){
        hashPassword = user.password
    }else{
        hashPassword = await argon2.hash(password);
    }
    if(password !== confPassword) return res.status(400).json({msg: "Password and Confirm Password do not match"});
    try {
        await User.update({
            
            staffid: staffid,
            name: name,
            email: email,
            department: department,
            staffStatus: staffStatus,
            password: hashPassword,
            role: role
        },{
            where:{
                id: user.id
            }
        });
        res.status(200).json({msg: "User Updated"});
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}

export const deleteUser = async(req, res) =>{
    const user = await User.findOne({
        where: {
            uid: req.params.id
        }
    });
    if(!user) return res.status(404).json({msg: "User not found"});
   
    try {
        await User.destroy({
            where:{
                id: user.id
            }
        });
        if(user) return res.status(200).json({alert: "Are Sure Do you want to delete this user"});
        res.status(200).json({msg: "User Deleted"});
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}