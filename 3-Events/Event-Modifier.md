## Event Modifier

```html
    <section id="events">
      <h2>Events in Action</h2>
      <button v-on:click="add(5)">Add 5</button>
      <button v-on:click="reduce(5)">Reduce 5</button>
      <p>Result: {{ counter }}</p>
      <input type="text" v-on:input="setName($event, 'LastName')">
      <p>Your Name: {{ name }}</p>
      <!-- 이 부분 -->
      <form>
        <input type="text">
        <button>Sign Up</button>
      </form>
    </section>
```

만약 위 코드의 마지막 p태그 밑에 form 태그를 넣고 input과 button 태그를 넣고 버튼을 누르면 어떻게 될까요?

페이지가 새로고침 됩니다.

<br>

그 이유는 브라우저의 기본값이 버튼이 있는 form 양식을 제출하면서 앱을 제공하는 서버에 HTTP 요청을 보냅니다.

여기선 그런 서버없이 로컬 환경인데도 불구하고 여전히 브라우저가 로컬로 요청을 보내기 때문입니다.

<br>

일반적으로 Vue같은 프레임워크를 사용할 때는 이번 브라우저 기본값을 방지하고,

수동으로 Vue 앱에서 Javasript로 처리합니다.

거기서 사용자의 입력값을 읽고 유효성을 검사한 후 수동으로 백엔드 서버에 요청을 전송, DB 등에 저장합니다.

즉, 브라우저가 요청을 자동으로 전송하는 기본값을 방지합니다.

<br>

### 브라우저의 기본값을 방지하는 방법(1 - Native Event Object를 이용한 방법)

첫번째는 submit 이벤트를 `v-on` 디렉티브를 이용해 수신할 수 있는데,

```html
<form v-on:submit="submitForm">
```

```javascript
submitForm() {
	alert('Submitted!');
}
```

이것도 기본 브라우저의 이벤트라 form 요소에서 수신할 수 있습니다.

이렇게 하면 form이 실행될때마다 Vue가 submitForm 함수를 실행할 것입니다.

그런데 브라우저의 기본값은 아직 여전히 유효합니다. 당연히 페이지가 새로고침되면 모든 데이터를 잃게 됩니다.

<br>

저번에 배운 Native Event Object를 생각해서 해당 event에 대해 preventDefault() 함수를 submitForm 함수에 적용해보겠습니다.

```javascript
submitForm(event) {
	event.proventDefault();
	alert('Submitted!');
}
```

위 코드는 자바스크립트에 내장된 기본 브라우저의 메커니즘입니다.

이제서야 브라우저의 form 양식 제출 기본값이 비활성화 되었습니다.

<br>

### 브라우저의 기본값을 방지하는 방법(2 - Vue를 이용한 방법)

Vue를 이용해 브라우저 기본값을 방지하는 방법엔 Event-Modifier를 사용한 방법이 있습니다. (권장)

수신하는 이벤트에 연결해서 이벤트의 동작을 바꿀수 있습니다.

그런 수식어를 추가할땐, 이벤트 이름 뒤에 마침표를 찍습니다.

```html
<form v-on:submit.prevent="submitForm">
```

```javascript
submitForm() {
	alert('Submitted!');
}
```

이렇게 적용하면 form 양식을 제출해도 페이지가 새로고침 되지 않게 됩니다.

<br>



이러한 이벤트 수식어를 사용해서 이벤트와 브라우저 동작만 변경하는것은 아닙니다.

수식어 중에선 이벤트에 연결해서 이벤트가 발생할 시기를 변경하는 것 등 다양한 것들이 있습니다.

버튼으로 예를 들어서, 지난번 만들었던 counter의 값을 더하고 빼는 버튼에 적용해보겠습니다.

버튼에 마우스 우클릭을 할때만 숫자 5를 빼는 작업을 하고 싶다고 가정합니다.

```html
<button v-on:click.right="reduce(5)">Subtract 5</button>
```

위 이벤트 리스너에 `right`만 추가해주면 우클릭 시에만 버튼 클릭에 대한 이벤트를 수신하게 됩니다.

<br>

### Key Modifier

이벤트 수식어 중 `key`는 키보드 이벤트를 수신하는데 쓰입니다. HTML의 input 요소처럼 말이죠.

이것도 지난번 만든 input 태그에 붙은 이벤트 리스너를 변경하여 예를 들어보겠습니다.

<br>

내부적으로 저장된 name 프로퍼티를 키 입력 시 업데이트 하도록 만들겠습니다.

다만 p태그에 출력되는 name이 업데이트되기 위해서는 사용자가 Input 요소의 입력창에서 Enter를 눌러야 합니다.

따라서 또 다른 데이터 프로퍼티인 confirmedName을 추가로 작성해줍니다.

즉, 기존의 내부적으로 저장된 name 프로퍼티의 값을 새로운 프로퍼티인 confirmedName이 출력되게 하는것입니다.
<br>

**기존 코드**
```html
<input type="text" v-on:input="setName($event, 'LastName')">
<p>Your Name: {{ name }}</p>
```

<br>

**Key Modifier 적용 코드**
```html
<input type="text" v-on:input="setName($event, 'LastName')" v-on:keyup>
<p>Your Name: {{ confirmedName }}</p>
```

<br>

```javascript
const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '이름',
      confirmedName: ''
    };
  },

  methods: {
    add(num) {
      this.counter += num;
    },
    reduce(num) {
      this.counter -= num;
    },
    setName(event, lastName) {
      this.name = event.target.value + ' ' + lastName;
    },
    submitForm() {
      alert('Submitted!')
    },
    confirmInput() { // 이 부분
      this.confirmedName = this.name;
    }
  }
});
```

<br>

Key Modifier가 적용된 코드에서 `keyup` 수식어는 키를 눌렀다가 뗄 때 트리거되는 이벤트입니다.

정리하자면
- keyup : 키보드를 눌렀다 뗄 때마다 키보드 이벤트 수신 (모든 키 적용)
- keyup.enter : 엔터를 눌렀을 때만 키보드 이벤트 수신