## 보간법 (Interpolation)

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

컨텐츠를 출력하고자 사용하는 구문은 `{{ }}` 중괄호 2개를 사용합니다.

이 중괄호 2개 사이에는 반환된 data 객체 프로퍼티를 참조할 수 있습니다.

`반환된 data 객체 프로퍼티란` 위 코드에서 `courseGoal`부분이라고 할 수 있습니다.

즉 텍스트가 JavaScript로 되어있고 이런 특수한 구문을 **보간법**이라고 합니다.