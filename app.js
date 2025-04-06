const express = require('express');
const productRoutes = require('./routes/product.routes');
const errorHandler = require('./middlewares/errorHandler');

const app = express();


console.log("----------------")
console.log(typeof(app))

app.use(express.json());
app.use('/api/products', productRoutes);
app.use(errorHandler);

module.exports = app;