var app = new Vue({
  el: "#app",
  data: {
    message: "",
    guess: 0,
    answer: 33,
    image: "",
    winner: false
  },
  methods: {
    submitGuess: function() {
      if (parseInt(this.guess) > parseInt(this.answer)) {
        this.message = "Too High!";
        this.winner = false;
      } else if (parseInt(this.guess) < parseInt(this.answer)) {
        this.message = "Too Low!";
        this.winner = false;
      } else {
        this.message = "Just Right!";
        this.winner = true;
      } 
    },
    resetAnswer: function() {
      console.log(this.answer);
      this.answer = Math.floor((Math.random() * 10) + 1);
      console.log("resetAnswer says hey");
      console.log(this.answer);
      this.guess = 0;
    }
  }
});
