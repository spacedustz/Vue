const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },

  methods: {
    setName(event, lastName) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      // document.querySelector('input').vlaue = '';
      this.name = '';
    },
    outputFullName() {
      if (this.name === '') {
        return '';
      }
      return this.name + ' ' + 'Schwarzmuller';
      }
    },
    computed: {
      fullName() {
        console.log('로그 찍기');
        if (this.name === '') {
          return '';
        }
        return this.name + ' ' + 'Schwarzmuller';
        }
      }
  });

app.mount('#events');
