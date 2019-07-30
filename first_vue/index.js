var app = new Vue({
  el: "#app",
  data: {
    message: "Hello Vue!",
    name: "Bart",
    animals: ["Gryffin", "Wallace", "Cookie", "Whispy"]
  },
  methods: {
    changeMessage: function() {
      console.log("your method works");
      this.message = "Goodbye Vue!"; 
    }
  }
});
