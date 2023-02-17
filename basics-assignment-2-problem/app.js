const app = Vue.createApp({
  data() {
    return {
      output: "",
      confirmOutput01: "",
      confirmOutput02: "",
    };
  },
  methods: {
    clickBtn() {
      alert("경고");
    },
    setOutput01() {
      this.confirmOutput01 = this.output;
    },
    setOutput02() {
      this.confirmOutput02 = this.output;
    },
    confirmInput01(event) {
      this.confirmOutput01 = event.target.value;
    },
    confirmInput02(event) {
      this.confirmOutput02 = event.target.value;
    },
  },
});

app.mount("#assignment");
