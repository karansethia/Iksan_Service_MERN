const express = require('express');

const router = express.Router();
router.get('/',(req,res)=>{
    res.send('This is auth endpoint')
})
router.get('/register',(req,res)=>{
    res.send('This is auth register endpoint')
})

module.exports = router;