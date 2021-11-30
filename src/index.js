/* eslint-disable */
import { checkBox } from './status.js';
import './style.css';

const list = document.querySelector('.list');

const toDoList = [
  {
    index: 0,
    description: 'wash the dishes',
    completed: false,
  },
  {
    index: 1,
    description: 'do the laundry',
    completed: false,
  },
];
/* eslint-enable */

const list = document.querySelector('.list');

function showList() {
  const heading = document.createElement('li');
  heading.innerHTML = '<p>Today\'s To Do</p> <i class="fas fa-sync-alt icons"></i>';
  list.append(heading);

  const input = document.createElement('li');
  input.innerHTML = '<input class="text" type="text" placeholder="Add to your list..."> <i class="fas fa-stream icons"></i>';
  list.append(input);

  toDoList.forEach((item) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `<p><input type="checkbox">${item.description}</p><i class="fas fa-ellipsis-v icons"></i>`;
    list.append(listItem);
  });


  const btn = document.createElement('li');
  btn.innerHTML = '<button type="button">Clear all completed</button>';
  list.append(btn);
}

showList();

document.addEventListener('DOMContentLoaded', () => {
  if (toDoList[0].completed === true) {
    document.getElementById('0').classList.add('strike');
    document.querySelector('.list-0').checked = true;
  }

  if (toDoList[1].completed === true) {
    document.getElementById('1').classList.add('strike');
    document.querySelector('.list-1').checked = true;
  }

  const checkbox = document.querySelectorAll('.check-box');
  checkBox(checkbox);
});
