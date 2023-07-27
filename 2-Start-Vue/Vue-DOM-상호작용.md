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