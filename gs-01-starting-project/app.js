Vue.createApp({
  data() {
    return {
      goals: [],
      // html 내에서 v-model을 통해 enterValue라는 프로퍼티가 연결 됨.
      enterValue: "",
    };
  },

  // this은 보이지 않는 곳에서 객체를 참조
  methods: {
    addGoal() {
      this.goals.push(this.enterValue);
      this.enterValue = "";
    },
    // Vue 코드가 어디서 작동하고 실행되어야하는지 모르기때문에 mount를 적용함
  },
}).mount("#app");

// const buttonEl = document.querySelector("button");
// const inputEl = document.querySelector("input");
// const listEl = document.querySelector("ul");

// function addGoal() {
//   // inputEl 값을 그대로 갖는다.
//   const enteredValue = inputEl.value;

//   // Dom에서 특정한 elements를 생성하는데 사용한다.
//   const listItemEl = document.createElement("li");
//   listItemEl.textContent = enteredValue;
//   // listEL이 listItemEl을 자식요소로 추가하는 것
//   listEl.appendChild(listItemEl);

//   // 빈값으로 초기화
//   inputEl.value = "";
// }

// // 두번째 인자는 클릭 발생할 때 실행되는 함수이다.
// buttonEl.addEventListener("click", addGoal);
