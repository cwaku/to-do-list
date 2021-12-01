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
    return `<li data-id="${this.index}"><div data-id="${this.index + 1}" class="task"><input class="check-box list-${this.index}" type="checkbox"><p contenteditable="true" class="edit">${this.description}</p></div>
      <div class="contain-icons"><i class="fas fa-trash-alt icon-d"></i> <i class="fas fa-ellipsis-v icons"></i></div>`;
  }

  static addTo(newList) {
    toDoList.push(newList);
    localStorage.setItem('ToDo', JSON.stringify(toDoList));
  }

  static remove(oldList) {
    toDoList = toDoList.filter((x) => x.index !== Number(oldList));
    for (let i = 0; i < toDoList.length; i += 1) {
      toDoList[i].index = i + 1;
    }
    localStorage.setItem('ToDo', JSON.stringify(toDoList));
  }
}
