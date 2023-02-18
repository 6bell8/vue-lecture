//document.querySelector("button").addEventListener();
// Vue 앱 밖에서 전역함수를 사용할 수는 없다.
// 메서드 변경을 최소화하여 설계 하여야한다.
const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: "",
      lastName: "",
      // fullname: "",
    };
  },
  // 연산 프로퍼티의 대안으로도 사용할 수 있다.
  // data 프로퍼티 내를 감시하는 기능 react (useEffect와 얼핏 비슷, 리렌더링방지)
  watch: {
    // watch의(감시자) 진짜 주요한 기능 동적인 요소를 캐치해서 변화시킴
    // 내부에서 바뀌는 작업이 있을 때 사용하는 것이 좋다
    counter(value) {
      if (value > 50) {
        const that = this;
        setTimeout(() => {
          that.counter = 0;
        }, 2000);
        // this.counter = 0;
      }
    },
    // 인자 값으로 마지막 name의 값을 가져오기 때문에 this.name이 아니라 value로 통칭한다.
    // name(value) {
    //   if (value == "") {
    //     this.fullname = "";
    //   } else {
    //     this.fullname = value + " " + this.lastName;
    //   }
    // },
    // // 첫번째 감시자에서 value 값을 가져오기 때문에 this.name을 앞에 명시하고 value값을 사용한다.
    // lastName(value) {
    //   if (value == "") {
    //     this.fullname = "";
    //   } else {
    //     this.fullname = this.name + " " + value;
    //   }
    // },
  },
  // 다른 데이터에 의존하는 데이터 출력엔 연산프로퍼티를 사용
  // 어디서나 구성옵션을 끼워 넣을 수 있음
  // 연산자옵션을 하는 이유는 불필요한 리렌더링을 막고, html에서의 연산을 최소화하기 위해서
  // computed의 주요한 기능은 동적 계산을 (+) 빠르게 할 수 있음
  computed: {
    fullname() {
      console.log("재실행 하겠습니다.");
      // 둘중 하나라도 해당이 되면 return ''
      if (this.name === "" || this.lastName === "") {
        return "";
      }
      return this.name + " " + this.lastName;
    },
  },
  // 인자 값을 임의로 설정해서 html 이벤트에 삽입한다.
  // 메서드에 있는 + 연산자는 다른 메서드까지 렌더링하는 경우가 있다 때문에 computed라는 연산 프로퍼티에 담아서 사용한다.
  // 메서드의 순서는 중요하지않다
  // 이벤트 바인딩은 항상 메서드를 사용한다
  methods: {
    outputFullname() {
      console.log("재실행 하겠습니다.");
      if (this.name === "") {
        return "";
      }
      return this.name + " " + "park";
    },
    confirmInput() {
      this.confirmedName = this.name;
    },
    //event를 인자 값으로 내려받아 preventDefault() << 해당기능은 이후 새로고침을 막는 기능
    submitForm() {
      alert("제출했어용");
    },
    setName(event) {
      // 사용자가 input에서 친 내용을 그대로 카피하는 메서드
      // event 인자 값을 html에서 받지않고 함수 내에서 받음
      this.name = event.target.value;
    },
    addCounter(num) {
      this.counter = this.counter + num;
    },
    reduceCounter(num) {
      this.counter = this.counter - num;
    },
    resetInput() {
      this.name = "";
    },
  },
});

app.mount("#events");
