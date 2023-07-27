## Event Binding 이해하기

사용자의 입력 데이터에 따라 반응하는 방법과 Vue를 활용하고 더 활발한 상호작용 & 반응하는 웹 어플리케이션을 위해 Event를 이해해봅시다.

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
      <button>Add</button>
      <button>Reduce</button>
      <p>Result: {{ counter }}</p>
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
    };
  },
});

app.mount('#events');
```

위 HTML 에서 Add/Reduce button 을 눌렀을때 바인딩된 counter에 1을 더하고, 뺀다고 해보죠.

순수 자바스크립트에서는

`document.getElementById` 로 버튼의 ID를 이용하거나,

`document.querySelector('button').addEventListener()` 을 이용해 첫번째로 찾은 버튼을 선택하는 방법 등이 있습니다.

---

## Directive v-on

Vue를 이용한 방법에서는 이런 중간과정들이 필요하지 않고 선언형 접근 방식을 활용해서,

최종 결과를 선언해 Vue가 방법을 찾게 만들면 됩니다.

그 방법으로 Vue는 HTML 요소에 이벤트 리스너를 쉽게 추가하는 방법을 제공합니다.

특정 이벤트에 반응하도록 하려면`v-on`이라는 디렉티브를 사용합니다.

<br>

위 HTML에서 클릭에 대한 이벤트를 수신하고 싶기 떄문에 v-on을 이용해 해당 속성에 디렉티브를 추가합니다.

속성의 = 부분 다음인 `" "`엔 실행할 코드를 적어주면 됩니다.

카운터를 증가시키기로 했으니 `counter++`를 넣어주었습니다.

```html
<button v-on:click="counter++">Add</button>
```

click 속성뿐만 아니라 mouseenter, mouseleave 등 순수 자바스크립트에서 수신할 수 있는 모든 이벤트에 사용할 수 있습니다.

여기서 숫자를 더하고 리스너를 다루고 p태그에 바인딩된 counter의 값을 이벤트를 수신해서 값을 변경하는 일이 모두 Vue의 역할입니다.

짧은 코드일지라도 이 부분이 핵심이고 정적인 페이지가 아닌 동적으로 바인딩된 데이터가 사용자의 입력값이나 이벤트를 수신해서 동적으로 바뀐다는게 핵심이라고 할 수 있습니다.