/*
 title: not found Handler
 description: not found Handler
 Author: Naushad Karim
 *
 *
 * 
 * 
 */

//  module scaffolding
const handler = {};

handler.notFoundHandler = (requestProperties, callback) => {
   // console.log(requestProperties);
   callback(404, {
      message: "Your requested properties not found",
   });
};

module.exports = handler;