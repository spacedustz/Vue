## Vue
Learn Vue.js Framework

---

## 학습한 목록

<details>
<summary>1. Without JS</summary>

- starting-project 의 app.js에서 입력된 값을 읽을 수 있도록 index.html의 `input` 태그에 access 해야합니다.
- 버튼에 대한 클릭 이벤트도 수신해야 해야 하기 떄문에 `<button>`에도 access 해야합니다.
- `<ul>` 리스트에도 접근해 새로운 목록을 추가할 수 있어야 합니다.

<br>

> 위의 내용을 수행하기 위해 app.js에 상수(const)를 3개 생성합니다.

```javascript
// Query Selector를 통해 HTML 요소의 Javascript 객체 구현을 가리키는 포인터를 상수에 할당합니다.
const buttonEl = document.querySelector('button');
const inputEl = document.querySelector('input');
const listEl = document.querySelector('ul');

// 이 함수는 사용자가 입력한 값을 받아서 Goal을 수정해줍니다.
function addGoal() {
  const enteredValue = inputEl.value;

  // Javascript로 새 DOM 요소를 프로그래밍 방식으로 생성
  const listItemEl = document.createElement('li');
  listItemEl.textContent = enteredValue;

  // 프로그래밍 방식으로 생성한 listItemEl을 Child로 추가
  listEl.appendChild(listItemEl);

  // 이전의 Goal들 삭제
  inputEl.value = '';
}

// ButtonEl에 Clien Listener 추가해서 버튼에 접근하여 클릭 이벤트 수신
// 두번째 파라미터는 클릭이 발생할 때 실행할 함수 지정
buttonEl.addEventListener('click', addGoal);
```
</details>

<br>

<details>
<summary>2. Vue 사용해보기</summary>

Vue를 사용하기 위한 여러가지 방법이 있지만 간단하게 CDN 방식으로 학습해보겠습니다.

전에 썼던 app.js의 내용은 모두 주석처리 해줍니다.

Vue를 간단하게 script 태그로 불러오는 코드입니다.

```html
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
```

HTML 파일에 script 태그를 이용해 vue를 불러올 수 있습니다.
Vue를 추가할때 js파일을 불러오는 script 위에 붙여줍시다.

```html
    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
    <script src="app.js"></script>
```

<br>

Vue를 사용하기 전은 명령형 방식으로 실행했었습니다.

이는 브라우저가 실행하는 단계를 직접 모두 정의해 준다는 뜻입니다. (버튼, 입력요소, 함수생성 등)

<br>

이때 Vue를 활용하면 완전히 다른 방식의 접근이 가능합니다.

어느 시점에 DOM에서 무엇을 생성하고 추가하거나 바꿀지 Vue가 스스로 알아내도록 합니다.

이를 위해서 HTML코드를 제어하는 Vue 앱을 생성해야 합니다.

<br>

Vue CDN을 불러와서 사용가능한 글로벌 객체인 `Vue.createApp()`을 호출하면 됩니다.

이제 여기에 Vue앱을 구성하는 자바스크립트 객체를 넣어줍니다.

이때 `구성`이란 Vue 앱에서 어떤 데이터를 사용할 지 설정하는걸 의미합니다.

<br>

```javascript
Vue.createApp({
  data() {
    return {
      goals: [],
      enteredValue: ''
    };
  }
});
```

<br>

위 예제에서는 `Goal`과 사용자가 입력한 데이터가 필요한 데이터가 됩니다.

그 데이터를 `data`라는 이름의 함수를 가지는 프로퍼티를 Vue 앱의 자바스크립트 객체에 추가해줍니다.

이 함수는 객체를 반환해야 합니다.

즉, Vue 앱이 인식해야 하는 데이터를 이 객체에서 정의합니다.

<br>

함수가 리턴하는 enteredValue를 HTML의 input과 특수한 지시문을 이용해 연결할 수 있습니다.

바로 `v-model`이라는 속성인데 HTML이 지원하는 Default 속성은 아닙니다. Vue만 인식할 수 있습니다.

`v-model`의 값으로는 프로퍼티 이름인 enteredValue를 반복합니다.

즉, 사용자가 입력한 input 값을 수신해서 enteredValue 프로퍼티를 업데이트 합니다.

```html
<input type="text" id="goal" v-model="enteredValue">
```

<br>

이제 버튼에서 enteredValue에 저장된 값을 가지고 createApp으로 전달하는 이 객체에 키:값 쌍을 하나 더 추가하면 됩니다.

```javascript
Vue.createApp({
  data() {
    return {
      goals: [],
      enteredValue: ''
    };
  },

  // 이 부분
  methods: {
    addGoal() {
      this.goals.push(this.enteredValue);
    }
  }
});
```

위 코드에서 `methods` 부분에서 메서드와 함수를 정의할 수 있습니다.

해당 메서드와 함수를 HTML코드에서 호출할 수 있어야겠죠.

`addGoal()` 이라는 메서드를 추가하고 goals로 가서 현재 enteredValue에 추가합니다.

<br>

이제 버튼을 클릭할때마다 addGoal()이 트리거 됩니다.

그리고 이제 HTML의 버튼 태그에 Vue를 이용한 특수한 속성`(v-on)`을 추가해서 수신할 이벤트 이름인 `click`을 입력해주면 됩니다.

그 값으로 클릭할 때 트리거 될 함수를 지정해주면 됩니다. 위에서 만든 함수인 addGoal()이 되겠죠.

```html
<button v-on:click="addGoal">Add Goal</button>
```

이렇게 하면 Vue에서는 addGole 메서드를 버튼이 클릭될때마다 실행됩니다.

<br>

이제 마지막으로 순서가 없는 목록(ul)에서 Goal을 출력하는 일만 남았습니다.

HTML의 `li`태그에 `v-for=""`속성을 추가해줍니다.

이를 요소에 추가해 여러번 복제할 수 있습니다.

```html
<li v-for="goal in goals">
```

<br>

위처럼 태그에 속성을 추가해서 goals 배열 전체에 Loop를 걸고 goal 마다 list를 하나씩 생성하도록 해야합니다.

저렇게 속성을 붙여주고 특수한 구문`(이중 중괄호)`으로 goal을 출력할 수 있습니다.

```html
<li v-for="goal in goals>{{ goal }}</li>
```

이제 리스트가 필요한만큼 복제 될겁니다.

<br>

이제 진짜 마지막으로 Vue앱이 페이지의 어느부분을 조정할지 Vue앱에 알려줘야 합니다.

위에서 쓴 모든 HTML의 특수속성이 id가 app인 div안에 전부 들어가있습니다.

즉, Vue 앱이 컨트롤할 화면은 바로 저 div 태그부분 입니다.

<br>

이제 어디를 컨트롤 할지 알았습니다.

app.js 파일의 `Vue.createApp()의 마지막 부분으로 가서 `mount()를 추가하고 인자로는,

CSS 선택자가 있는 문자열을 전달해서 DOM의 요소`#app`를 선택합니다.

결과물은 이렇게 됩니다.

![img](https://raw.githubusercontent.com/spacedustz/Obsidian-Image-Server/main/img/vue.png)
</details>

<br>

<details>
<sumarry>Vue를 이용한 DOM 상호작용</sumarry>


</details>