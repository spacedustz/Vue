## Event Method

전에 알아봤던 Event Binding시 HTML 코드에 v-on의 값 부분에 직접 자바스크립트 코드를 사용했었습니다.

그런데 HTML코드에 직접 자바스크립트 코드를 넣는 방식은 좋지않은 방식입니다.

HTML 코드는 출력에만 집중하는게 좋은 개발 방향입니다.

당연히 상식적으로 HTML내의 자바스크립트 코드가 복잡해지면 넣을수 없겠죠.

```html
<button v-on:click="counter++">Add</button>
```

위 코드는 전에 썼던 HTML에 v-on 디렉티브를 이용한 이벤트 수신방식을 사용했는데 이걸 Vue 코드로 바꿔보겠습니다.

버튼을 클릭할때 실행할 함수를 Vue 앱에서 지정해주면 됩니다.

이번에는 전에 배운 methods에서 직접 함수를 실행하는 방법이 아닌,

v-on 이벤트 리스너에 연결 후, 특정 이벤트가 발생하면 Vue가 대신 호출하게 할겁니다.

```html
<!-- Vue앱의 methods 객체 내부 함수 지정 -->
<button v-on:click="add">Add</button>
<button v-on:click="recude">Reduce</button>
```

<br>

```javascript
const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },

  methods: {
    add() { // counter 증가 함수
      this.counter++;
    },
    reduce() { // counter 감소 함수
      this.counter--;
    }
  }
});

app.mount('#events');
```

대충 보면 전에 배운 methods와 똑같다고 느낄수 있지만 v-on 이벤트 리스너를 연결한 후 함수 호출이 되고 있습니다.