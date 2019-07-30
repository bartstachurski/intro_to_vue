var app = new Vue({
  el: "#app",
  data: {
    message: "Hello Vue!",
    name: "Bart",
    animals: ["Gryffin", "Wallace", "Cookie", "Whispy"],
    showInfo: true
  },
  methods: {
    changeMessage: function() {
      if (this.message === "Goodbye Vue!") {
        this.message = "Hello Vue!";
      } else {
        this.message = "Goodbye Vue!";
      }
    },

    toggleInfo: function() {
      // if (this.showInfo === true) {
      //   this.showInfo = false;
      // } else {
      //   this.showInfo = true;
      // }
      this.showInfo = !this.showInfo;
    }
  }
});
