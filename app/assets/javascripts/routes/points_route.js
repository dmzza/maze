Maze.PointsIndexRoute = Ember.Route.extend({
	model: function() {
		return Maze.Point.find();
	}
});