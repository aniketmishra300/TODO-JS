const clickable = document.getElementById("add-option");
clickable.addEventListener("click", ToggleTaskModal);

var boxIndex = -1; // global

// Task #1 : If item is entered , store it into an array of objects
Todos = [
 
];

// Todos is an Array that will store all Tasks.

renderItems();
function ToggleTaskModal() {
  const taskInput = document.getElementById("task-input");
  taskInput.value = "";
  // Acess the Element with the ID as "modal"
  const modal = document.getElementById("task-modal");
  // console.log(modal.style.display);
  if (modal.style.display === "block") {
    modal.style.display = "none";
  } else {
    modal.style.display = "block";
  }
  taskInput.focus();
}

function ToggleItemModal() {
  // Acess the Element with the ID as "modal"
  const modal = document.getElementById("item-modal");
  const itemInput = document.getElementById("item-input");
  itemInput.value = "";
  // console.log(modal.style.display);
  if (modal.style.display === "block") {
    modal.style.display = "none";
  } else {
    modal.style.display = "block";
  }
  itemInput.focus();
}

function removeValueAtIndex(index) {
  console.log("Index to remove : ", index);
  // removes the value at 'index' from Todos
  const left = Todos.slice(0, index); // values from  '0' to 'index-1'
  console.log("Left : ", left);

  const right = Todos.slice(Number(index) + 1, Todos.length);
  console.log("Right : ", right); // values from 'index+1' to Todos.length -1

  Todos = left.concat(right);
  console.log("Combined : ", Todos);
}

function addTask() {
  console.log("Add Task Called");
  const taskInput = document.getElementById("task-input");
  const newObj = { name: taskInput.value, items: [] };
  Todos.push(newObj);
  renderItems();
  ToggleTaskModal();
}

function addItem() {
  console.log("Add Item Called for Index : ", boxIndex);
  const itemInput = document.getElementById("item-input");
  console.log("Item input given : ", itemInput.value);
  const newItemObject = { name: itemInput.value, isCompleted: false };
  Todos[boxIndex].items.push(newItemObject);
  renderItems();
  ToggleItemModal();
}

// This Function displays all the data in athe Todos Array
function renderItems() {
  console.log("tODOS : ", Todos);
  var index = 0;
  // Each time the RenderItems Function is called , it will empty the taskcontainer
  const taskContainer = document.getElementById("taskContainer");
  taskContainer.innerHTML = "";

  for (var i = 0; i <= Todos.length - 1; i++) {
    var value = Todos[i];
    // each Taskcard will have an id equal to the value of the variable 'index'
    const taskCard = document.createElement("div");
    taskCard.classList.add("taskCard");
    taskCard.id = index;
    index++;

    const taskTitle = document.createElement("h2");
    taskTitle.classList.add("taskTitle");
    taskTitle.innerText = value.name;

    // add
    const addBtn = document.createElement("Button");
    addBtn.innerText = "Add";
    addBtn.addEventListener("click", () => {
      ToggleItemModal();
      boxIndex = addBtn.parentElement.id;
    });

    // del
    const delBtn = document.createElement("Button");
    delBtn.innerText = "Delete";
    delBtn.addEventListener("click", () => {
      // find the index of the element to be deleted from Todos Array
      const delIndex = delBtn.parentElement.id;
      removeValueAtIndex(delIndex);
      renderItems();
    });

    const itemList = document.createElement("ul");
    value.items.map((item) => {
      const item1 = document.createElement("li");
      item1.innerText = item.name;
      item1.addEventListener("click", () => {
        item.isCompleted = !item.isCompleted;
        renderItems();
      });
      if (item.isCompleted) {
        item1.style.textDecoration = "line-through";
      }
      itemList.appendChild(item1);
    });

    taskContainer.appendChild(taskCard);
    taskCard.appendChild(taskTitle);
    taskCard.appendChild(itemList);
    taskCard.appendChild(addBtn);
    taskCard.appendChild(delBtn);
  }
}
