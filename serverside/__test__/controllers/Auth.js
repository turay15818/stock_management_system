const User = require ("../models/UserModel");
const argon2 = require ("argon2");



 const Login = async (req, res) => {
    const user = await User.findOne({
        where: {
            email: req.body.email,
        }
    });
    if (!user) return res.status(404).json({ msg: "User not found" });
    const match = await argon2.verify(user.password, req.body.password);
    if (!match) return res.status(400).json({ msg: "Wrong Password" });
    req.session.userId = user.id;
    const id = user.id;
    const staffid = user.staffid;
    const name = user.name;
    const email = user.email;
    const role = user.role;
    const department = user.department;
    const staffStatus = user.staffStatus;
    res.status(200).json({ id,staffid, name, email, department, staffStatus, role });
}

 const Me = async (req, res) => {
    if (!req.session.userId) {
        return res.status(401).json({ msg: "Please login to your account!" });
    }
    const user = await User.findOne({
        attributes: ['id', 'staffid', 'name', 'email', 'department', 'staffStatus', 'role'],
        where: {
            id: req.session.userId
        }
    });

    if (!user) return res.status(404).json({ msg: "User not found" });
    res.status(200).json(user);
}

 const logOut = (req, res) => {
    req.session.destroy((err) => {
        if (err) return res.status(400).json({ msg: "Can't log out" });
        res.status(200).json({ msg: "You have logged out" });
    });
}


module.exports={
    Login,
    Me,
    logOut
}