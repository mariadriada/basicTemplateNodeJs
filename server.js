var http	= require('http');
var url		= require('url');

function initServer(route, handle){
	function onRequest(request, respose){
		var pathname = url.parse(request.url).parse(request.url).pathname;
		console.log('request received...');

		//Routing
		route(handle, pathname, response);		
	}

	http.createServer(onRequest).listen('8089');
	console.log('Initialized server');
}

exports.initServer = initServer;