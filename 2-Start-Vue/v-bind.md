## v-bind 디렉티브 속성 바인딩

위와 동일하게 data의 객체 프로퍼티를 통해 HTML의 a태그의 href 속성에 링크를 전달하고 싶습니다.

그래서 vueLink라는 객체 프로퍼티를 1개 더 설정하고 링크를 주었습니다.

```javascript
const app = Vue.createApp({
  data: function() {
    return {
      courseGoal: 'Finish the course and learn Vue!',
      vueLink: 'https://vuejs.org/'
    };
  }
});

app.mount('#user-goal');
```

이때 `href="{{  }}"` 이런식으로 사용하면 정상적인 바인딩이 안됩니다.

이럴때 `<a v-bind:href="">` 처럼 특수한 구문을 써서 Vue에게 바인딩을 지시합니다.

`v-bind:`옆에는 바인딩 될 HTML 태그의 속성을 넣어주면 됩니다. 위에서처럼 `v-bind:href` 이렇게 말이죠.

그럼 이제 중괄호는 생략하고 `<a v-bind:href="vueLink"`를 지정해주면 정상적으로 추가적인 데이터가 바인딩됩니다.

```html
<p>Learn More<a v-bind:href="vueLink">about Vue</a></p>
``` 