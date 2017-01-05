var express = require('express');
var router = express.Router();
var Task=require('../models/Student');
router.post('/',function(req,res,next){

        Task.addStudent(req.body,function(err,count){

            //console.log(req.body);
            if(err)
            {
                res.json(err);
            }
            else{
                    res.json(req.body);//or return count for 1 & 0
            }
        });
});

module.exports=router;