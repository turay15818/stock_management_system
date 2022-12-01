const express = require ("express");
const { getList, createList } = require ("../controllers/List");
const { verifyUser } = require ("../middleware/AuthUser");

const ListRouter = express.Router();

ListRouter.get('/list', verifyUser, getList);
ListRouter.post('/list', createList);


module.exports = ListRouter;