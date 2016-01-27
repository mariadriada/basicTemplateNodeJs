var server			= require("./server");
var router			= require("./router");
var requestHandler	= require("./requestHandler");

var handle = {};
handle["/"] = requestHandler.home;
handle["/home"] = requestHandler.home;

server.initServer(router.route, handle);
console.log('main');



