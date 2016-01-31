var querystring	= require("querystring");

//Handler of request  to /
function home(response){
	console.log('Handler to / ');

	var body = '<html>'+
	    '<head>'+
	    '<meta http-equiv="Content-Type" content="text/html" charset="UTF-8" />'+
	    '</head>'+
	    '<body>'+
	    '<form action="/data" method="post">'+
	    '<textarea name="text" rows="20" cols="60"></textarea>'+
	    '<input type="submit" value="Enviar texto" />'+
	    '</form>'+
	    '</body>'+	
	    '</html>';

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();
}

/*
Function to send data of test
response [] : object to return 
*/
function data(response){
	var data = "estos son los datos ";

	response.writeHead(200, {"Content-Type": "text/html"});
	response.write(data);
    response.end();
}

exports.home = home;
exports.data = data;

