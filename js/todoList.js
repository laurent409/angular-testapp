//js/todoList.js
'use strict';


/**
 * 	Application declaration : demoApp
 */
var demoApp = angular.module('demoApp', [
		
	//modules list dependencies(declaration)
	'todoList'
]);


/**
 * 	Module declaration : todoList
 */
var todoList = angular.module('todoList', []); //no dependencies


/**
 * 	Controller declaration : todoCtrl
 */
 var todoCtrl = todoList.controller('todoCtrl', ['$scope',

 	function($scope){

 		// Empty tab declaration for $scope.todos
 		var todos = $scope.todos = [];


		/**
		 * 	Adding a todo
		 */
		$scope.addTodo = function(){

			// Getting new todo
			// trim() is for delete unwanted spaces before and after word
			var newTodo = $scope.newTodo.trim();
			// console.log(newTodo);
			// Checking if the new todo is empty
			if (!newTodo.length)
				return;
			
			// Pushing the new todo into todos var (for more information, look the controller declaration part)
			todos.push({
				title: newTodo, //the name of the todo
				completed: false //the new todo isn't checked
			});
			
			// Putting the $scope.newTodo to empty for adding a new todo soon
			$scope.newTodo = '';
		};

		/**
		 *	Removing a todo
		 */
		 $scope.removeTodo = function(todo){
		 	todos.splice(todos.indexOf(todo),1);
		 };

		/**
		 *	Checking or not all todos
		 */
		 $scope.markAll = function(completed){
		 	todos.forEach(function(todo){
                todo.completed = completed;
		 	});
		 };


		/**
		 *	Removing all checked todos
		 */
		 $scope.clearCompleteTodos = function(){
		 	// $scope.todos = todos = todos.filter(function(todo){
		 	// 	return !todos.completed;
		 	// });
	 		$scope.todos = [];

		 }; 

		/**
		 *	Move up item 
		 */
 		 $scope.moveUp = function(todo){
		 	var indexCurrent = todos.indexOf(todo);
		 	var indexUp = todos.indexOf(todo)-1;
		 	if ( indexCurrent==0 ) {
		 		alert("This Todo is already the first in the Todo-List !");
		 	} 
		 	console.log("indexCurrent: "+indexCurrent);
		 	console.log("nameCurrent: "+todos.indexOf(todo).title);

		 	console.log("indexUpTodo: "+indexUp);
		 };	
		
		/**
		 *	Move down item
		 */
		 // $scope.moveDown = function(todo){
		 // 	var indexCurrent = todos.indexOf(todo);
		 // 	var indexDown = todos.indexOf(todo)+1;
		 // 	if ( indexCurrent==0 ) {
		 // 		alert("This Todo is already the first in the Todo-List !");
		 // 	} 
		 // 	console.log("indexCurrentTodo: "+indexCurrentTodo);
		 // 	console.log("indexUpTodo: "+indexUpTodo);
		 // };	
 	}

]);


