var app = new Vue({
  el: "#app",
  data: function () {
    return {
      message: "Hello Vue!",
      number1: 0,
      number2: 0,
      number3: 0,
      product: 0
    };
  },
  methods: {
    computeProduct: function () {
      console.log("computing product");
      this.product = this.number1 * this.number2 * this.number3;
    }
  }
});