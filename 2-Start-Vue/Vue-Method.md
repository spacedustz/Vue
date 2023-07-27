## Vue의 Methods 이해하기

저번에 배운 v-bind나 보간법을 이용해 `{{ }}` 사이에 데이터 바인딩을 했었습니다.

이때 `{{ }}` 사이에 데이터가 어떤 조건에 의해 무작위로 바뀌게 출력하도록 해보겠습니다.

이럴때 사용할 수 있는 Vue의 옵션중 하나가 Methods 입니다.

Methods를 사용하면 사용자 이벤트가 발생하는 등의 일이 생겼을때 실행할 함수를 지정합니다.

`methods`의 값으로는 Javascript 객체를 전달합니다.

이때, 기존의 data는 그 자체로 함수이자 메서드라면 methods는 메서드 및 함수로 만들어진 객체를 찾습니다.

```javascript
const app = Vue.createApp({
  data: function() {
    return {
      courseGoalA: 'Finish the course and learn Vue!',
      courseGoalB: 'Master Vue and build amazing Apps!',
      vueLink: 'https://vuejs.org/'
    };
  },

  // 이 Methods의 값인 객체의 프로퍼티는 함수여야 합니다.
  methods: {
    outputGoal() {
      const randomNumber = Math.ramdom();

      if (randomNumber < 0.5) {
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    }
  }
});

app.mount('#user-goal');
```

<br>

이렇게 자바스크립트 코드를 짠 후 적용할 HTML 태그에 Interpolation 구문을 사용하여 지정해줍니다.

```html
<p>{{ outputGoal() }}</p>
```

<br>

이제 페이지를 새로고침 할때마다 Learn Vue!, Master Vue! 라는 글자가 무작위로 나올것입니다.