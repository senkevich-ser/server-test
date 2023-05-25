const http = require('http'); 
const{PORT=3000}=process.env;

const server = http.createServer((req,res)=>{
    res.statusCode = 200; 
  res.statusMessage = 'OK'; 
  res.setHeader('Content-Type', 'text/plain'); 


  res.end('<h1>Hello,world!</h1>', 'utf8'); 
});

server.listen(PORT,()=>{
  console.log(`Server is started on ${PORT} port`)
})