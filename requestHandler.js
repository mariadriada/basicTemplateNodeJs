var querystring	= require("querystring");

//Handler of request  to /
function home(request){
	console.log('Handler to / ');

	response.writeHead(200, {"Content-Type": "text/html"});
	response.write("Handler to / ");
	response.end();
}

exports.home = home;

