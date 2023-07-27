const app = Vue.createApp({
  data: function() {
    return {
      courseGoal: 'Finish the course and learn Vue!',
      vueLink: 'https://vuejs.org/'
    };
  }
});

app.mount('#user-goal');