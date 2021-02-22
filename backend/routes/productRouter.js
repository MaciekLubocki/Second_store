var express = require('express');
var router = express.Router();

var productControls = require('../controls/productControl');

/* GET users listing. */
router.get('/', productControls.getAllProducts);
router.get('/:id', productControls.getProductById);
router.post('/add', productControls.addNewProducts);
router.put('/update/:id', productControls.updateProduct);
router.delete('/delete/:id', productControls.deleteProduct);

module.exports = router;
