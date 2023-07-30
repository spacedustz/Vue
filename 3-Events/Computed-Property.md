## Computed(연산) Property

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
    },
    outputFullName() {
      if (this.name === '') {
        return '';
      }
      return this.name + ' ' + 'Schwarzmuller';
      }
    },

		// 이 부분
    computed: {
      fullName() {
        console.log('로그 찍기');
        if (this.name === '') {
          return '';
        }
        return this.name + ' ' + 'Schwarzmuller';
        }
      }
  });

app.mount('#events');
```

<br>

일단 연산 프로퍼티와 메서드의 중요한 차이점은 Vue가 의존성을 확인하고 그 중 하나가 변경된 경우에만 실행된다는 점입니다.

computed도 객체를 값으로 전달해서 연산합니다.

여기서도 methods 처럼 많은 함수를 정의하지만 computed에서 정의한 함수는 다른 방식으로 호출되고 실행됩니다.

<br>

computed에서 생성한 함수는 함수처럼 사용하지도않고 호출도 안하고 프로퍼티처럼 사용합니다.

그래서 연산 프로퍼티 이름은 데이터 프로퍼티를 선언할때처럼 정해야 합니다.

이제 위 코드의 computed의 fullName을 HTML코드에 데이터 프로퍼티처럼 사용가능합니다.

```html
<p>Your Name : {{ fullName }}</p>
```

위 코드처럼 함수 호출을 직접적으로 하는게 아니라 포인터만 추가합니다.

<br>

저 {{ }} 안의 fullName은 Vue의 스코프에서 첫번쨰로 data의 프로퍼티로 존재하는지 확인, 없다면 computed에서 확인합니다.

이제 다시 개발자 도구에서 Counter를 증가/감소 시켜보면 모든 Vue 메서드가 재실행되지 않게 됩니다.

즉, 저 코드에서 유일한 의존성인 `name` 프로퍼티의 변경이 있을때만 평가가 수행되게 됩니다.

성능 면에서 값을 출력할 땐 `methods`보다 `computed`를 사용하는게 좋습니다.

<br>

`methods`는 페이지에서 어떤 항목이 변경되든 값을 재계산 하려는 경우에만 사용하는걸 권장합니다.