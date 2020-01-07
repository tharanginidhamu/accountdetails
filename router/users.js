var express = require('express');
var Router = express.Router();
var user =require('../model/userdata');


Router.post('/user',function(req,res){
    var newuser=new user();
    console.log("req.body.username",req.body.username)
    newuser.username=req.body.username;
    newuser.userid=req.body.userid;
    newuser.password=req.body.password;
    newuser.organisationname=req.body.organisationname;
    newuser.email=req.body.email;
    newuser.phone=req.body.phone;
    newuser.address=req.body.address;
    newuser.reportingid=req.body.reportingid;

    newuser.save(function(err,user){
         if(err){
             res.send(err);

         }else{
             res.send(user);
         }
     });
    });
Router.get('/getdata',function(req,res){
    console.log(req.query);
    var newuser = new user(req.query);
    newuser.save(function(err,user){
        if(err){
            res.send(err);
        }else{
            res.send(user);
        }
    });
});
module.exports=Router;
