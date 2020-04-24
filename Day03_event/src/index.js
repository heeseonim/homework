const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];

const title = document.querySelector("h2");

const superEventHandler = {
  mouseover: () => {
    title.innerText = "The mouse is here!";
    title.style.color = colors[0];
  },
  mouseout: () => {
    title.innerText = "The mouse is gone!";
    title.style.color = colors[1];
  },
  resize: () => {
    title.innerText = "You just resized!";
    title.style.color = colors[2];
  },
  contextmenu: () => {
    title.innerText = "That was a right click!";
    title.style.color = colors[3];
  }
};

title.addEventListener("mouseover", superEventHandler.mouseover);
title.addEventListener("mouseout", superEventHandler.mouseout);
window.addEventListener("resize", superEventHandler.resize);
window.addEventListener("contextmenu", superEventHandler.contextmenu);
