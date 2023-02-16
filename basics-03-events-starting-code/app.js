//document.querySelector("button").addEventListener();
// Vue 앱 밖에서 전역함수를 사용할 수는 없다.
// 메서드 변경을 최소화하여 설계 하여야한다.
const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: "",
      confirmedName: "",
    };
  },
  // 인자 값을 임의로 설정해서 html 이벤트에 삽입한다.
  methods: {
    confirmInput() {
      this.confirmedName = this.name;
    },
    //event를 인자 값으로 내려받아 preventDefault() << 해당기능은 이후 새로고침을 막는 기능
    submitForm() {
      alert("제출했어용");
    },
    setName(event, lastName) {
      // 사용자가 input에서 친 내용을 그대로 카피하는 메서드
      // event 인자 값을 html에서 받지않고 함수 내에서 받음
      this.name = event.target.value + " " + lastName;
    },
    addCounter(num) {
      this.counter = this.counter + num;
    },
    reduceCounter(num) {
      this.counter = this.counter - num;
    },
  },
});

app.mount("#events");
