let items = document.querySelectorAll(".item");
//******delete items*****/
const clearBtn = document.querySelector(".clear-items");
const listContainer = document.querySelector(".list-container");

clearBtn.addEventListener("click", function () {
  listContainer.innerHTML = "";
  clearBtn.style.display = "none";
  items = document.querySelectorAll(".item");
});

//*****add item*******
let addNew = true;
let currId = NaN;
const submitBtn = document.querySelector(".submit");
const submitForm = document.querySelector("form");
const input = document.querySelector("input");

function addItem(itemName) {
  let id = Math.floor(Math.random() * 599999);
  if (!isNaN(currId)) {
    id = currId;
    document.getElementById(currId).querySelector("p").innerHTML = itemName;
    addNew = true;
    currId = NaN;
    submitBtn.innerHTML = "Submit";
  } else {
    const result = `<section class="item" id=${id}>
          <p>${itemName}</p>
          <div class="btn-container">
            <button class="edit-btn"><i class="fas fa-edit"></i></button>
            <button class="delete-btn"><i class="fas fa-trash"></i></button>
          </div>
        </section>`;
    listContainer.innerHTML += result;
  }

  if (clearBtn.style.display == "none") {
    clearBtn.style.display == "block";
  }
  //***delete & edit item***/
  let item = document.getElementById(id);
  const editBtn = item.querySelector(".edit-btn");
  const deleteBtn = item.querySelector(".delete-btn");
  deleteBtn.addEventListener("click", function () {
    item.innerHTML = "";
  });
  editBtn.addEventListener("click", function () {
    addNew = false;
    currId = item.id;
    submitBtn.innerHTML = "Edit";
    input.value = item.querySelector("p").innerHTML;
  });
}

submitForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const item = document.querySelector("input").value;
  document.querySelector("input").value = "";
  addItem(item);
});
