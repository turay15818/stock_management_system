import User from "../models/UserModel.js";
import Stock from "../models/StockModel.js";

import argon2 from "argon2";

export const Login = async (req, res) => {
    const user = await User.findOne({
        where: {
            email: req.body.email,
            // role: req.body.admin, 
            // role: req.body.manager, 
            // role: req.body.director,
            // role: req.body.user,
        }
    });
  
   
    if (!user) return res.status(404).json({ msg: "User not found" });
    const match = await argon2.verify(user.password, req.body.password);
    if (!match) return res.status(400).json({ msg: "Wrong Password" });
    req.session.userId = user.uid;
    const uid = user.uid;
    const staffid = user.staffid;
    const name = user.name;
    const email = user.email;
    const role = user.role;
    res.status(200).json({ uid, staffid, name, email, role});
}

export const Me = async (req, res) => {
    if (!req.session.userId) {
        return res.status(401).json({ msg: "Please login to your account!" });
    }
    const user = await User.findOne({
        attributes: ['uid', 'staffid', 'name', 'email', 'role'],
        where: {
            uid: req.session.userId
        }
    });
  
    if (!user) return res.status(404).json({ msg: "User not found" });
    res.status(200).json(user);
}

export const logOut = (req, res) => {
    req.session.destroy((err) => {
        if (err) return res.status(400).json({ msg: "Can't log out" });
        res.status(200).json({ msg: "You have logged out" });
    });
}