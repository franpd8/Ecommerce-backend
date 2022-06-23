const express = require('express');
const app = express();
const port = 8080;
const cors = require ('cors') 
app.use(express.json());

app.use(cors())
const { typeError } = require('./middlewares/errors.js');
// const db = require('./config/config')

app.use('/users', require('./routes/users'));
app.use('/products', require('./routes/products'));
app.use('/orders', require('./routes/orders'));
app.use('/categories', require('./routes/categories'));

app.use(typeError);

 
app.listen(port, () => console.log(`Servidor levantado en puerto ${port}`));