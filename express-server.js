const express=require("express");
const app= express();

//Routes
app.get("/",(req,res)=>{
    res.send("<h1>Welcome to the home page...</h1>");

});
app.listen("5000",()=>{
    console.log("server running on port 5000");
});


