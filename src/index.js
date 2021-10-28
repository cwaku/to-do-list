import './style.css';

const list = document.querySelector('.list');

const toDoList = [
  2,
  {
    index: 0,
    description: 'wash the dishes',
    completed: false,
  },
];

function showList() {
  const heading = document.createElement('li');
  heading.innerHTML = '<p>Today\'s To Do</p> <i class="fas fa-sync-alt icons"></i>';
  list.append(heading);

  const input = document.createElement('li');
  input.innerHTML = '<input class="text" type="text" placeholder="Add to your list..."> <i class="fas fa-stream icons"></i>';
  list.append(input);

  for (let i = 0; i < toDoList[0]; i += 1) {
    const listCode = `<li data-id="${i}"><p><input type="checkbox">${toDoList[1].description}</p> <i class="fas fa-ellipsis-v icons"></i>`;

    list.innerHTML += listCode;
  }

  const btn = document.createElement('li');
  btn.innerHTML = '<button type="button">Clear all completed</button>';
  list.append(btn);
}

document.addEventListener('DOMContentLoaded', () => {
  showList();
});
