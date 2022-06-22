const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/ProductController');
const { authentication, isAdmin, isManager, isUser } = require('../middlewares/authentication');
const { upload } = require('../middlewares/multer');

router.post('/addProducts',authentication, isManager, upload.single('myFile'), ProductController.addProduct);
router.get('/getProducts', ProductController.getAll);
router.delete('/deleteProduct/id/:id',authentication, isManager, ProductController.delete);
router.get("/id/:id",authentication, isUser, ProductController.getById);
router.put('/:id',authentication, isAdmin, ProductController.update)
router.get("/search/name/:name",authentication, isUser, ProductController.getByName);
router.get("/search/price/:price",authentication, isUser, ProductController.getByPrice);
router.get('/getProductsOrdered',authentication, isUser, ProductController.getAllOrdered);

module.exports = router;