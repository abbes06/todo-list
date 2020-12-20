import "./style.css";

const ul = document.querySelector("ul");

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
  console.log(todo.done);
  li.innerHTML = `<span class = 'todo ${todo.done ? "done" : ""}'></span> 
  <p>${todo.text}</p>
  <button>Editer</button>
  <button>Supprimer</button>`;
  console.log(li);
  return li;
};

displayTodo();
