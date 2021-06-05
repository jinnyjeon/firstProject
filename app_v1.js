const app = new Vue({
    el: '#app',
    data: {
		title: 'Vue.js With JinYoung!!!',
		newTodo: '',
		todos: [],
	},
    methods: {
		addTodo: function(){
			this.todos.push({
				title: this.newTodo,
				done: false,
			});
			this.newTodo = '';
		},
        
		removeTodo: function(todo) {
			const todoIdx = this.todos.indexOf(todo);
			this.todos.splice(todoIdx, 1);
		},
        
		allDone: function(){
			this.todos.forEach((todo) => {
				todo.done = true;
			});
		},
	},
});


/*
el : 뷰 영역지정
data : 변수
methods : 함수

*/