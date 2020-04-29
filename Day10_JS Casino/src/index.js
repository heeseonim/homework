const slider = document.querySelector(".slider");
const selectNum = document.querySelector(".selectNum");

selectNum.innerHTML = slider.value;
slider.oninput = function () {
  selectNum.innerHTML = this.value;
};

function getInputValue() {
  var inputVal = document.querySelector(".myInput").value;
  var ranNum = Math.floor(getRandom(0, slider.value));

  const result = document.querySelector(".result");
  result.innerHTML = '';
  
  const newContent = document.createTextNode(
    `You chose : ${inputVal}, the machine chose : ${ranNum}`
  );
  result.appendChild(newContent);

  result.appendChild(document.createElement("br"));

  var newResult;
  if (inputVal == ranNum) {
    newResult = document.createTextNode("You won!");
  } else {
    newResult = document.createTextNode("You lost!");
  }
  result.appendChild(newResult);
}

function getRandom(min, max) {
  return Math.random() * (max - min);
}
