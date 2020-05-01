/*eslint-disable no-eval */
var buttons = document.querySelectorAll(".button");
var output = document.querySelector(".output");

var action = null;
var current = 0;

var actions = {
  "+": " + ",
  "-": " - ",
  "*": " * ",
  "/": " / "
};

function handleButton(e) {
  var input = e.target.innerText;
  var num = parseInt(input, 10);
  if (isNaN(num)) {
    if (input === "C") {
      action = null;
      current = 0;
      output.innerText = 0;
    } else {
      // action 인 경우
      // 이전에 입력한 action 이 존재하는 경우
      if (action && action !== "=") {
        // 전에 들어온 action 이 '=' 이 아니라면 계산진행
        var calculation = current + actions[action] + output.innerText;
        output.innerText = eval(calculation); // 계산 실행
      }
      current = parseInt(output.innerText, 10); // 지금까지 입력된 것을 현재 값으로 저장
      action = input; // 액션 저장
    }
  } else {
    // 스크린에 있는 수가 계산이 완료된 수일 경우
    if (current === parseInt(output.innerText, 10)) {
      output.innerText = num;
    } else {
      output.innerText += num; // 이어붙이기
    }
  }
}

for (let index = 0; index < buttons.length; index++) {
  buttons[index].addEventListener("click", handleButton);
}
