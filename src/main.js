const todoItems = [];
const doneItems = [];

// Get HTML elements
const keyInput = document.getElementById("add-task");
const ulTodoItems = document.getElementById("todo-tasks");
const ulDoneItems = document.getElementById("done-tasks");

keyInput.addEventListener("keypress", (event) => {
  const keyValue = event.keyCode;

  if (keyValue === 13) {
    todoItems.push(keyInput.value);
    createItem(todoItems.slice(-1), todoItems.length - 1);
  }
});

const createItem = (item, index) => {
  // Create HTML elements
  const li = document.createElement("li");
  const input = document.createElement("input");
  const span = document.createElement("span");
  const button = document.createElement("button");

  // Add li item to ul
  ulTodoItems.append(li);

  // The next lines append the elements to li and set their attributes
  // Input
  li.append(input);
  input.setAttribute("type", "checkbox");
  input.setAttribute("name", "check-task");
  input.setAttribute("id", index);

  // Span
  li.append(span);
  span.setAttribute("class", "task");
  span.innerHTML = item;

  // Button
  li.append(button);
  button.setAttribute("class", "delete-button");
};

const moveTaskToDone = () => {};

const deleteItem = () => {};
