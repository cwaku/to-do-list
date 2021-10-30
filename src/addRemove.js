/* eslint-disable */
import { toDoList } from './index.js';

export class ToDoClass {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }
 
  /* eslint-enable */

  listCode() {
    return `<li data-id="${this.index}"><div id="${this.index}" class="task"><input class="check-box list-${this.index}" type="checkbox"><p contenteditable="true">${this.description}</p></div>
      <div><i class="fas fa-trash-alt icon-d"></i> <i class="fas fa-ellipsis-v icons"></i></div>`;
  }

  static addTo(newList) {
    let id = 0;
    if (toDoList.length > 0) {
      id = toDoList[toDoList.length - 1].index + 1;
    }
    newList.index = id;
    toDoList.push(newList);
    localStorage.setItem('ToDo', JSON.stringify(toDoList));
  }

  static remove(oldList) {
    toDoList = toDoList.filter((x) => x.index !== Number(oldList));
    for (let i = 0; i < toDoList.length; i += 1) {
      toDoList[i].index = i;
      localStorage.setItem('ToDo', JSON.stringify(toDoList));
    }
  }
}
