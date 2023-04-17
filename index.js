
const express=require('express');
const path=require('path');
const PORT=8084;
const app=express();
app.set('view engine','ejs')
app.set('Views',path.join(__dirname,'Views'))
app.get('/',function(req,res){
     return res.send('<h1>hello every one</h1>');
})
app.get('/contact',function(req,res){
    return res.send('<h1>contacted me!</h1>');
})
app.get('/dept',function(req,res){
    return res.send('<h1>want dept?</h1>');
})
app.get('/numbers',function(req,res){
   // res.send('<h1>the numbers are below</h1>');
     res.render('num')
})
app.listen(PORT,function(err){
    if(err){
        console.log('oops!');
        return;
    }
    console.log('server running on the port',PORT);
});
