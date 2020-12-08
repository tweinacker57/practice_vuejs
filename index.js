var app = new Vue({
  el: "#app",
  data: function () {
    return {
      message: "Type in something and then click the button below!",
      todos: [
        { text: "This is the first item" },
        { text: "This is the second item" },
        { text: "This is the third item" },
        { text: "This is the fourth item" }],
    };
  },
  methods: {
    makeUpperCase: function () {
      this.message = this.message.toUpperCase();
    }
  }
});