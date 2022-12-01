import express from "express";
import User from '../models/UserModel.js'
import {
    // getUsers,
    getUserById,
    createUser,
    updateUser,
    updateTokenUser,
  
    // changePassword, forgotPassword, sendEmailLink,
    deleteUser
} from "../controllers/Users.js";
// import { updateTokenUser} from '../controllers/UsersReset.js'
// import { verifyUser,} from "../middleware/AuthUser.js";
import { verifyUser, adminOnly } from "../middleware/AuthUser.js";
import {  UsersBulkUpload} from '../UserBulkUpload.js'
const router = express.Router();






const getUsers = async(req, res) =>{
    try {
        const response = await User.findAll({
            attributes:['id','staffid', 'name','email', 'department', 'staffStatus', 'password','role', 'creator', 'ipAddress', 'location', 'createdTime', 'actionPerformed', 'updator', 'updatorIpAddress', 'updatorLocation', 'updatedTime', 'updatePerformed'],
        });

        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}


router.get('/users', verifyUser, adminOnly, getUsers, function(req, res, next){{
    res.json('users')
}});













// router.get('/users', verifyUser, adminOnly, getUsers);
router.get('/users/:id', verifyUser, adminOnly, getUserById);
router.post('/users', verifyUser, adminOnly, createUser);
router.post('/usersBulkUpload', UsersBulkUpload);
router.patch('/users/:id', verifyUser, adminOnly, updateUser);
router.patch('/usersUpdate/:token', updateTokenUser);
router.delete('/users/:id', verifyUser, adminOnly, deleteUser);

// send password link
// router.post('/sendpasswordlink', sendEmailLink);

// // check and verify user with id and token in react 
// router.get('/forgotpassword/:id/:token', forgotPassword);


// // add post request to send new password from react to backend
// router.post('/changepassword/:id/:token', changePassword);


router.get('/users',  );

























// router.get('/users/:id',   getUserById);
// router.post('/users',  createUser);
// router.patch('/users/:id',   updateUser);
// router.delete('/users/:id',   deleteUser);

export default router;