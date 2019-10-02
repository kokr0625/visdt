const router = require('express').Router();
const User = require('../model/user.js');

router.get('/',(req,res,next) => {
    User.find(function(err,users){
        if(err) return next(err);
        res.json(users);

    });
   
});

module.exports = router;