function updateCounters() {
  // Total number of todos
  console.log("Hello!")
  var totalCount = document.getElementById('total-count');
  var totalTodos = document.getElementsByClassName("todo").length;
  totalCount.innerHTML = totalTodos;

  // Total number of completed todos
  var completedCount = document.getElementById('completed-count');
  var completedTodos = document.getElementsByClassName("completed").length;
  completedCount.innerHTML = completedTodos;

  // Total number of uncompleted todos
  var todoCount = document.getElementById('todo-count');
  var uncompletedTodos = totalTodos - completedTodos;
  todoCount.innerHTML = uncompletedTodos;
}

function toggleDone() {
  var checkbox = this;

  // check the checked status of the checkbox
  if (checkbox.checked) {
    // the "completed" class is set on the parent element, the <li>
    checkbox.parentElement.className = "todo completed";
  } else {
    checkbox.parentElement.className = "todo";
  }

  updateCounters();
}

function submitToDo() {
  let inputField = document.getElementById('new-todo');
  let task = inputField.value;
  inputField.value = null;
  createToDo(task);
}

function createToDo(newTask) {
  if(!newTask) {
    return;
  }

  let list = document.getElementById("todolist");
  let taskNumber = nextTodoId();
  let newListItem = document.createElement('li');
  newListItem.className = 'todo';
  newListItem.innerHTML = `
  <input id="todo-${taskNumber}" type="checkbox" onchange="toggleDone.bind(this)()">
  <label for="todo-${taskNumber}">${newTask}</label>
  `;

  list.prepend(newListItem);
}

function nextTodoId() {
  return document.getElementsByClassName("todo").length + 1;
}

function cleanUpDoneTodos() {
  let completeds = document.getElementsByClassName('completed');
  var list = document.getElementById("todolist");
  for(var i = completeds.length; i > 0; i--) {
    list.removeChild(completeds[i - 1]);
  };
  updateCounters();
}
updateCounters();
