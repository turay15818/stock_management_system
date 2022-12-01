const express = require ("express");
const { verify } = require("jsonwebtoken");
const {
    getRequest,
    getRequestByDirectorApproved,
    getRequestByBothApproved,
    getPendingRequest,
    getRejectedRequest,
    getManagerRequest,
    getRequestDirectorPending,
    // getDirectorPendingRequest,
    getAdminRequest,
    getRequestById,
    createRequest,
    updateRequest,
    updateDirectorRequest,
    deleteRequest,



    // user Route Setting Start here
    getManagerRequestApproved,
    getManagerRequestPending,
    getManagerRequestRejected,
    getDirectorRequestPending,
    getRequestByDirector,
    // User Routing End Here



    // Director Request Router Start Here
    getDirectorRequestAll,
    getDirectorRequestPendingAll,
    getDirectorRequestRejectAll,
    // Director Request Router End Here





    // Manager Route Setting Start here
    getRequestByManagerReqApproved,
    getRequestByManagerReqPending,
    getRequestByManageRejected,
    getRequestDirectorReqPending,
    getRequestDirectorReqRejected,
    getManagerRequestAll
    // Manager Routing End Here



} = require ("../controllers/Request");
const { verifyUser } = require ("../middleware/AuthUser");

const router = express.Router();

router.get('/request',  getRequest);
router.get('/requestByDirectorApproved',  getRequestByDirectorApproved);
router.get('/requestByBothApproved',  getRequestByBothApproved);
router.get('/rejectedRequest',  getRejectedRequest);
router.get('/managerRequest',  getManagerRequest);
router.get('/adminRequest',  getAdminRequest);
router.get('/request/:id',  getRequestById);
router.get('/pendingRequest', getPendingRequest);
router.get('/requestDirectorPending',  getRequestDirectorPending);
// router.get('/directorPendingRequest', verifyUser, getDirectorPendingRequest);
router.post('/request',  createRequest);
router.patch('/request/:id',  updateRequest);
router.patch('/directorRequest/:id',  updateDirectorRequest);
router.delete('/request/:id',  deleteRequest);


// For user Start Here
router.get('/managerRequestApproved', verifyUser, getManagerRequestApproved);
router.get('/managerRequestPending', verifyUser, getManagerRequestPending);
router.get('/managerRequestRejected', verifyUser, getManagerRequestRejected);
router.get('/directorRequestPending', verifyUser, getDirectorRequestPending);
router.get('/requestByDirector', verifyUser, getRequestByDirector);
// For User End Here



// Director Request Router Start Here
router.get('/directorRequestAll', verifyUser, getDirectorRequestAll);
router.get('/directorRequestPendingAll', verifyUser, getDirectorRequestPendingAll);
router.get('/directorRequestRejectAll', verifyUser, getDirectorRequestRejectAll);
// Director Request Router End Here



// For user Start Here
router.get('/requestByManagerReqApproved', verifyUser, getRequestByManagerReqApproved);
router.get('/requestByManagerReqPending', verifyUser, getRequestByManagerReqPending);
router.get('/requestByManageRejected', verifyUser, getRequestByManageRejected);
router.get('/requestDirectorReqPending', verifyUser, getRequestDirectorReqPending);
router.get('/requestDirectorReqRejected', verifyUser, getRequestDirectorReqRejected);
router.get('/managerRequestAll', verifyUser, getManagerRequestAll);
// For User End Here




// router.get('/request', getRequest);
// router.get('/request/:id',  getRequestById);
// router.post('/request',  createRequest);
// router.patch('/request/:id',  updateRequest);
// router.delete('/request/:id',  deleteRequest);

module.exports = router;