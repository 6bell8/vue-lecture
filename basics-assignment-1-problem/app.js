const app = Vue.createApp({
  data() {
    return {
      name: "박진성",
      age: 28,
      vueimg: "./mountain.jpg",
      assignName: "진성",
    };
  },
  methods: {
    plusAge() {
      return this.age + 5;
    },
    num() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return 0;
      } else {
        return 1;
      }
    },
  },
});

app.mount("#assignment");
