const http = require("http");
const port = 5500;
const toDoList = ['Harsh','Kumar','Yadav'];
http.createServer((request,response)=>{
    const {method,url}=request;
    if(url === '/'){
        if(method === 'GET'){
            // response.setHeader('Content-Type', 'text/html');
            response.writeHead(200,{"Content-Type":"text/html"});
            // response.write("<h1> Hello Harsh, Server is started again </h1>");
            response.write(toDoList.toString());
            response.end();
        }
        else if(method === 'POST'){
            let body = "";
            request.on('error',(err)=>{
                console.log(err);
            }).on('data',(chunk)=>{
                body+=chunk;
            }).end('end',()=>{
                body = JSON.parse(body);
                console.log("Complete Data: ",body);
            })
        }
    }
})
.listen(port,()=>{
    console.log(`Nodejs server is started on port ${port}`);
});

// ways to start the server
// node server.js
// npm run start
//    or
//  npm start 
// local - npm run customServerName(in the package.json) // run keyword always required because the file name is custom.

// installing nodemon package (npm i nodemon)- it removes the start and stop of thr server again and again to see the save changes.