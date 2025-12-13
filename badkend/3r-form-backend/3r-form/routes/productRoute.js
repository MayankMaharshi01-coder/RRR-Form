const express = require('express');
const productRoute = express.Router();
const productController = require('../controllers/productController');


productRoute.post('/product', productController.postProduct);
productRoute.get('/allProducts', productController.getAllProducts);
productRoute.get('/product/:id', productController.getProduct);
productRoute.get('/school/:schoolId/products', productController.getSchoolProducts)
productRoute.get('/product/search', productController.getProductSearch);
productRoute.put('/product/:id', productController.postEditProduct);
module.exports = productRoute;
