Maze.Router.map(function() {
	this.resource('points', { path: '/' }, function() {
		this.route('index');
	});
});
