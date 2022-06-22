const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/ProductController');
const { authentication, isAdmin, isManager, isUser } = require('../middlewares/authentication');
const { upload } = require('../middlewares/multer');

router.post('/addProducts', ProductController.addProduct);
router.get('/getProducts', ProductController.getAll);
router.delete('/deleteProduct/id/:id', ProductController.delete);
router.get("/id/:id", ProductController.getById);
router.put('/:id', ProductController.update)
router.get("/search/name/:name", ProductController.getByName);
router.get("/search/price/:price", ProductController.getByPrice);
router.get('/getProductsOrdered', ProductController.getAllOrdered);
router.get('/getProductsOrderedASC', ProductController.getAllOrderedASC);

module.exports = router;