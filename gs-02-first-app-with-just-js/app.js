const buttonEl = document.querySelector("button");
const inputEl = document.querySelector("input");
const listEl = document.querySelector("ul");

function addGoal() {
  const enteredValue = inputEl.value;
  const listItemEl = document.createElement("li");
  listItemEl.textContent = enteredValue;
  listEl.appendChild(listItemEl);
  inputEl.value = "";
}

// function addGoal() {
//   const enteredValue = inputEl.value;
//   const listItemEl = document.createElement("li");
//   listItemEl.textContent = enteredValue;
//   // append는 개수에 관계없이 여러가지 엘리먼트를 추가할 수 있다.
//   // appendChlid 한번에 부모노드에 하나한가지 엘리먼트만 추가할 수 있다.(개수는 상관x)
//   listEl.appendChild(listItemEl);
//   inputEl.value = "";
// }

buttonEl.addEventListener("click", addGoal);
