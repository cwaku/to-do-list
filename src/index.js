/* eslint-disable */
import { checkBox } from "./status.js";
import { toDoClass } from "./addRemove.js";
import "./style.css";

export let toDoList = JSON.parse(localStorage.getItem("ToDo")) || [];
/* eslint-enable */

const div = document.createElement("div");
div.className = "container";

const heading = document.createElement("p");
heading.className = "heading";
heading.textContent = "Today's To Do";
const span = document.createElement("span");
span.innerHTML = '<i class="fas fa-sync-alt icons iconed"></i>';
heading.append(span);
div.append(heading);

const contain = document.createElement("div");
contain.className = "contain";
const me = document.createElement("div");
me.className = "input";
const input = document.createElement("input");
input.placeholder = "Add to your list...";
input.type = "text";
input.className = "text";
const span1 = document.createElement("div");
span1.innerHTML = '<i class="fas fa-stream sub-icon"></i>';
contain.append(me);
contain.append(span1);
me.append(input);
div.append(contain);

const clearBtn = document.createElement("button");
clearBtn.type = "button";
clearBtn.className = "clear-all";
clearBtn.textContent = "Clear all completed";
document.body.insertAdjacentElement("afterbegin", div);
//div.insertAdjacentElement('beforeend', clearBtn);

const list = document.querySelector(".list"); //we might import
div.append(list);
div.append(clearBtn);

function showList() {
  const listsCode = toDoList.map((newList) =>
    new toDoClass(
      newList.description,
      newList.completed,
      newList.index
    ).listCode()
  );

  list.innerHTML = listsCode.join("");

  const checkbox = document.querySelectorAll(".check-box");
  checkBox(checkbox);

  const btn = document.querySelectorAll(".icon-d");
  btn.forEach((el) => {
    el.addEventListener("click", (e) => {
      const oldList =
        e.target.parentElement.parentElement.getAttribute("data-id"); //get parent
      toDoClass.remove(oldList);
      showList();
    });
  });
}

showList();

document.addEventListener("DOMContentLoaded", () => {
  const submitBtn = document.querySelector(".sub-icon");
  submitBtn.addEventListener("click", () => {
    const desInput = document.querySelector(".text");
    const description = desInput.value.trim();
    if (!description) {
      return;
    }

    const completed = false;
    const newList = new toDoClass(description, completed);
    toDoClass.addTo(newList);
    showList();
    desInput.value = "";
  });

  const clearCompleted = document.querySelector(".clear-all");
  clearCompleted.addEventListener("click", () => {
    toDoList = toDoList.filter((x) => x.completed === false);
    showList();
    for (let i = 0; i < toDoList.length; i += 1) {
      toDoList[i].index = i;
    }
    localStorage.setItem("ToDo", JSON.stringify(toDoList));
  });

  const isComp = document.querySelectorAll(".check-box");
  isComp.forEach((el) => {
    for (let i = 0; i < toDoList.length; i += 1) {
      if (toDoList[i].completed === true) {
        let compId = el.parentElement.getAttribute('id');
        if (Number(compId) === toDoList[i].index){
          el.parentElement.classList.add('strike');
          el.checked = true;
        }


        //el.parentElement.classList.style.color = 'red';
      }
    }
  });
});
