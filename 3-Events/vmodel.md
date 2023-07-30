## 양방향 바인딩 : v-model

```html
<!DOCTYPE html>

<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vue Basics</title>
    <link
      href="https://fonts.googleapis.com/css2?family=Jost:wght@400;700&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="styles.css" />
    <script src="https://unpkg.com/vue@next" defer></script>
    <script src="app.js" defer></script>
  </head>
  <body>
    <header>
      <h1>Vue Events</h1>
    </header>
    <section id="events">
      <h2>Events in Action</h2>
      <button v-on:click="add(10)">Add 10</button>
      <button v-on:click="reduce(5)">Subtract 5</button>
      <p>Result: {{ counter }}</p>
      <input type="text" v-bind:value="name" v-on:input="setName($event, 'Schwarzmüller')">
      <button v-on:click="resetInput">Reset Input</button>
      <p>Your Name: {{ name }}</p>
    </section>
  </body>
</html>
```

<br>

```javascript
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
    }
  }
});

app.mount('#events');
```

<br>

위 코드에서 input태그는 기존에 사용자가 입력한 값만 가져왔었습니다.

그런데 여기서 밑에 버튼 태그와 resetInput 함수를 만들고 사용자가 입력한 값만 가져오는 것이 아니라,

입력요소에 값을 설정하고 버튼이나 다른 로직으로 재설정하고 싶을 경우가 이번 경우에 해당합니다.

<br>

그래서 위 코드처럼 입력을 그냥 수신하는 것이 아니라, 입력값으로 인해 저장된 값을,

value 프로퍼티에 데이터 바인딩을 하고 input 입력 요소에 전달할 수 있습니다.

<br>

실제로 이 패턴이 자주 사용되기 때문에 Vue는 이 패턴을 단순화한 특수 내장 디렉티브인 `v-model`이 있습니다.

값을 바인딩하고 input에서 입력 변경 이벤트를 수신하면 위의 input 태그에 달린 모든 속성을 제거할 수 있습니다.

```html
<input type="text" v-bind:value="name" v-on:input="setName($event, 'Schwarzmüller')">
```

<br>

위의 값 바인딩, 입력 이벤트 수신 속성을 제거하고 input에 `v-model`을 추가합니다.

이 `v-model`에 이 디렉티브가 관리할 데이터 프로퍼티만 넣어주면 됩니다.

이번 케이스는 name 프로퍼티죠

```html
<input type="text" v-model="name"
```

<br>

이제 name 프로퍼티는 input 이벤트에서 업데이트 되고 name 프로퍼티의 값은 입력 요소로 다시 전송됩니다.

즉, v-model은 v-bind:value v-on:input의 축약인 셈이고 양방향 바인딩이라는 개념입니다.

양방향으로 통신하고 있으니까요.

<br>

정리하면, 입력요소에서 나오는 이벤트를 수신하는 동시에 value 속성 및 프로퍼티를 통해 값을 다시 입력 요소에 보냅니다.

이처럼 양방향 통신을 하기 때문에 양방향 바인딩이라고 부릅니다.