/*
 * Title: Handle Request Response
 * Description: Handle Resquest and response
 * Author: Naushad Karim
 *
 */

// dependencies
const url = require('url');
const { StringDecoder } = require('string_decoder');
const routes = require('../routes');
const { notFoundHandler } = require('../handlers/routeHandlers/notFoundHandlers');
const {parseJSON} = require('../helpers/utilities');

// module scaffolding
const handler = {};

handler.handleReqRes = (req, res) => {
    // request handling
    // get the url and parse it
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;
    const trimmedPath = path.replace(/^\/+|\/+$/g, '');
    const method = req.method.toLowerCase();
    const queryStringObject = parsedUrl.query;
    const headersObject = req.headers;

    const requestProperties = {
        parsedUrl,
        path,
        trimmedPath,
        method,
        queryStringObject,
        headersObject,
    };

    const decoder = new StringDecoder('utf-8');
    let realData = '';

    const chosenHandler = routes[trimmedPath] ? routes[trimmedPath] : notFoundHandler;


    req.on('data', (buffer) => {
        realData += decoder.write(buffer);
    });

    req.on('end', () => {
        realData += decoder.end();

        // for accessing to the post get delete put method.
        requestProperties.body = parseJSON(realData);
        
        chosenHandler(requestProperties, (statusCode, payload) => {
            statusCode = typeof statusCode === 'number' ? statusCode : 500;
            payload = typeof payload === 'object' ? payload : {};
    
            const payloadString = JSON.stringify(payload);
    
            // return the final response
            res.setHeader('Content-type', 'application/json'); //json data pathano server e
            res.writeHead(statusCode);
            res.end(payloadString);
        });
        // response handle
        // res.end("Programmers");
    });
};

module.exports = handler;