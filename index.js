var server			= require("./server");
var router			= require("./router");
var requestHandler	= require("./requestHandler");

var handle = {};
handle["/"] = requestHandler.home;
handle["/home"] = requestHandler.home;
handle["/data"] = requestHandler.data

server.initServer(router.route, handle);
console.log('main');



