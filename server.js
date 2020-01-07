let express = require('express');
let bodyParser = require('body-parser');
let cors = require('cors');
let mongooose = require('mongoose');
let accdetails = require('./config/db');
let path = require('path');
 
let app = express();
mongooose.connect(accdetails.dburl,{ useNewUrlParser: true , useUnifiedTopology : true},(err,success)=>{
if(err){
    console.log('error occured');
    console.log(err);

}else{
    console.log('db connected');
}

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true

}));
app.use(cors());
app.use('/myapp',express.static(path.join(__dirname,'public')));
app.use('/users',require('./router/users'));
app.listen(accdetails.port,(err,success)=>{
    if(err) throw err;
    else console.log('server is running in port 8080');

});
});
