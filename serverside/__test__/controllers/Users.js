const User = require ("../models/UserModel");
const argon2 = require ("argon2");
const express = require ('express');
const app = express()
app.use(express.static('./public'))
// app.use(bodyparser.json())
// app.use(
//   bodyparser.urlencoded({
//     extended: true,
//   }),
// )


 const getUsers = async(req, res) =>{
    try {
        const response = await User.findAll({
            attributes:[ 'id','staffid', 'name','email', 'department', 'staffStatus', 'role', 'creator', 'ipAddress', 'location', 'createdTime', 'actionPerformed', 'updator', 'updatorIpAddress', 'updatorLocation', 'updatedTime', 'updatePerformed'],
        });

        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

 const getUserById = async(req, res) =>{
    try {
        const response = await User.findOne({
            attributes:['id', 'staffid', 'name','email', 'department', 'staffStatus', 'password', 'role', 'creator', 'ipAddress', 'location', 'createdTime', 'actionPerformed','updator', 'updatorIpAddress', 'updatorLocation', 'updatedTime', 'updatePerformed'],
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

 const createUser = async(req, res) =>{
    const {staffid, name, email, department, staffStatus, password, confPassword, role, creator, ipAddress, location, createdTime, actionPerformed} = req.body;
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
            role: role,
            creator: creator, 
            ipAddress: ipAddress, 
            location: location, 
            createdTime: createdTime, 
            actionPerformed: actionPerformed, 
            // updator: updator, 
            // updatorIpAddress: updatorIpAddress, 
            // updatorLocation: updatorLocation, 
            // updatedTime: updatedTime
        });
        res.status(201).json({msg: "Register Successful"});
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}

 const updateUser = async(req, res) =>{
    const user = await User.findOne({
        where: {
            id: req.params.id,
        }
    });
    if(!user) return res.status(404).json({msg: "User not found"});
    const {staffid, name, email, department, staffStatus, password, confPassword, role, updator, updatorIpAddress, updatorLocation, updatedTime, updatePerformed} = req.body;
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
            role: role,
            updator: updator, 
            updatorIpAddress: updatorIpAddress, 
            updatorLocation: updatorLocation, 
            updatedTime: updatedTime,
            updatePerformed: updatePerformed,
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


 const updateTokenUser = async(req, res) =>{
    const user = await User.findOne({
        where: {
            token: req.params.id,
            token: req.params.token
        }
    });
    const { password, confPassword} = req.body;
    let hashPassword;
    if(password === "" || password === null){
        hashPassword = user.password
    }else{
        hashPassword = await argon2.hash(password);
    }
    if(password !== confPassword) return res.status(400).json({msg: "Password and Confirm Password do not match"});
    try {
        await User.update({
            
            password: hashPassword,
        },{
            where:{
                token: req.params.id,
                token:req.params.token
            }
        });
        res.status(200).json({msg: "User Updated"});
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}


 const deleteUser = async(req, res) =>{
    const user = await User.findOne({
        where: {
            id: req.params.id
        }
    });
    if(!user) return res.status(404).json({msg: "User not found"});
   
    try {
        await User.destroy({
            where:{
                id: req.params.id
            }
        });
        if(user) return res.status(200).json({alert: "User Deleted"});
        res.status(200).json({msg: "User Deleted"});
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}

module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    updateTokenUser,
    deleteUser
}
