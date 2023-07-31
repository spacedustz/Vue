## Monster Slayer Game 만들기

이번엔 몬스터와 전투하며 여러 선택지 중 할 행동을 고르는 작은 게임을 만들어 보겠습니다.

어떤 일이 있었는지 보여주는 전투 기록 기능도 넣을 겁니다.

가장 중요한 것은 이 게임을 만들면서 지금까지 학습한 모든 Vue 핵심 기능을 사용하겠습니다.

- Interpolation, v-bind, v-on, v-model을 사용한 데이터/이벤트 바인딩
- v-for를 사용해 데이터 목록 출력
- v-if를 사용한 Conditional Contents
- 등등 배운 모든것을 활용

<br>

![img](https://raw.githubusercontent.com/spacedustz/Obsidian-Image-Server/main/Monster-Slayer.png)

<br>

위 사진과 같이 나와 적의 체력, 공격, 특수공격, 회복, 항복, 전투 기록의 틀을 기반으로

Vue와 Javascript를 이용해 브라우저 기반 웹 게임을 만들어 보겠습니다.

---

## Attack 기능

체력이 감소하는 정도를 고정된 값으로 하드코딩 하는 것은 너무 뻔하기 때문에,

무작위적 요소를 사용해 너무 뻔하지 않은 게임을 만들어 봅시다.

<br>

공격을 하면 적의 HP가 감소해야 하고, 동시에 적도 반격을 할테니 나의 HP도 감소해야 합니다.

HP가 바뀌면 바뀐 HP를 UI에 반영해서 HP 바가 줄어들게도 해야 합니다.

바로 코드부터 작성해보겠습니다.

<br>

**HTML**

```html
    <div id="game">
      <section id="monster" class="container">
        <h2>Monster Health</h2>
        <div class="healthbar">
        <!-- 몬스터 HP를 width을 동적으로 monsterHp의 수치를 이용해 %를 더해서 width %를 맟춰줌 -->
          <div class="healthbar__value" :style="{width: monsterHp + '%'}"></div>
        </div>
      </section>
      <section id="player" class="container">
        <h2>Your Health</h2>
        <div class="healthbar">
        <!-- 유저 HP를 width을 동적으로 playerHp의 수치를 이용해 %를 더해서 width %를 맟춰줌 -->
          <div class="healthbar__value" :style="{width: playerHp + '%'}"></div>
        </div>
      </section>
      <section id="controls">
	      <!-- 클릭 이벤트에 attackMoster 함수 바인딩 -->
        <button @click="attackMonster">ATTACK</button>
        <button>SPECIAL ATTACK</button>
        <button>HEAL</button>
        <button>SURRENDER</button>
      </section>
      <section id="log" class="container">
        <h2>Battle Log</h2>
        <ul></ul>
      </section>
    </div>
```

<br>

**Vue App**

```javascript
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
  
  },

}).mount('#game');
```

<br>

코드 작성 후 Attack을 눌러보면 체력 바가 감소하는걸 볼 수 있습니다.

![img](https://raw.githubusercontent.com/spacedustz/Obsidian-Image-Server/main/img/monster.png)

<br>

간단히 설명하면 Attack 버튼의 클릭 이벤트를 감지하면 attackMonster 함수를 바인딩하고 attackMonster 함수가 실행된 후,

내부에서 바로 attackPlayer() 를 호출해서 서로 공격을 하여 HP를 감소시킵니다.

<br>

공격력은 Math.floor 함수와 Math.Random 함수를 이용하여 최소값, 최대값을 설정할 수 있는 자바스크립트 함수인 getRandomValue(min, max) 함수를 만들어 사용하였습니다.

<br>


**공격력의 범위는**

- 몬스터 : 5 ~ 12
- 플레이어: 8 ~ 15

로 설정하였습니다.

<br>

감소된 HP 바를 조정하는 방법에는 div 태그의 width 속성을 이용하여, 

동적인 스타일링 방식으로 감소된 HP의 수치와 문자열인 `%`를 더해서 width의 수치값을 조정해주어 HP 바가 줄어들게 세팅했습니다.

이제 곧 바로 특수 공격에 대한 기능 추가를 해보겠습니다.