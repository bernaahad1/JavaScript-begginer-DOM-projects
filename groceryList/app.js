// ****SELECT ITEMS****
let items = document.querySelectorAll(".item");
const clearBtn = document.querySelector(".clear-items");
const listContainer = document.querySelector(".list-container");

const submitBtn = document.querySelector(".submit");
const submitForm = document.querySelector(".form-control");
const input = document.querySelector("input");
const alert = document.querySelector(".alert");

let editElement;
let editFlag = false;
let editId = "";

//******Clear Items*****/
clearBtn.addEventListener("click", function () {
  clearBtn.style.visibility = "hidden";
  const items = document.querySelectorAll(".item");
  if (items.length > 0) {
    items.forEach(function (item) {
      listContainer.removeChild(item);
    });
  }
  displayAlert("empty list", "danger");
  setBackToDefault();
  localStorage.removeItem("list");
});

//load items
window.addEventListener("DOMContentLoaded", setupItems);
// *****SUBMIT*****
submitForm.addEventListener("submit", addItem);

//*****add item*******
function addItem(e) {
  e.preventDefault();
  const item = input.value;
  const id = new Date().getTime().toString();

  if (item && !editFlag) {
    const result = `<section class="item" id=${id}>
          <p>${item}</p>
          <div class="btn-container">
            <button class="edit-btn"><i class="fas fa-edit"></i></button>
            <button class="delete-btn"><i class="fas fa-trash"></i></button>
          </div>
        </section>`;
    listContainer.innerHTML += result;

    const element = document.getElementById(id);
    // ****edit item****
    const deleteBtn = element.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", deleteItem);
    // ****delete item****
    const editBtn = element.querySelector(".edit-btn");
    editBtn.addEventListener("click", editItem);

    displayAlert("item added to the list", "success");
    clearBtn.style.visibility = "visible";
    // add to local storage
    addToLocalStorage(id, item);
    // set back to default
    setBackToDefault();
  } else if (item && editFlag) {
    editElement.innerHTML = item;
    displayAlert("value changed", "success");
    // edit local storage
    editLocalStorage(editId, item);
    setBackToDefault();
  } else {
    displayAlert("please enter value", "danger");
  }
}

// ****display alert****
function displayAlert(text, action) {
  alert.textContent = text;
  alert.classList.add(`alert-${action}`);

  // remove alert
  setTimeout(function () {
    alert.textContent = "";
    alert.classList.remove(`alert-${action}`);
  }, 1000);
}

// ****edit item****
function editItem(e) {
  const parentElement = e.currentTarget.parentElement.parentElement;
  editElement = e.currentTarget.parentElement.previousElementSibling;
  //set form value
  input.value = editElement.innerHTML;
  editFlag = true;
  editId = parentElement.dataset.id;
  submitBtn.textContent = "Edit";
}
// ****delete item****
function deleteItem(e) {
  const parentElement = e.currentTarget.parentElement.parentElement;
  listContainer.removeChild(parentElement);

  if (listContainer.children.length === 0) {
    clearBtn.style.visibility = "hidden";
  }
  displayAlert("item removed", "danger");
  setBackToDefault();
  //remove from local storage
  removeFromLocalStorage(parentElement.dataset.id);
}
// *******LOCAL STORAGE********

// add to local storage
function addToLocalStorage(id, value) {
  const grocery = { id, value };
  let items = getLocalStorage();
  console.log(items);
  items.push(grocery);
  localStorage.setItem("list", JSON.stringify(items));
}
// edit local storage
function editLocalStorage(id, value) {
  let items = getLocalStorage();

  items = items.map(function (item) {
    if (item.id === id) {
      item.value = value;
      return item;
    }
  });
  localStorage.setItem("list", JSON.stringify(items));
}
//remove from local storage
function removeFromLocalStorage(id) {
  let items = getLocalStorage();

  items = items.filter(function (item) {
    if (item.id !== id) {
      return item;
    }
  });
  localStorage.setItem("list", JSON.stringify(items));
}
function getLocalStorage() {
  return localStorage.getItem("list")
    ? JSON.parse(localStorage.getItem("list"))
    : [];
}

//setup items
function setupItems() {
  let items = getLocalStorage();

  if (items.length > 0) {
    items.forEach(function (item) {
      createListItem(item.id, item.value);
    });
    container.classList.add("show-container");
  }
}

// set back to default
function setBackToDefault() {
  input.value = "";
  editFlag = false;
  editId = "";
  submitBtn.textContent = "Submit";
}

//create list item
function createListItem(id, value) {
  const element = document.createElement("article");
  let attr = document.createAttribute("data-id");
  attr.value = id;
  element.setAttributeNode(attr);
  element.classList.add("grocery-item");
  element.innerHTML = `<p class="title">${value}</p>
            <div class="btn-container">
              <!-- edit btn -->
              <button type="button" class="edit-btn">
                <i class="fas fa-edit"></i>
              </button>
              <!-- delete btn -->
              <button type="button" class="delete-btn">
                <i class="fas fa-trash"></i>
              </button>
            </div>
          `;
  // add event listeners to both buttons;
  const deleteBtn = element.querySelector(".delete-btn");
  deleteBtn.addEventListener("click", deleteItem);
  const editBtn = element.querySelector(".edit-btn");
  editBtn.addEventListener("click", editItem);

  // append child
  listContainer.appendChild(element);
}
