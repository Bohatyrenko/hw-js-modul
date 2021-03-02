import cards from "./data.js";

const listRef = document.createElement("ul");
const modalRef = document.querySelector(".modal");
const formRef = document.querySelector(".form-js");
const todoRef = document.querySelector(".todo");
const filterRef = document.querySelector(".filter");
const todoListRef = document.querySelector(".todo-list");

listRef.classList.add("list-js");

document.body.prepend(listRef);

const mark = cards.map(({ name, id, url, description }) => {
  const itemListref = document.createElement("li");
  const titleRef = document.createElement("h2");
  const pictureRef = document.createElement("img");
  titleRef.textContent = name;
  pictureRef.src = url;
  pictureRef.alt = description;
  itemListref.id = id;
  pictureRef.width = "500";
  itemListref.append(titleRef, pictureRef);
  return itemListref;
});

listRef.append(...mark);

listRef.addEventListener("click", (e) => {
  console.dir(e.target);
  if (e.target.localName === "img") {
    modalRef.style.display = "block";
    modalRef.children[0].src = e.target.currentSrc;
  }
});

window.addEventListener("keydown", (e) => {
  console.log(e.key);
  if (e.key === "Escape") {
    modalRef.style.display = "none";
  }
});

modalRef.addEventListener("click", (e) => {
  if (e.target.localName !== "img") {
    modalRef.style.display = "none";
  }
});

const todoArr = [];
formRef.addEventListener("submit", (e) => {
  e.preventDefault();
  if (todoRef.value.trim() === "") {
    return;
  }
  const mark = `<li id = ${Math.round(
    Math.random() * 10000
  )}><p>${todoRef.value.trim()}</p><button>Delete</button></li>`;
  todoArr.push(mark);
  todoListRef.innerHTML = "";
  todoListRef.insertAdjacentHTML("beforeend", todoArr.join(""));
  todoArr.value = "";
});

filterRef.addEventListener("input", (e) => {
  const filterTodoArr = todoArr.filter((item) =>
    item.includes(filterRef.value)
  );
  todoListRef.innerHTML = "";
  todoListRef.insertAdjacentHTML("beforeend", filterTodoArr.join(""));
});

const btnRef = document.querySelector(".btnDel");
btnRef.addEventListener("click", (e) => {
  console.dir(e.currentTarget);
});
