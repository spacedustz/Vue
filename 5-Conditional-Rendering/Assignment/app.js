Vue.createApp({
  data() {
    return {
      innerValue: '',
      tasks: [],
      paraGraph: true
    };
  },

  computed: {
    para() {
      return this.paraGraph ? 'Hide List' : 'Show List';
    }
  },

  methods: {
    addTask() {
      this.tasks.push(this.innerValue);
      this.innerValue = '';
    },
    caption() {
      this.paraGraph = !this.paraGraph;
    }
  }
}).mount('#assignment');