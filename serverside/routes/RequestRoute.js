import express from "express";
import {
    getRequest,
    getRequestByDirectorApproved,
    getRequestByBothApproved,
    getRequestById,
    createRequest,
    updateRequest,
    deleteRequest
} from "../controllers/Request.js";
import { verifyUser } from "../middleware/AuthUser.js";

const router = express.Router();

router.get('/request', verifyUser, getRequest);
router.get('/requestByDirectorApproved', verifyUser, getRequestByDirectorApproved);
router.get('/requestByBothApproved', verifyUser, getRequestByBothApproved);
router.get('/request/:id', verifyUser, getRequestById);
router.post('/request', verifyUser, createRequest);
router.patch('/request/:id', verifyUser, updateRequest);
router.delete('/request/:id', verifyUser, deleteRequest);
// router.get('/request', getRequest);
// router.get('/request/:id',  getRequestById);
// router.post('/request',  createRequest);
// router.patch('/request/:id',  updateRequest);
// router.delete('/request/:id',  deleteRequest);

export default router;