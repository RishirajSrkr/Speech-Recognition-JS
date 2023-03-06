//selectors
const todoInput = document.querySelector('.todo-input')
const todoButton = document.querySelector('.todo-button')
const todoList = document.querySelector('.todo-list')

//event listeners

// when we click we want to do "addTodo"
todoButton.addEventListener('click', addTodo);
//so we will create the task "addTodo"

///deletecheck function will basically determine where are ww clicking, on the delete or check button.
todoList.addEventListener('click', deleteCheck);



//functions
function addTodo(event) {
    // prevent form from submitting/ prevent from refreshing
    event.preventDefault();

    //todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");

    //create li
    const newTodo = document.createElement('li');
    if (todoInput.value !== "") {
        newTodo.innerText = todoInput.value;

        newTodo.classList.add("todo-item");

        //adding this new created li to the div(todoDiv)
        todoDiv.appendChild(newTodo);

    }else{
        alert('Message cannot be empty!');
        return false;
    }


    //check mark button
    const completeButton = document.createElement('button');
    completeButton.innerHTML = '<i class="fa-solid fa-square-check"></i>';
    completeButton.classList.add("complete-btn");
    todoDiv.appendChild(completeButton);


    //check delete button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);


    //then add this div(todoDiv) to todo-list
    todoList.appendChild(todoDiv);

    //clear todo input value
    todoInput.value = "";

}

function deleteCheck(e) {
    //console.log(e.target), this will tell where we are clicking on, check or delete button

    const item = e.target;
    //delete todo
    if (item.classList[0] === "trash-btn") {
        //delete the parent of the item, so in this way the entire todo will get deleted, and not just the item(item is just a icon actually, either check or delete), we want to delete the entire todo(entire row) that belongs to that item.)
        const todo = item.parentElement;

        //before removing adding a animation
        todo.classList.add("fall");
        //but problem is, the remove statement will not wait for the animation to complete, it will instantly remove the todo once we hit delete. so we need to find a way such that the todo gets remove after the animation finishes.

        todo.addEventListener('transitionend', function () {
            todo.remove();
        });
    }
    if (item.classList[0] === "complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
        //we will style the completed class to show that the task has been completed.
    }



}

