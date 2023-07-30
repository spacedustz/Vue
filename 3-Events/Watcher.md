## Watcher

저번에 동적 값을 출력하는데 핵심 기능을 하는 Computed Property에 대해 배웠습니다.

Vue에 내장된 따 다른 Advanced Reactivity가 있는데 바로 Watcher 입니다.

<br>

`Watcher`는 기본적으로 의존성 중 하나가 변경될 때 Vue에 실행하도록 지시하는 함수입니다.

Computed Property와 비슷하며, 실제로 대체해서 사용도 가능합니다.

하지만 왜 그러지 않고 분리된 건지 동작 방식을 설명하겠습니다.

<br>

Watcher의 선언방법은 data나 method, computed 처럼 watch 라는 고유한 이름을 사용합니다.

```javascript
const app = Vue.createApp({
	data() {
		name: ''
	},

	methods: {
		...
	},

	watch: {
		name(value) {}
	}
})
```

위 코드에서 data 프로퍼티인 name이 있고 watch엔 name()이 있지만 실제로 충돌이 발생하지 않습니다.

그리고, data의 name property가 변경되면 watch의 name() 함수도 재실행 됩니다.

즉 watch에 name()을 만듬으로써 data의 name과 watch의 name()이 연결된겁니다.

Watcher는 이렇게 동작합니다.

<br>

정리하면 data나 computed property 이름을 watch의 함수 이름으로 사용하면 연결된 프로퍼티가 변경이 되면,

Watch 함수가 Vue에 의해 자동으로 실행됩니다.

<br>

name()의 파라미터로 받은 value는 watch 프로퍼티의 마지막 값을 가져옵니다 (data의 프로퍼티인 name)

함수의 파라미터로 `name(newValue, oldValue)` 두개의 파라미터를 받을 수 있지만 여기선 하나만 받겠습니다.

그럼 이제 위 코드같은 경우, name 프로퍼티가 변경되면 실행할 로직만 작성해주면 됩니다.

```javascript
    watch: {
      name(value) {
        if (value === '') {
          this.fullname = '';
        } else {
          this.fullname = value + ' ' + 'Schwarzmuller';
        }
      }
```

<br>

이렇게 보다시피 연산 프로퍼티의 대용으로 사용할 수 도 있지만 그렇게 사용하면 문제가 있습니다.

연산 프로퍼티가 하나 이상의 의존성을 사용할 때 발생하며 이런 용도로 Watcher를 사용하는건 좋지 않습니다.

<br>

예를 들어, Counter를 증가시키다가 50이 되면 초기화를 하는 작업이 필요할때, 이런 종류의 작업에서 유용합니다.

즉, 데이터 프로퍼티를 업데이트 하지만, 항상 업데이트가 아닌 특정 상황에 업데이트해서 실행할 경우를 말합니다.

<br>

**Watcher를 사용할 수 있는 예시**

- 데이터 프로퍼티를 업데이트 하지만, 항상 업데이트가 아닌 특정 상황에 업데이트해서 실행할 경우
- 특정 데이터가 변경될 때 보내는 HTTP Request
- 특정 값이 변경되면 설정하는 타이머 설정

<br>

**Timeout 이 지나면 Counter를 초기화하는 Watch 함수**

```javascript
counter(value) {
  if (value > 50) {
    const that = this;
    setTimeout(function() {that.counter = 0;}, 2000);
  }
}
```

<br>

이런식으로 모든 프로퍼티의 변화가 아닌 일부 프토퍼티의 변화에 반응해서,

데이터 프로퍼티를 업데이트 하려는 경우 `Watcher`가 유용하게 쓰일 수 있습니다.

**연산 프로퍼티**는 출력값을 동적으로 계산할 경우 등에 적합합니다.