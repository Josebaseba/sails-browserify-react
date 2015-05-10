var socketIO = require('./dependencies/socket.io');
var io = require('./dependencies/sails.io')(socketIO);

console.log(io.socket);
console.log('IO Loaded!!');