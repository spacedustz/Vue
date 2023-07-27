## v-html을 사용하여 원시 HTML 출력하기

```javascript
const app = Vue.createApp({
  data: function() {
    return {
      courseGoalA: 'Finish the course and learn Vue!',
      courseGoalB: 'Master Vue and build amazing Apps!',
      vueLink: 'https://vuejs.org/'
    };
  }
 ...
```

만약 위 코드의 courseA의 문자열로 HTML의 태그가 들어왔을때 `{{}}`를 통해 출력을 해보면,

HTML 태그가 그대로 문자열로 출력되는걸 볼 수 있습니다.

이유는 크로스 사이트 스크립팅 공격으로부터 보호해주기 때문입니다.

하지만, HTML을 HTML같은 일반 텍스트가 아니라 실제 HTML을 적용하고 싶을때는 어떻게 할까요?

이 경우 사용할 수 있는 디렉티브가 바로 `v-html`입니다.

```html
<p v-html="outputGoal()"></p>
```

위 코드처럼 HTML의 태그 내에 `v-html` 디렉티브를 사용하면 해당 컨텐츠는 HTML로 인식해야 한다고 지정합니다.

만약 `v-html`을 Default로 설정하면 `{{}}`에 내장된 크로스 사이트 스크립팅 공격에 대해 보안 위협이 발생하기 때문에,

진짜 필요할때만 사용하는걸 추천드립니다.

사용할 일이 많지는 않지만 언젠간 쓸일이 있어 학습해보았습니다.