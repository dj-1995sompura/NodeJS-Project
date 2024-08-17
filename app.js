require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();

// call controller
const productController = require('./src/controllers/productController');

app.set('view engine', 'ejs'); // set the view engine

app.set('views',path.join(__dirname, 'src', 'views'));

// use middleware
app.use(express.static(path.join(__dirname, "public", "assets")));

app.get('/', productController);

const PORT = process.env.PORT || 8000
app.listen(PORT,()=>{
    console.log("server run successfully!!");
})

