const express = require('express');
const router = express.Router();

// Writing a route
router.get('/register',(req,res)=>{
    res.render('registration');
});

router.post('/register',(req,res)=>{
    console.log(req.body);
    res.send('You have successfully been registered');
});

module.exports = router;