## v-bind & v-on 축약어

연산 프로퍼티와 Watcher에 직접적인 관련은 없지만 Vue와는 관련이 있습니다.

엄청 흔하게 사용하는 이벤트 리스너인  v-on과 v-bind는 축약어가 존재합니다.

`@`을 사용해 v-on의 축약어로 대체할 수 있으며 수식어도 동일하게 추가 가능합니다.

```html
<button v-on:click="add(10)">Add 10</button>

<button @click="add(10)">Add 10</button>
```

<br>

v-bind의 축약어로는 `:`이 있습니다. 위와 동일하게 동작합니다.

```html
<input type="text" v-bind:value="..." v-model="name">

<input type="text" :value="..." v-model="name">
```

<br>

v-model의 축약어는 없습니다.