const http = require('http')
const routes = require('./routes')

//FIRST WAY
//const server=http.createServer(routes);

//SECOND WAY
console.log(routes.sometext)
const server=http.createServer(routes.handler);
server.listen(4000);