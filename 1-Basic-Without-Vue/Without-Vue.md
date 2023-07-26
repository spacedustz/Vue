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