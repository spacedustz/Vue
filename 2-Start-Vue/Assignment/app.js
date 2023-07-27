const app = Vue.createApp({
  data() {
    return {
      name: '신건우',
      age: 20,
      img: 'https://v2.ko.vuejs.org/images/logo.png'
    };
  },

  methods: {
    calculateAge() {
      return this.age + 5;
    },
    calculateRandom() {
      return Math.random();
    }
  }
});

app.mount('#assignment');