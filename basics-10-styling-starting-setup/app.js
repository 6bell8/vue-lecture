const app = Vue.createApp({
  data() {
    return {
      boxASelected: false,
      boxBSelected: false,
      boxCSelected: false,
    };
  },
  // 동적 클래스가 많으면 사용할 수 있는 것은 연산자이다
  computed: {
    boxAClasses() {
      return { active: this.boxASelected };
    },
  },
  methods: {
    boxSelected(box) {
      if (box === "A") {
        // 복잡하게 토글하는 것 보다 !를 이용해서 상태를 바꿔줌
        // 인자값으로 class 지정, !this 토글
        this.boxASelected = !this.boxASelected;
      } else if (box === "B") {
        this.boxBSelected = !this.boxBSelected;
      } else {
        this.boxCSelected = !this.boxCSelected;
      }
    },
  },
});

app.mount("#styling");
