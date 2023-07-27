## Native Event Object

이번엔 기존의 HTML코드에 사용자의 이름을 input으로 입력받아 바인딩된 데이터의 값을 변경해보겠습니다.

```html
<input type="text" v-on:input="setName">
<p>Your Name: {{ name }}</p>
```

<br>

```javascript
  methods: {
	  ...
	  ...
    setName() {
    }
  }
```

<br>

위 코드의 이벤트 리스너인 `v-on`의 input의 값으로 Vue의 실행 함수명을 넣어주면,

그 함수는 자동으로 인수를 하나 얻게 됩니다. (브라우저에서 제공하는 인수)

그 인수는 발생한 이벤트를 설명하는 객체가 될겁니다.

위 HTML에서 함수명에 `()`를여서 실행시키는 것이 아닌 함수명만 넣어서 포인터를 지정해 줬기 때문에

브라우저에서 기본으로 제공하는 이벤트 객체를 하나 받게 됩니다.

<br>

이 방법이 왜 유용할까요? 이 기본 이벤트 객체는 이벤트 정보로 가득하기 때문입니다.

예를들어 이 이벤트가 발생하는 HTML 요소에 대한 정보인 `input` 입력 요소 입니다.

그리고 입력란에 저장된 현재 값을 input 요소에서 읽어올 수 있습니다.

그 다음 이벤트의 대상에 액세스하도록 event.target 이라는 순수 자바스크립트를 사용합니다.

이것은 Vue의 기능이 아닌 순수 자바스크립트의 기능입니다.

```javascript
  methods: {
	  ...
	  ...
    setName(event) {
	    this.name = event.target.value;
    }
  }
```

이제 이벤트가 발생한 요소에 액세스할 수 있게 됩니다.

<br>

정리하자면
- event = 자바스크립트에서 기본적으로 얻을 수 있는 이벤트 객체
- target = input 요소에서 발생한 요소
- value = 그 발생한 요소에서 가져온 프로퍼티

입니다.

즉, 사용자가 입력한 값이 Vue앱의 name 프로퍼티로 계속 업데이트 됩니다.

이것이 Vue의 반응성이 작용하는 원리입니다.

<br>

또 다른 상황을 예시로 들어봅시다.

어떠한 이유로 HTML의 `v-on:input="setName()"` 함수명을 적는 부분에 명시적으로 함수를 호출하고,

기본 이벤트 객체를 불러오지 못한 채 파라미터까지 넣어야 할때,

기본 내장 이벤트 객체를 불러오는 방법을 배워보겠습니다.

```html
<input type="text" v-on:input="setName($event, 'LastName')">
```

<br>

```javascript
setName(event, lastName) {
  this.name = event.target.value + ' ' + lastName;
}
```

위 코드처럼 `$event`를 사용하여 기본 내장 이벤트 객체에 액세스할 수 있습니다.

Vue의 자바스크립트 코드에서도 명시적으로 파라미터에 event를 넣을 수 있습니다.

여기서 중요한점은 methods의 함수를 포인팅하지 않을때만 사용할 수 있습니다.

**즉, 함수를 직접적으로 호출을 한 경우에만 사용할 수 있다는 의미입니다.**
