// call models
const productModel = require('../models/productModel');

const renderProducts = (req, res)=>{
    const products = productModel();
    console.log("test123",products);
    res.render('products',{products});
}

module.exports = renderProducts;