const express = require('express');
const path = require('path');
const PORT=8082;
const app=express();
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded());
const studentData=[
    {name:'sivaraju',rollno:'20501a0521',dept:'CSE'},
    {name:'krishnakarthik',rollno:'20501a0549',dept:'IT'},
    {name:'krishnareddy',rollno:'20501a0591',dept:'ECE'}
]
app.get('/',function(req,res){
    return res.send('<h1>I am in Home page</h1>');
});
app.get('/data',function(req,res){
    return res.render('ok',{title:'studentData',std_data:studentData});
});
app.post('/add-data',function(req,res){
    console.log(req.body);
    console.log(req.body.fullname);
    console.log(req.body.rollno);
    studentData.push({name:req.body.fullname,rollno:req.body.rollno});
    return res.redirect('/data');
});
app.get('/delete-contact/:rollno', function(req, res) {
    let p = req.params.rollno;
    let i = studentData.findIndex(contact => contact.rollno == p);
    if (i != -1)
        studentData.splice(i, 1);
    res.redirect('back');
});
app.listen(PORT,function(err){
    if(err){
        console.log("Server is not running");
        return;
    }
    console.log("Server is up and running on port : ",PORT);
});
