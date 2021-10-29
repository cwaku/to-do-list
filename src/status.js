const checkbox = document.querySelectorAll(".check-box");


 function completed(state, description) {
  if (state) {
    //add style to crossout element
    description.classList.add("strike");
    const index = description.getAttribute("id");
    console.log(index);
    if (Number(index) === toDoList[0].index) {
      toDoList[0].completed = true;
      console.log(toDoList[0]);
      localStorage.setItem("ToDo", JSON.stringify(toDoList));
    } else if (Number(index) === toDoList[1].index) {
      toDoList[1].completed = true;
      console.log(toDoList[1]);
      localStorage.setItem("ToDo", JSON.stringify(toDoList));
    }
  } else {
    description.classList.remove("strike");
    const index = description.getAttribute("id");
    console.log(index);
    if (Number(index) === toDoList[0].index) {
      toDoList[0].completed = false;
      console.log(toDoList[0]);
      localStorage.setItem("ToDo", JSON.stringify(toDoList));
    } else if (Number(index) === toDoList[1].index) {
      toDoList[1].completed = false;
      console.log(toDoList[1]);
      localStorage.setItem("ToDo", JSON.stringify(toDoList));
    }
  }
}

export const checkBox = checkbox.forEach((el) => {
  el.addEventListener("change", (e) => {
    const state = e.target.checked;
    const description = e.target.parentElement;
    console.log(state);
    if (state === true) {
      completed(state, description);
    } else {
      completed(state, description);
    }
  });
});
