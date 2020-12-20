import "./style.css";

const ul = document.querySelector("ul");
const form = document.querySelector("form");
const input = document.querySelector("form > input");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const value = input.value;
  input.value = "";
  addTodo(value);
});

const todos = [
  {
    text: "je suis une todo",
    done: false,
  },
  {
    text: "faire du javascript",
    done: true,
  },
];

const displayTodo = () => {
  const todoNodes = todos.map((todo, index) => {
    return createElement(todo);
  });
  ul.innerHTML = "";
  ul.append(...todoNodes);
};
const createElement = (todo) => {
  const li = document.createElement("li");
  li.innerHTML = `<span class = 'todo ${todo.done ? "done" : ""}'></span> 
  <p>${todo.text}</p>
  <button>Editer</button>
  <button>Supprimer</button>`;
  return li;
};
const addTodo = (text) => {
  if (text) {
    todos.push({
      text,
      done: false,
    });
    displayTodo();
  }
};
displayTodo();
