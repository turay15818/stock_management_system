const express = require ("express");
const {getUsers,getUserById,createUser,updateUser,updateTokenUser,deleteUser} = require ("../controllers/Users");
const { verifyUser, adminOnly } = require ("../middleware/AuthUser");
const {  UsersBulkUpload} = require ('../UserBulkUpload')

const router = express.Router();

router.get('/users', getUsers);
router.get('/users/:id', getUserById);
router.post('/users', createUser);
router.post('/usersBulkUpload',verifyUser, adminOnly, UsersBulkUpload);
router.patch('/users/:id',  updateUser);
router.patch('/usersUpdate/:token', updateTokenUser);
router.delete('/users/:id', deleteUser);


module.exports = router;