const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '신건우'
    };
  },

  methods: {
    add(num) {
      this.counter += num;
    },
    reduce(num) {
      this.counter -= num;
    },
    setName(event, lastName) {
      this.name = event.target.value + ' ' + lastName;
    }
  }
});

app.mount('#events');
