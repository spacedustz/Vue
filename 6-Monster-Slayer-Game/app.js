function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

Vue.createApp({
  data() {
    return {
      playerHp: 100,
      monsterHp: 100
    };
  },

  methods: {
    attackPlayer() {
      const attackValue = getRandomValue(5, 12);
      this.playerHp -= attackValue;
    },

    attackMonster() {
      const attackValue = getRandomValue(8, 15);
      this.monsterHp -= attackValue;
      this.attackPlayer();
    }
  },
  
  computed: {
    playerBarStyle() {
      return { width: this.playerHp + '%' }
    },

    monsterBarStyle() {
      return { width: this.monsterHp + '%' }
    }
  }

}).mount('#game');