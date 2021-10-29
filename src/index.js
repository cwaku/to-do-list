import "./style.css";
import { checkBox, checkbox } from './status';

const list = document.querySelector(".list");

const toDoList = [
  {
    index: 0,
    description: "wash the dishes",
    completed: false,
  },
  {
    index: 1,
    description: "hit the gym",
    completed: false,
  },
];

function showList() {
  const heading = document.createElement("li");
  heading.innerHTML =
    '<p>Today\'s To Do</p> <i class="fas fa-sync-alt icons"></i>';
  list.append(heading);

  const input = document.createElement("li");
  input.innerHTML =
    '<input class="text" type="text" placeholder="Add to your list..."> <i class="fas fa-stream icons"></i>';
  list.append(input);

  for (let i = 0; i < toDoList.length; i += 1) {
    if (toDoList[0].index === i) {
      const listCode = `<li data-id="${i}"><div id="${i}" class="task"><input class="check-box" type="checkbox"><p>${toDoList[i].description}</p></div>
    <i class="fas fa-ellipsis-v icons"></i>`;
      list.innerHTML += listCode;
    } else if (toDoList[1].index === i) {
      const listCode = `<li data-id="${i}"><div id="${i}" class="task"><input class="check-box" type="checkbox"><p>${toDoList[i].description}</p></div>
    <i class="fas fa-ellipsis-v icons"></i>`;
      list.innerHTML += listCode;
    }
  }

  const btn = document.createElement("li");
  btn.innerHTML = '<button type="button">Clear all completed</button>';
  list.append(btn);
}

document.addEventListener("DOMContentLoaded", () => {
  showList();
  checkBox();
});
