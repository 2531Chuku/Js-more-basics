import {createServer} from 'node:http';

const hostName = '123.3.45';
const port = 404;

const server = createServer((req , res)=>{
  res.statusCode = 200;
  res.setHeader('Content-Type','Text/plain');
  res.end('percival');
});

server.listen(hostName,port,()=>{
  console.log(`server running http://${hostName}/${port}`);
});


// files , read , write 
const fs = require('node:fs');
fs.writeFile(()=>{})
fs.readFile(()=>{})