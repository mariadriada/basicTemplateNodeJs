function route (handle, pathname, response) {
	consle.log('To point routing'+pathname);

	// valid pathname ?
	if (typeof handle[pathname] === 'function'){
		//Run corresponding  manipulator 
		return handle[pathname](response);
	}
	else {
		console.log('404 Not fount manipulator to '+ pathname);
	}
}

exports.route = route;