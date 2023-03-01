const express=require('express');
const bodyParser=require('body-parser');
const app=express();
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));
var val="";
var arr=[];
app.get('/',(req,res)=>{
  var today=new Date();
  var options={
    weekday:"long",
    day:"numeric",
    month:"long"
  }; 
  var day=today.toLocaleDateString("en-us",options);
  res.render("list",{kindOfDay:day,newListItems:arr});
})

app.post('/',(req,res)=>{
  val=req.body.newItem;
  arr.push(val);
  res.redirect('/');

})
app.listen(3000,()=>{
  console.log("Server is running at port 3000");
})
