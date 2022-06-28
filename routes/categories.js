const express = require('express');
const router = express.Router();
const CategoryController = require('../controllers/CategoryController')
const { authentication, isAdmin, isManager, isUser } = require('../middlewares/authentication');


router.post('/addCategory',  CategoryController.addCategory);
router.get('/getCategoryById/:id', CategoryController.categoryById); //getProductByCategory
router.get('/getCategoryByName/:name', CategoryController.categoryByName);
router.get('/getCategory',CategoryController.getCategoryWithProducts); //Endpoint de generos con sus libros
router.get('/getAll', CategoryController.getAll); //Endpoint que trae todos los generos
router.delete('/deleteCategory/:id', CategoryController.delete); //Eliminar un genero





module.exports = router;