const express=require("express");
const app= express();

//Routes
app.get("/",(req,res)=>{
    res.send("<h1>Welcome to the home page...</h1>");

});
app.get("/about",(req,res)=>{
    res.send("<h1>Welcome to the about page...</h1>");

});
app.get("/mani",(req,res)=>{
    res.send("<h1>Welcome to the mani page...</h1>");

});

app.get("/alagu",(req,res)=>{
    res.send("<h1>Welcome to the alagu page...</h1>");

});

app.get("/sir",(req,res)=>{
    res.send("<h1>Welcome to the sir page...</h1>");

});


app.listen("5000",()=>{
    console.log("server running on port 5000");
});


