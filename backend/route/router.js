const express = require('express');
const Seequenzecontroller = require('../controller/Seequenzecontroller'); // Ensure this path is correct
const router = express.Router();

router.post('/inserttask', Seequenzecontroller.inserttask);
router.get('/gettasks', Seequenzecontroller.gettasks); 
router.put('/updatetask/:id', Seequenzecontroller.updatetask); 
router.delete('/deletetask/:id', Seequenzecontroller.deletetask);

module.exports = router;
