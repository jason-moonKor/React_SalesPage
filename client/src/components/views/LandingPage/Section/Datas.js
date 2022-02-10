const continents = [
	{
		_id: 1,
		name: "Africa"
	},
	{
		_id: 2,
		name: "Europe"
	},
	{
		_id: 3,
		name: "Asia"
	},
	{
		_id: 4,
		name: "North America"
	},
	{
		_id: 5,
		name: "South America"
	},
	{
		_id: 6,
		name: "Australia"
	},
	{
		_id: 7,
		name: "Antarctica"
	}
];

const price = [
	{
		_id: 0,
		name: "Any",
		array: []
	},
	{
		_id: 1,
		name: "0 ~ 20000원",
		array: [0, 20000]
	},
	{
		_id: 2,
		name: "20000 ~ 30000원",
		array: [20000, 30000]
	},
	{
		_id: 3,
		name: "30000 ~ 40000원",
		array: [30000, 40000]
	},
	{
		_id: 4,
		name: "40000 ~ 50000원",
		array: [40000, 50000]
	},
	{
		_id: 5,
		name: "50000 ~ 60000원",
		array: [50000, 60000]
	}
];

export {continents, price};
