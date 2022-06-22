const express = require('express');
const router = express.Router();
const CategoryController = require('../controllers/CategoryController')
const { authentication, isAdmin, isManager, isUser } = require('../middlewares/authentication');


router.post('/addCategory', authentication, CategoryController.addCategory);
router.get('/getCategoryById/:id',authentication, CategoryController.categoryById);
router.get('/getCategoryByName/:name',authentication, CategoryController.categoryByName);
router.get('/getCategory',authentication, CategoryController.getCategoryWithProducts); //Endpoint de generos con sus libros
router.get('/getAll',authentication, CategoryController.getAll); //Endpoint que trae todos los generos
router.delete('/deleteCategory/:id',authentication, CategoryController.delete); //Eliminar un genero





module.exports = router;