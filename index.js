/*  
  Title: Project initial File 
  Description: initial file to start the node server and workers
  Author: Naushad Karim
  Date: 
*/

// dependencies
const server = require('./lib/server');
const workers = require('./lib/worker');


// const http = require('http');
// const { handleReqRes } = require('./helpers/handleReqRes');
// const environment = require('./helpers/environments');
// const data = require('./lib/data');
// const { sendTwilioSms } = require('./helpers/notifications');

// app object - module scaffolding
const app = {};

app.init = () => {
  // start the server
  server.init()
  // start the workers
  workers.init();
}

app.init()

// export the app
module.exports = app;





// todo
// sendTwilioSms('+8801609902765', 'HelloNaushad', (err) => {
//   console.log(`this is the error`, err);
// })


// testing file system
// todo pore muche dibo
// data.create('test','newFile',
// {'name':'Bangladesh','language':'Bangla'}, (err)=>{
//   console.log(`error was`, err);
// });
// data.read('test','newFile',(err, data)=>{
//   console.log(err,data);
// });
// data.update('test','newFile',{'name':"england", 'language': 'english'},(err, data)=>{
//   console.log(err);
// });
// data.delete('test','newFile',(err)=>{
//   console.log(err);
// });

// create server
// app.createServer = () => {
//     const server = http.createServer(app.handleReqRes);
//     server.listen(environment.port, () => {
//         // console.log(`Environment variable is ${process.env.NODE_ENV}`)
//         console.log(`listening to port ${environment.port}`)
//     })
// }

// handle req and response
// app.handleReqRes = handleReqRes;

// start server
// app.createServer()