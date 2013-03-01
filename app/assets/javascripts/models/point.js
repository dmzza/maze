Maze.Point = DS.Model.extend({
	northernPoint: DS.belongsTo('Maze.Point'),
	easternPoint: DS.belongsTo('Maze.Point'),
	southernPoint: DS.belongsTo('Maze.Point'),
	westernPoint: DS.belongsTo('Maze.Point')
});

Maze.Point.FIXTURES = [
    {id: 1, northernPoint: null, easternPoint: 2, southernPoint: null, westernPoint: null},
    {id: 2, northernPoint: null, easternPoint: null, southernPoint: 4, westernPoint: 1},
    {id: 3, northernPoint: null, easternPoint: 4, southernPoint: null, westernPoint: null},
    {id: 4, northernPoint: 2, easternPoint: null, southernPoint: null, westernPoint: 3},
];

// Maze.Point = DS.Model.extend({

// });

// Maze.Point.FIXTURES = [
// 	{id: 1},
// 	{id: 2}
// ]