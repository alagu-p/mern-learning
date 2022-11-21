//http- hyper text transfer protocol

const http=require("http");
const server=http.createServer((req,res)=>{
    console.log("Node server");
    console.log(req.url);
    console.log(req.method);
    //Routes
    if(req.url ==="/"){
        res.setHeader("Content-Type","text/html")
        res.write("<h2>Home page ...<h2>");
        res.end();

    }
    if(req.url ==="/about"){
        res.setHeader("Content-Type","text/html")
        res.write("<h2>About page<h2>");
        res.end();

    }
        

});
server.listen("5000","localhost",()=>{
    console.log("server running on port 5000");
});  
// console.log(http);
//127.0.0.1 =localhost
