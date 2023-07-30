const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      fullname: ''
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

    watch: {
      // name(value) {
      //   if (value === '') {
      //     this.fullname = '';
      //   } else {
      //     this.fullname = value + ' ' + 'Schwarzmuller';
      //   }
      // }
      counter(value) {
        if (value > 50) {
          const that = this;
          setTimeout(function() {that.counter = 0;}, 2000);
        }
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
