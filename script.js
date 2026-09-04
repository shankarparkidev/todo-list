const todoInput = document.getElementById("todoInput");
const addTodoButton = document.getElementById("addTodoButton");
const todoList = document.getElementById("todoList");

function addTodo() {
  const todoText = todoInput.value.trim();

  if (todoText === "") {
    alert("Please enter a task");
    return;
  }

  const listItem = document.createElement("li");

  listItem.textContent = todoText;

  todoList.appendChild(listItem);

  todoInput.value = "";
}

addTodoButton.addEventListener("click", addTodo);