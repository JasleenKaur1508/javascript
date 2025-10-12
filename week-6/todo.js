//[1] get todo list
//[2] get data from input box and store it in a variable
//[3] crate list item with todo_text
//[4] append into todo list

const todo_list = document.querySelector('.todo-list')
const input_box = document.querySelector('.todo-input')


   var todos=[]

function addTodo()
{
	var todo_text= input_box.value
	todos.push(todo_text)
	display()

}

function display(){
	todo_list.innerHTML =""
	todos.forEach(function(t,i){
		const todo = document.createElement('li')
		console.info(todo.attributes)
		todo.textContent = t
		const delBtn= document.createElement('button');
		delBtn.textContent ="delete"
	
		const editBtn= document.createElement('button');
		editBtn.textContent="EDIT"

        delBtn.onclick = function(){
		todos.splice(i,1);
		display();
          	};
	editBtn.onclick = function(){
			


		todo.appendChild(delBtn)
		todo.appendChild(editBtn)
		todo_list.appendChild(todo)
		
	
	});
}

display()