Maze.Point = DS.Model.extend({
	x: DS.attr('number'),
	y: DS.attr('number'),
	northernPoint: DS.belongsTo('Maze.Point'),
	easternPoint: DS.belongsTo('Maze.Point'),
	southernPoint: DS.belongsTo('Maze.Point'),
	westernPoint: DS.belongsTo('Maze.Point'),
	isNewRow: function() {
		if(this.get('x') === 0)
			return true;
		else
			return false;
	}.property('x')
});

Maze.Point.FIXTURES = [
    {id: 1, x: 0, y: 0, northernPoint: null, easternPoint: 2, southernPoint: null, westernPoint: null},
    {id: 2, x: 1, y: 0, northernPoint: null, easternPoint: null, southernPoint: 4, westernPoint: 1},
    {id: 3, x: 2, y: 0, northernPoint: null, easternPoint: null, southernPoint: null, westernPoint: null},
    {id: 4, x: 3, y: 0, northernPoint: null, easternPoint: null, southernPoint: null, westernPoint: null},
    {id: 5, x: 4, y: 0, northernPoint: null, easternPoint: null, southernPoint: null, westernPoint: null},
    {id: 6, x: 0, y: 1, northernPoint: null, easternPoint: 7, southernPoint: null, westernPoint: null},
    {id: 7, x: 1, y: 1, northernPoint: 2, easternPoint: null, southernPoint: null, westernPoint: 6},
    {id: 8, x: 2, y: 1, northernPoint: null, easternPoint: null, southernPoint: null, westernPoint: null},
    {id: 9, x: 3, y: 1, northernPoint: null, easternPoint: null, southernPoint: null, westernPoint: null},
    {id: 10, x: 4, y: 1, northernPoint: null, easternPoint: null, southernPoint: null, westernPoint: null},
    {id: 11, x: 0, y: 2, northernPoint: null, easternPoint: null, southernPoint: null, westernPoint: null},
    {id: 12, x: 1, y: 2, northernPoint: null, easternPoint: null, southernPoint: null, westernPoint: null},
    {id: 13, x: 2, y: 2, northernPoint: null, easternPoint: null, southernPoint: null, westernPoint: null},
    {id: 14, x: 3, y: 2, northernPoint: null, easternPoint: null, southernPoint: null, westernPoint: null},
    {id: 15, x: 4, y: 2, northernPoint: null, easternPoint: null, southernPoint: null, westernPoint: null},
    {id: 16, x: 0, y: 3, northernPoint: null, easternPoint: null, southernPoint: null, westernPoint: null},
    {id: 17, x: 1, y: 3, northernPoint: null, easternPoint: null, southernPoint: null, westernPoint: null},
    {id: 18, x: 2, y: 3, northernPoint: null, easternPoint: null, southernPoint: null, westernPoint: null},
    {id: 19, x: 3, y: 3, northernPoint: null, easternPoint: null, southernPoint: null, westernPoint: null},
    {id: 20, x: 4, y: 3, northernPoint: null, easternPoint: null, southernPoint: null, westernPoint: null},
    {id: 21, x: 0, y: 4, northernPoint: null, easternPoint: null, southernPoint: null, westernPoint: null},
    {id: 22, x: 1, y: 4, northernPoint: null, easternPoint: null, southernPoint: null, westernPoint: null},
    {id: 23, x: 2, y: 4, northernPoint: null, easternPoint: null, southernPoint: null, westernPoint: null},
    {id: 24, x: 3, y: 4, northernPoint: null, easternPoint: null, southernPoint: null, westernPoint: null},
    {id: 25, x: 4, y: 4, northernPoint: null, easternPoint: null, southernPoint: null, westernPoint: null},
];

// Maze.Point = DS.Model.extend({

// });

// Maze.Point.FIXTURES = [
// 	{id: 1},
// 	{id: 2}
// ]