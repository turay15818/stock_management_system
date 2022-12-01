const express= require ("express");

const {Login, logOut, Me} = require ("../controllers/Auth");

const router = express.Router();


// let routes = (app) => {

router.get('/me', Me);
router.post('/login', Login);
router.delete('/logout', logOut);


// app.use("/login", router)
// }

module.exports = router;