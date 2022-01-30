// utility functions to get the elements
const getMsg = () => document.getElementById("empty-todo-msg");
const getToDos = () => document.getElementById("todos");
const getToDoButton = () => document.getElementById("create-todo");

/**
 * Show empty message in the DOM, when there is no todo in the list
 */
function showEmptyMsg() {
  const msg = getMsg();
  msg.style.display = "block";
}

/**
 * Hide empty message from DOM, where there is atleast one todo in the list
 */
function hideEmptyMsg() {
  const msg = getMsg();
  msg.style.display = "none";
}

/**
 * Get a todo string and create a new todo  in the list
 * @param {String} todo new todo
 */
function addToDo(todo) {
  const todoList = getToDos();
  const newToDo = document.createElement("li");
  newToDo.innerText = todo;
  todoList.appendChild(newToDo);
}

/**
 * This function will take input from user and creates a todo
 */
function createToDo() {
  const todo = prompt("Enter your todo");

  // in case user pressed cancel
  if (!todo) return;

  addToDo(todo);
  hideEmptyMsg();
}

/**
 * This function will be called when the page will load for the first time.
 */
function init() {
  const todoButton = getToDoButton();
  todoButton.addEventListener("click", createToDo);
}
