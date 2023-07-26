Vue를 HTML의 어느 부분에 적용할지를 정해서 해당 HTML 태그를 제어할 수 있습니다.

```html
  <body>
    <header>
      <h1>Vue Course Goals</h1>
    </header>
    <section id="user-goal">
      <h2>My Course Goal</h2>
      <p></p>
    </section>
  </body>
```

위 코드에서 Section 요소 전체를 Vue로 컨트롤 해보겠습니다. (Vue로 HTML 태그를 제어할 경우, 해당 요소의 하위 요소도 컨트롤이 가능합니다)

<br>

```javascript
const app = Vue.createApp();
app.mount('#user-goal');
```

위 코드에서 Vue 앱을 변수에 선언해주고, 컨트롤 할 HTML 태그의 CSS 선택자인 id를 mount()의 인자로 넣어줍니다.

mount() 안에는 문자열이 들어가며 CSS 선택자를 넣으면 해당 HTML 태그와 연결된다는 의미입니다.

<br>

이제 Vue 기능을 이용해 Section 태그와 상호작용을 할 수 있는데, 그러려면 createApp()의 인자로 객체를 전달해야 합니다.

앱을 구성할 때 사용할 수 있는 객체로, 이 Vue앱의 여러 옵션을 구성할 수 있습니다.

구성의 핵심 옵션으로 데이터를 구성하는 `data`가 있으며 프로퍼티의 이름은 무조건 `data`여야 합니다.

이 `data`는 값으로 함수를 가지며, 이 함수는 항상 객체를 반환합니다.

여기서 반환하는 객체는 어떤값이든 키:값 쌍으로 설정할 수 있습니다.

즉, data에서 반환하는 객체의 어떤 프로퍼티든 Vue가 컨트롤하는 HTML 코드에서 사용할 수 있게 된겁니다.

```javascript
const app = Vue.createApp({
  data: function() {
    return {
      courseGoal: 'Finish the course and learn Vue!'
      };
	}
});

app.mount('#user-goal');
```

<br>

Vue가 제어하는 HTML 코드에서 데이터를 출력하려면 HTML 코드 내 특수한 속성을 사용해야 합니다.

