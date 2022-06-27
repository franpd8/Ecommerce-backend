const express = require('express');
const router = express.Router();
const OrderController = require('../controllers/OrderController')
const { authentication, isAdmin, isManager, isUser } = require('../middlewares/authentication');


router.post('/createOrder',authentication, OrderController.create)
router.get('/getAll',authentication, OrderController.getAll)
router.get('/getById/:id',authentication, OrderController.getById)



module.exports = router;