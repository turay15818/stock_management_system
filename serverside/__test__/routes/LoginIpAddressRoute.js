const express = require ("express");
const {
    getLoginIpAddress,
    getLoginIpAddressById,
    createLoginIpAddress

} = require ("../controllers/LoginIpAddress");
const { verifyUser } = require ("../middleware/AuthUser");

const router = express.Router();
router.get('/loginIpAddress', verifyUser, getLoginIpAddress);
router.get('/loginIpAddress/:id', verifyUser, getLoginIpAddressById);
router.post('/loginIpAddress', createLoginIpAddress);

module.exports = router;