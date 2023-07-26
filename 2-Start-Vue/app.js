const app = Vue.createApp({
  data: function() {
    return {
      courseGoal: 'Finish the course and learn Vue!'
    };
  }
});

app.mount('#user-goal');

