import User from "../models/UserModel.js";
import argon2 from "argon2";

export const Login = async (req, res) => {

    const user = await User.findOne({
        where: {
            email: req.body.email,
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
    const department = user.department;
    const staffStatus = user.staffStatus;
    res.status(200).json({ uid, staffid, name, email, department, staffStatus, role });




}


export const LoginEmail = async (req, res) => {
    const user = await User.findOne({
        where: {
            staffid: req.body.staffid,
        }
    });


    if (!user) return res.status(404).json({ msg: "Staff ID Not Correct" });
    req.session.userId = user.uid;
    const uid = user.uid;
    const staffid = user.staffid;
    const name = user.name;
    const email = user.email;
    const department = user.department;
    const staffStatus = user.staffStatus;
    const role = user.role;
    res.status(200).json({ uid, staffid, name, email, department, staffStatus, role });

}



export const LoginPassword = async (req, res) => {
    const user = await User.findOne({
        attributes: ['uid', 'staffid', 'name', 'email', 'role'],
        where: {
            staff: req.body.email,
        },
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
    const department = user.department;
    const staffStatus = user.staffStatus;
    res.status(200).json({ uid, staffid, name, email, department, staffStatus, role });






}









export const Me = async (req, res) => {
    if (!req.session.userId) {
        return res.status(401).json({ msg: "Please login to your account!" });
    }
    const user = await User.findOne({
        attributes: ['uid', 'staffid', 'name', 'email', 'department', 'staffStatus', 'role'],
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











export const LoginPPassword =   async (req, res) => {
    const { email } = req.body;
    try {
      const oldUser = await User.findOne({ email });
      if (!oldUser) {
        return res.json({ status: "User Not Exists!!" });
      }
      const secret = JWT_SECRET + oldUser.password;
      const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, secret, {
        expiresIn: "5m",
      });
      const link = `http://localhost:5000/reset-password/${oldUser._id}/${token}`;
      var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "adarsh438tcsckandivali@gmail.com",
          pass: "rmdklolcsmswvyfw",
        },
      });
  
      var mailOptions = {
        from: "youremail@gmail.com",
        to: "thedebugarena@gmail.com",
        subject: "Password Reset",
        text: link,
      };
  
      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log("Email sent: " + info.response);
        }
      });
      console.log(link);
    } catch (error) {}
  }
  
  export const LoginPPPassword =  async (req, res) => {
    const { id, token } = req.params;
    console.log(req.params);
    const oldUser = await User.findOne({ _id: id });
    if (!oldUser) {
      return res.json({ status: "User Not Exists!!" });
    }
    const secret = JWT_SECRET + oldUser.password;
    try {
      const verify = jwt.verify(token, secret);
      res.render("index", { email: verify.email, status: "Not Verified" });
    } catch (error) {
      console.log(error);
      res.send("Not Verified");
    }
  };
  
  export const LoginPaassword = async  (req, res) => {
    const { id, token } = req.params;
    const { password } = req.body;
  
    const oldUser = await User.findOne({ _id: id });
    if (!oldUser) {
      return res.json({ status: "User Not Exists!!" });
    }
    const secret = JWT_SECRET + oldUser.password;
    try {
      const verify = jwt.verify(token, secret);
      const encryptedPassword = await bcrypt.hash(password, 10);
      await User.updateOne(
        {
          _id: id,
        },
        {
          $set: {
            password: encryptedPassword,
          },
        }
      );
      
  
      res.render("index", { email: verify.email, status: "verified" });
    } catch (error) {
      console.log(error);
      res.json({ status: "Something Went Wrong" })
    }}
