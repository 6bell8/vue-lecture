const app = Vue.createApp({
  // 반드시 data라는 프로퍼티를 사용해야된다.
  data() {
    return {
      //useState가튼 존재
      courseGoalA: "Finish the course and learn Vue!",
      courseGoalB: "<h2>Master Vue and build amzing apps</h2>",
      //라우팅 방법
      vueLink: "https://github.com/6bell8",
    };
  },
  // methods는 함수를 정의, 메서드 내에서 함수명을 마음대로 정할 수 있음
  // 매서드에서 this는 data()를 참조할 수 있다. this 참조할 대상을 아는 것이 중요

  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    },
  },
});

app.mount("#user-goal");
