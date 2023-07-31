## v-for: Advanced

### Indexing

v-for 디렉티브는 배열 내 항목을 반복 출력하는 기능 외에 다양한 데이터를 출력할 수 있습니다.

예를 들어, 배열 내 항목의 인덱스도 출력할 수 있습니다.

```html
<li v-for="(goal, index) in goals">{{ goal }} - {{ index }}</li>
```

이렇게 설정하면 Goal1 - 0, Goal2 - 1 이런식으로 인덱스 번호까지 같이 출력할 수 있습니다.

<br>

### Object Looping

그리고 배열 외에도 루프를 걸 수 있습니다 (ex: 객체)

지금 goals는 배열이기 떄문에 배열에 loop를 걸었지만 객체에 loop를 걸 경우도 있을 겁니다.

```html
<ul>
	<li v-for="value in {name: 'Max', age: 20}">{{ value }}</li>
</ul>
```

<br>

위 코드에서 객체를 간단하게 HTML 내에서 선언했지만 실무라면 객체는 Javascript App으로 옮기는것이 좋습니다.

v-for를 이용해서 프로퍼티에 있는 여러 값을 출력할 수 있도록 value에 Interpolation을 걸어줍니다.

<br>

그럼 출력되는 값은,

- Max
- 20

이 순서대로 li 태그가 생성됨과 동시에 출력 될 겁니다.

<br>

그리고 위 객체의 키:값 형태로 출력하는 방법도 적용하고 싶다면 위의 Indexing에서 사용한 걸 응용해서 작성하면 됩니다.

```html
<ul>
	<li v-for="(value, key) in {name: 'Max', age: 20}">: {{ key }: {{ value }}}</li>
</ul>
```

<br>

그럼 출력값은,

- name: Max
- age: 31

키와 값이 하나의 li에 묶여서 나옵니다.

<br>

마지막으로, 숫자인 경우에도 비슷하게 응용해서

```html
<li v-for="num in 10">{{ num }}</li>
```

이런식으로 출력할 수 있습니다.