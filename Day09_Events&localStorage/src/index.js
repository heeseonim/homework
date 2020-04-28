const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  pendingTask = document.querySelector(".pendingTask"),
  finishedTask = document.querySelector(".finishedTask");

const PENDING = "pending";
const FINISHED = "finished";
let pendingList = [];
let finishedList = [];

function deleteToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  const Task = li.parentNode;
  const name = Task.className;
  Task.removeChild(li);
  if (name === "pendingTask") {
    const cleanToDos = pendingList.filter(function (toDo) {
      return toDo.id !== parseInt(li.id);
    });
    pendingList = cleanToDos;
  } else {
    const cleanToDos = finishedList.filter(function (toDo) {
      return toDo.id !== parseInt(li.id);
    });
    finishedList = cleanToDos;
  }
  saveToDos();
}

function toggleToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  const Task = li.parentNode;
  const name = Task.className;
  Task.removeChild(li);
  if (name === "pendingTask") {
    pendingList.forEach((toDo) => {
      if (toDo.id === parseInt(li.id)) {
        paintToDo(false, toDo.text, "⏪");
      }
    });
    const cleanToDos = pendingList.filter(function (toDo) {
      return toDo.id !== parseInt(li.id);
    });
    pendingList = cleanToDos;
  } else {
    finishedList.forEach((toDo) => {
      if (toDo.id === parseInt(li.id)) {
        paintToDo(true, toDo.text, "✅");
      }
    });
    const cleanToDos = finishedList.filter(function (toDo) {
      return toDo.id !== parseInt(li.id);
    });
    finishedList = cleanToDos;
  }
  saveToDos();
}

function saveToDos() {
  localStorage.setItem(PENDING, JSON.stringify(pendingList));
  localStorage.setItem(FINISHED, JSON.stringify(finishedList));
}

function paintToDo(flag, text, chk) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const chkBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = flag ? pendingList.length + 1 : finishedList.length + 1;
  delBtn.innerText = "❌";
  delBtn.addEventListener("click", deleteToDo);
  chkBtn.innerText = chk;
  chkBtn.addEventListener("click", toggleToDo);
  span.innerText = text;
  li.appendChild(span);
  li.appendChild(delBtn);
  li.appendChild(chkBtn);
  li.id = newId;
  flag ? pendingTask.appendChild(li) : finishedTask.appendChild(li);
  const toDoObj = {
    text: text,
    id: newId,
  };
  flag ? pendingList.push(toDoObj) : finishedList.push(toDoObj);
  saveToDos();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(true, currentValue, "✅");
  toDoInput.value = "";
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(PENDING);
  const finishedToDos = localStorage.getItem(FINISHED);
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    console.log(parsedToDos);
    parsedToDos.forEach(function (toDo) {
      paintToDo(true, toDo.text, "✅");
    });
  }
  if (finishedToDos !== null) {
    const parsedToDos = JSON.parse(finishedToDos);
    parsedToDos.forEach(function (toDo) {
      paintToDo(false, toDo.text, "⏪");
    });
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
