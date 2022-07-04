/*  
  Title: server file
  Description: server related files
  Author: Naushad Karim
  Date: 
*/

// dependencies
const http = require('http');
const { handleReqRes } = require('../helpers/handleReqRes');
const environment = require('../helpers/environments');

// server object - module scaffolding
const server = {};


// configuration
server.config = {}

// create server
server.createServer = () => {
    const createServerVariable = http.createServer(server.handleReqRes);
    createServerVariable.listen(environment.port, () => {
        // console.log(`Environment variable is ${process.env.NODE_ENV}`)
        console.log(`listening to port ${environment.port}`)
    });
}

// handle req and response
server.handleReqRes = handleReqRes;

// start server
server.init = () => {
    server.createServer();
}

// export
module.exports = server;