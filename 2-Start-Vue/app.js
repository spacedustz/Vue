const app = Vue.createApp({
  data: function() {
    return {
      courseGoal: 'Finish the course and learn Vue!',
      vueLink: 'https://vuejs.org/'
    };
  },

  // 이 Methods의 값인 객체의 프로퍼티는 함수여야 합니다.
  methods: {
    outputGoal() {
      const randomNumber = Math.ramdom();

      if (randomNumber < 0.5) {
        return 'Learn Vue!';
      } else {
        return 'Master Vue!';
      }
    }
  }
});

app.mount('#user-goal');