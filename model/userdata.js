let mongoose=require('mongoose');
let Schema=mongoose.Schema;
let userSchema=new Schema(
    {
    username: {type: String},
    userid: {type:String,required:true,unique:true,index:true},
    password:{type:String,required:true,index:true},
    organisationname: {type:String,required:true,index:true},
    email: {type:String,required:true,index:true},
    phone: {type:Number,required:true,index:true},
    address: {type:String},
    reportingid:{type:String,required:true,index:true}
    
    });
module.exports= mongoose.model('user',userSchema);