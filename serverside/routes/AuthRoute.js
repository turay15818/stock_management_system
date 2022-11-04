import express from "express";
import {Login, logOut, Me, LoginEmail, LoginPassword} from "../controllers/Auth.js";

const router = express.Router();

router.get('/me', Me);
router.post('/login', Login);
router.post('/loginEmail', LoginEmail);
router.post('/loginPassword', LoginPassword);
router.delete('/logout', logOut);

export default router;