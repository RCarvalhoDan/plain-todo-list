const todoItems = [];
const doneItems = [];

// Create dynamic HTML elements
const li = document.createElement("li");
const input = document.createElement("input");
const span = document.createElement("span");
const button = document.createElement("button");

// Get static HTML elements
const keyInput = document.getElementById("add-item");
const ulTodoItems = document.getElementById("todo-items");
const ulDoneItems = document.getElementById("done-items");

keyInput.addEventListener("keypress", (event) => {
  const keyValue = event.keyCode;

  if (keyValue === 13) {
    todoItems.push(keyInput.value);
    createItem();
  }
});

const createItem = () => {
  // Add li item to ul
  ulTodoItems.append(li);

  // The next lines append the elements to li and set their attributes
  // Input
  li.append(input);
  const itemIdNumber = todoItems.length;
  input.setAttribute("type", "checkbox");
  input.setAttribute("name", "item");
  input.setAttribute("id", itemIdNumber);

  // Span
  li.append(span);
  span.innerHTML = todoItems[todoItems.length - 1];

  // Button
  li.append(button);
  button.setAttribute("class", "delete-button");
};

const deleteItem = () => {};
