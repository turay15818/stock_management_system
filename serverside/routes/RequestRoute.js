import express from "express";
import {
    getRequest,
    getRequestByDirectorApproved,
    getRequestByBothApproved,
    getPendingRequest,
    getRejectedRequest,
    getManagerRequest,
    getRequestByDirectorReject,
    getDirectorPendingRequest,
    getAdminRequest,
    getRequestById,
    createRequest,
    updateRequest,
    deleteRequest,



    // user Route Setting Start here
    getManagerRequestApproved,
    getManagerRequestPending,
    getManagerRequestRejected,
    getDirectorRequestPending,
    getDirectorRequestRejected,
    // User Routing End Here







} from "../controllers/Request.js";
import { verifyUser } from "../middleware/AuthUser.js";

const router = express.Router();

router.get('/request', verifyUser, getRequest);
router.get('/requestByDirectorApproved', verifyUser, getRequestByDirectorApproved);
router.get('/requestByBothApproved', verifyUser, getRequestByBothApproved);
router.get('/rejectedRequest', verifyUser, getRejectedRequest);
router.get('/managerRequest', verifyUser, getManagerRequest);
router.get('/adminRequest', verifyUser, getAdminRequest);
router.get('/request/:id', verifyUser, getRequestById);
router.get('/pendingRequest', verifyUser, getPendingRequest);
router.get('/requestByDirectorReject', verifyUser, getRequestByDirectorReject);
router.get('/directorPendingRequest', verifyUser, getDirectorPendingRequest);
router.post('/request', verifyUser, createRequest);
router.patch('/request/:id', verifyUser, updateRequest);
router.delete('/request/:id', verifyUser, deleteRequest);


// For user Start Here
router.get('/managerRequestApproved', verifyUser, getManagerRequestApproved);
router.get('/managerRequestPending', verifyUser, getManagerRequestPending);
router.get('/managerRequestRejected', verifyUser, getManagerRequestRejected);
router.get('/DirectorRequestPending', verifyUser, getDirectorRequestPending);
router.get('/directorRequestRejected', verifyUser, getDirectorRequestRejected);
// For User End Here





// router.get('/request', getRequest);
// router.get('/request/:id',  getRequestById);
// router.post('/request',  createRequest);
// router.patch('/request/:id',  updateRequest);
// router.delete('/request/:id',  deleteRequest);

export default router;