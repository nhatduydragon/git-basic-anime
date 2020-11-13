
/* setTimeout ( function() {
    alert(fullName);
 },1000);
 */
 // var myFunction = function(){
 //     alert('Fuck you');
 // }

 //myFunction();
// var array = [
// 	'Cowboy bebop',
// 	'Neon',
// 	'Monster',
// ];

// function cong(a,b){
// 	return a + b;
// }

// alert('Hello');

// var result = cong(7,3);

// console.log(result);

var army = [
	{
		id:'KBC001',
		capbac:'Trung uy',
		donvi:307,
		soTran:25
	},
	{
		id:'KBC002',
		capbac:'Trung uy',
		donvi:307,
		soTran:35
	},
	{
		id:'KBC003',
		capbac:'Thieu uy',
		donvi:307,
		soTran:17
	},
	{
		id:'KBC004',
		capbac:'Thuong uy',
		donvi:307,
		soTran:30
	},
];


var newcourses = army.map(function(course){
	// console.log(course);
	return {
		id:course.id,
		capbac:course.capbac,
		donvi: `Trung doi: ${course.donvi}`,
		soTran:course.soTran,
	}
});

//console.log(newcourses);

var totalWar = army.reduce(function coinWar(total,current){
	//console.log(current.soTran);
	return total + current.soTran;
},0);

//console.log(totalWar);

var numbers = [1,2,3,4,5,6,7,8,9];

var totalNumber = numbers.reduce(function(total,element_i){
	return total + element_i;
},0);

//console.log(totalNumber);

var topic = [
	{
		topic:"Front-end",
		courses:[
			{
				id: 1,
				title:"HTML,CSS",
			},
			{
				id: 2,
				title:"JAVASCRTIPT",
			},
		]
	},
	{
		topic:"Back-end",
		courses:[
			{
				id: 1,
				title:"PHP",
			},
			{
				id: 2,
				title:"NODEJS",
			},
		]
	}
];

var arrCourses = topic.reduce(function(course,element_i){
	return course.concat(element_i.courses);
},[]);

//console.log(arrCourses);

var filterCourses = army.filter(function(course){
	return course.soTran > 20;
});

//console.log(filterCourses);

var headingElement = document.querySelector('.box');

headingElement.innerHTML = '<h1>Stein;Gate</h1>'

Object.assign(headingElement.style,{
	color: 'blue'
});