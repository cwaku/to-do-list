/* eslint-disable */
import { toDoList } from './index.js';
/* eslint-enable */

export function completed(state, description) {
  if (state) {
    description.classList.add('strike');
    const index = description.getAttribute('id');
    if (Number(index) === toDoList[0].index) {
      toDoList[0].completed = true;
      localStorage.setItem('ToDo', JSON.stringify(toDoList));
    } else if (Number(index) === toDoList[1].index) {
      toDoList[1].completed = true;
      localStorage.setItem('ToDo', JSON.stringify(toDoList));
    }
  } else {
    description.classList.remove('strike');
    const index = description.getAttribute('id');
    if (Number(index) === toDoList[0].index) {
      toDoList[0].completed = false;
      localStorage.setItem('ToDo', JSON.stringify(toDoList));
    } else if (Number(index) === toDoList[1].index) {
      toDoList[1].completed = false;
      localStorage.setItem('ToDo', JSON.stringify(toDoList));
    }
  }
}

export const checkBox = (arr) => {
  arr.forEach((el) => {
    el.addEventListener('change', (e) => {
      const state = e.target.checked;
      const description = e.target.parentElement;
      if (state === true) {
        completed(state, description);
      } else {
        completed(state, description);
      }
    });
  });
};