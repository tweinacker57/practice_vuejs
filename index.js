var app = new Vue({
  el: "#app",
  data: function () {
    return {
      message: "Hello from JavaScript!",
      todos: [
        { text: "This is the first item" },
        { text: "This is the second item" },
        { text: "This is the third item" },
        { text: "This is the fourth item" }],
    };
  },
});

var app2 = new Vue({
  el: "#app2",
  data: {
    message2: 'Hello Vue.js!'
  },
  methods: {
    makeUpperCase: function () {
      this.message2 = this.message2.toUpperCase();
    }
  }
});

var app3 = new Vue({
  el: '#app3',
  data: {
    message: 'Hello Vue!'
  }
});