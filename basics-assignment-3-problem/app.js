const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      state: "Not yet",
    };
  },
  watch: {
    counter(value) {
      if (value < 20) {
        this.state = "Not yet";
      } else {
        this.state = "Too much!";
        setTimeout(() => {
          this.counter = 0;
        }, 2000);
      }
    },
  },
  //   computed: {
  //     counter(value) {
  //       if (value < 37) {
  //         return "Not there yet" + this.counter;
  //       }
  //       return "Too much";
  //     },
  //   },
  methods: {
    add(num) {
      this.counter = this.counter + num;
    },
  },
});
app.mount("#assignment");
