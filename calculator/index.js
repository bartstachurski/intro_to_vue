var app = new Vue({
  el: "#app",
  data: {
    message: "Calculator",
    firstNumber: 0,
    secondNumber: 0,
    thirdNumber: 0,
    sum: 0,
    product: 0,
  },
  methods: {
    calculateSum: function() {
      this.sum = parseInt(this.firstNumber) + parseInt(this.secondNumber) + parseInt(this.thirdNumber);
    }

    calculateProduct: function() {
      this.sum = parseInt(this.firstNumber) + parseInt(this.secondNumber) + parseInt(this.thirdNumber);
    }
  }
});

