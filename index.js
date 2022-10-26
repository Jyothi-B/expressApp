var express = require("express");
var app = express();

app.listen('8081', ()=>{
    console.log('app is listening on port 8081');
})

app.get('/', (request,response)=>{
    response.send('Hi, Welcome to my World!');
})

app.post('/', (request,response) => {
    response.send('Hi, This is a post request');
})

app.delete('/', (request,response) => {
    response.send('Hi, This is a delete request');
})

app.patch('/', (request,response) => {
    response.send('Hi, This is a patch request');
})

app.put('/', (request,response) => {
    response.send('Hi, This is a put request');
})

app.copy('/', (request,response) => {
    response.send('Hi, This is a copy request');
})

app.head('/', (request,response) => {
    response.send('Hi, This is a head request');
})

app.options('/', (request,response) => {
    response.send('Hi, This is a options request');
})

app.link('/', (request,response) => {
    response.send('Hi, This is a link request');
})

app.unlink('/', (request,response) => {
    response.send('Hi, This is an unlink  request');
})

app.purge('/', (request,response) => {
    response.send('Hi, This is a purge request');
})

app.lock('/', (request,response) => {
    response.send('Hi, This is a lock request');
})

app.unlock('/', (request,response) => {
    response.send('Hi, This is an unlock  request');
})

app.propfind('/', (request,response) => {
    response.send('Hi, This is a propfind request');
})
