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
        
        //update button
        const updateButton = document.createElement("button");
        updateButton.innerHTML = "<i class = 'fas fa-pen'></i>";
        updateButton.classList.add("update-btn");
        todoDiv.appendChild(updateButton);
        updateButton.addEventListener("click" , updatefun);

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
        
        //update button
        const updateButton = document.createElement("button");
        updateButton.innerHTML = "<i class = 'fas fa-pen'></i>";
        updateButton.classList.add("update-btn");
        todoDiv.appendChild(updateButton);
        updateButton.addEventListener("click" , updatefun);
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
    const item = e.target;
    //delete 
    if (item.classList[0] === "trash-btn"){
        const todo = item.parentElement;
        todo.remove();
        removelocal(todo);
    }
    
}
/*end delet and checked*/
// edit
let item; 
function updatefun(e){
    item = e.target.parentNode.parentNode.textContent
    console.log(item)
    window.value = item
    // console.log(e.target.parentNode);
    e.target.parentNode.parentNode.setAttribute("contenteditable","true");
    let buttonCheck = document.createElement('button')
    buttonCheck.setAttribute("class","check");
    e.target.parentNode.parentNode.appendChild(buttonCheck);

    const newCheckBtn = document.createElement("i");
    newCheckBtn.setAttribute("class","fas fa-check");
    buttonCheck.appendChild(newCheckBtn)
    buttonCheck.setAttribute("onclick","updateitem(event)")

}
function updateitem(event){
    let todos ;
    if(localStorage.getItem("todos") === null){
        todos = [];
    }
    else{
        todos = JSON.parse(localStorage.getItem("todos"))
    };
    event.target.parentNode.parentNode.setAttribute("contenteditable","false")
    toDoinput.value =  event.target.parentNode.firstChild.textContent
    
    console.log( event.target.parentNode.firstChild.textContent)
    let index= todos.indexOf(item)
    todos.splice(index,1,toDoinput.value)
    localStorage.setItem("todos",JSON.stringify(todos))
    toDoinput.value=" "
    event.target.remove()
    }
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

