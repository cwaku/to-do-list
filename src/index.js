/* eslint-disable */
import { checkBox } from './status.js';
import { ToDoClass } from './addRemove.js';
import './style.css';

export let toDoList = JSON.parse(localStorage.getItem('ToDo')) || [];
/* eslint-enable */

const div = document.createElement('div');
div.className = 'container';

const heading = document.createElement('p');
heading.className = 'heading';
heading.textContent = 'Today\'s To Do';
const span = document.createElement('span');
span.innerHTML = '<i class="fas fa-sync-alt icons iconed"></i>';
heading.append(span);
div.append(heading);

const contain = document.createElement('div');
contain.className = 'contain';
const me = document.createElement('div');
me.className = 'input';
const input = document.createElement('input');
input.placeholder = 'Add to your list...';
input.type = 'text';
input.className = 'text';
const span1 = document.createElement('div');
span1.innerHTML = '<i class="fas fa-stream sub-icon"></i>';
contain.append(me);
contain.append(span1);
me.append(input);
div.append(contain);

const clearBtn = document.createElement('button');
clearBtn.type = 'button';
clearBtn.className = 'clear-all';
clearBtn.textContent = 'Clear all completed';
document.body.insertAdjacentElement('afterbegin', div);

const save = document.createElement('button');
save.className = 'save';
save.textContent = 'Save edits';

const list = document.querySelector('.list');
div.append(list);
div.append(clearBtn);
div.append(save);

export function showList() {
  const listsCode = toDoList.map((newList) => new ToDoClass(
    newList.description,
    newList.completed,
    newList.index,
  ).listCode());

  list.innerHTML = listsCode.join('');

  const checkbox = document.querySelectorAll('.check-box');
  checkBox(checkbox);

  const btn = document.querySelectorAll('.icon-d');
  btn.forEach((el) => {
    el.addEventListener('click', (e) => {
      const oldList = e.target.parentElement.parentElement.getAttribute('data-id'); // get parent
      ToDoClass.remove(oldList);
      showList();
    });
  });
}

showList();

document.addEventListener('DOMContentLoaded', () => {
  const submitBtn = document.querySelector('.sub-icon');
  submitBtn.addEventListener('click', () => {
    const desInput = document.querySelector('.text');
    const description = desInput.value.trim();
    if (!description) {
      return;
    }

    let id = 0;
    if (toDoList.length === 0) {
      id = toDoList.length + 1;
    } else if (toDoList.length > 0) {
      id = toDoList[toDoList.length - 1].index + 1;
    }

    const index = id;

    const completed = false;
    const newList = new ToDoClass(description, completed, index);
    ToDoClass.addTo(newList);
    showList();
    desInput.value = '';
  });

  const clearCompleted = document.querySelector('.clear-all');
  clearCompleted.addEventListener('click', () => {
    toDoList = toDoList.filter((x) => x.completed === false);
    showList();
    for (let i = 0; i < toDoList.length; i += 1) {
      toDoList[i].index = i + 1;
    }
    localStorage.setItem('ToDo', JSON.stringify(toDoList));
  });

  const isComplete = document.querySelectorAll('.check-box');
  isComplete.forEach((el) => {
    for (let i = 0; i < toDoList.length; i += 1) {
      if (toDoList[i].completed === true) {
        const compId = el.parentElement.getAttribute('id');
        if (Number(compId) === toDoList[i].index) {
          el.parentElement.classList.add('strike');
          el.checked = true;
        }
      }
    }
  });

  // Get edited task and update to localStorage
  const saveBtn = document.querySelector('.save');
  const paragraphs = document.querySelectorAll('.edit');
  paragraphs.forEach((el) => {
    el.addEventListener('click', () => {
      saveBtn.addEventListener('click', () => {
        const newInput = el.innerHTML;
        for (let i = 0; i < toDoList.length; i += 1) {
          const parentId = el.parentElement.getAttribute('data-id');
          if (Number(parentId - 1) === toDoList[i].index) {
            toDoList[i].description = newInput;
            localStorage.setItem('ToDo', JSON.stringify(toDoList));
          }
        }
      });
    });
  });
});