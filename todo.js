let addBtn = document.getElementById('add-item-btn');
const isDarkMode = localStorage.getItem('dark');
if (isDarkMode == 'true') {
    document.body.classList.add('dark-mode');
    document.getElementById('checkbox').setAttribute('checked', true);
}
//start dark mode functionality
const checkbox = document.getElementById('checkbox')
if (checkbox) {
    checkbox.addEventListener('click', checkMode)
}


function checkMode() {
    if (checkbox.checked) {
        localStorage.setItem('dark', 'true');
        document.body.classList.add('dark-mode')

    } else {
        localStorage.removeItem('dark')
        document.body.classList.remove('dark-mode')

    }
}
//finish dark mode functionality

/* Start Add Task Section */
// selectors 
const toDoinput = document.querySelector(".todo-input");
const toDobutton = document.querySelector(".todo-button");
const toDolist = document.querySelector(".todo-lists");
const updateBtn = document.querySelector(".update-btn");

// Events listener
toDobutton.addEventListener("click", addTodo , true);
document.addEventListener("DOMContentLoaded", getTodos);


// function 
function addTodo(e){
    e.preventDefault();
    if(toDoinput.value){
        //div
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo");
        
        // li 
        const NewTodo = document.createElement("li")
        NewTodo.textContent = toDoinput.value
    
        // the value we need to put inside the list 
        NewTodo.classList.add("todo-item");
        todoDiv.appendChild(NewTodo);
        saveTodolocally(toDoinput.value)
        // check button 
        const completedButton = document.createElement("button");
        completedButton.innerHTML = "<i class='fas fa-check'></i>";
        completedButton.classList.add("complete-btn");
        todoDiv.appendChild(completedButton);

        //update button
        const updateButton = document.createElement("button");
        updateButton.innerHTML = "<i class = 'fas fa-pen'></i>";
        updateButton.classList.add("update-btn");
        todoDiv.appendChild(updateButton);

        // Deleted button 
        const trashButton = document.createElement("button");
        trashButton.innerHTML = "<i class='far fa-trash-alt'></i>";
        trashButton.classList.add("trash-btn");
        todoDiv.appendChild(trashButton);
        trashButton.addEventListener("click" , checkNdelete);
    
        // uppend to list 
        toDolist.appendChild(todoDiv);
        // clear to do input value 
        toDoinput.value = null;
    }
    
}
 

function saveTodolocally(todo){
    let todos ;
    if(localStorage.getItem("todos") === null){
        todos = [];
    }
    else{
        todos = JSON.parse(localStorage.getItem("todos"))
    }
    todos.push(todo)
    // saving
    localStorage.setItem("todos" , JSON.stringify(todos));
}

function getTodos(){
    let todos ;
    if(localStorage.getItem("todos") === null){
        todos = [];
    }
    else{
        todos = JSON.parse(localStorage.getItem("todos"))
    }
    todos.forEach(
        function(todo){
        //div
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo");
        // li 
        const NewTodo = document.createElement("li");
        NewTodo.textContent = todo;
    
        // the value we need to put inside the list 
        NewTodo.classList.add("todo-item");
        todoDiv.appendChild(NewTodo);
        // check button 
        const completedButton = document.createElement("button");
        completedButton.innerHTML = "<i class='fas fa-check'></i>";
        completedButton.classList.add("complete-btn");
        todoDiv.appendChild(completedButton);

        //update button
        const updateButton = document.createElement("button");
        updateButton.innerHTML = "<i class = 'fas fa-pen'></i>";
        updateButton.classList.add("update-btn");
        todoDiv.appendChild(updateButton);

        // Deleted button 
        const trashButton = document.createElement("button");
        trashButton.innerHTML= "<i class='far fa-trash-alt'></i>";
        trashButton.classList.add("trash-btn");
        todoDiv.appendChild(trashButton);
        trashButton.addEventListener("click" , checkNdelete);
    
       // uppend to list 
        toDolist.appendChild(todoDiv);
    });
}
/* End Add Task Section */
/*start delet and checked*/
function checkNdelete(e) {
    // console.log(e.target)
    const item = e.target;
    //delete 
    if (item.classList[0] === "trash-btn"){
        const todo = item.parentElement;
        todo.remove();
        removelocal(todo);
    }
    // checkmark 
    if (item.classList[0] === "complete-btn"){
        const todo = item.parentElement;
        // toggle : checks the selected elements for visibility
        todo.classList.toggle("completed");
    }
}
/*end delet and checked*/
// remove from local storge
function removelocal(todo){
 
    let todos ;
    if(localStorage.getItem("todos") === null){
        todos = [];
    }
    else{
        todos = JSON.parse(localStorage.getItem("todos"))
    };

    const todoIndex = todo.children[0].innerText;

    todos.splice(todos.indexOf(todoIndex) , 1);
 
    localStorage.setItem("todos" , JSON.stringify(todos)); 

}
// end remove 

