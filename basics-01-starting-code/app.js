const app = Vue.createApp({
  // 반드시 data라는 프로퍼티를 사용해야된다.
  data() {
    return {
      //useState가튼 존재
      courseGoal: "Finish the course and learn Vue!",
      //라우팅 방법
      vueLink: "https://github.com/6bell8",
    };
    outputGoal();
  },
  // methods는 함수를 정의, 메서드 내에서 함수명을 마음대로 정할 수 있음
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return "Learn Vue";
      } else {
        return "Master Vue";
      }
    },
  },
});

app.mount("#user-goal");
