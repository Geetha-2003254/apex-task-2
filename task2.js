function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const formMessage = document.getElementById('formMessage');

    if (name === "" || email === "" || message === "") {
        formMessage.textContent = "All fields are required.";
        return false;
    }
    formMessage.textContent = "Thank you for your message!";
    return true;
}

function addTask() {
    const todoInput = document.getElementById('todoInput');
    const todoList = document.getElementById('todoList');
    const taskText = todoInput.value;

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    const li = document.createElement('li');
    li.textContent = taskText;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function() {
        todoList.removeChild(li);
    };

    li.appendChild(deleteButton);
    todoList.appendChild(li);
    todoInput.value = "";
}