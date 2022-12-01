const express = require ("express");
const { 
    getStock, getStockInUse, 
    getStockNotInUse, getStockId, 
    getAllStock,
    updateStock, getStockInUseId, 
    deleteStock
} = require ("../controllers/Stock");
const { verifyUser, adminOnly } = require ("../middleware/AuthUser");


const router = express.Router();

router.get('/stock',  getStock);
// router.post('/stock', verifyUser, adminOnly, saveStock);
router.get('/allStock',  getAllStock);
router.get('/stockInUse', getStockInUse);
router.get('/stockNotInUse',  getStockNotInUse);
router.get('/stock/:id',  getStockId);
router.get('/stock/:id',  getStockId);
router.get('/stockInUse/:id', getStockInUseId);
router.patch('/stock/:id', updateStock);
router.delete('/stock/:id',  deleteStock);


module.exports = router;