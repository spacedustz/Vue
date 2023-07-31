## Vue
Learn Vue.js Framework

---

## 학습한 목록


1. Basic-Without-Vue
- [Without JS](https://github.com/spacedustz/Vue/tree/main/1-Basic-Without-Vue/Without-Vue.md)
- [Vue 사용해보기](https://github.com/spacedustz/Vue/tree/main/1-Basic-Without-Vue/Vue-사용해보기.md)

<br>

2. Start-Vue
- [Vue를 이용한 DOM 상호작용 기본](https://github.com/spacedustz/Vue/tree/main/2-Start-Vue/Vue-DOM-상호작용.md)
- [보간법(Interpolation)](https://github.com/spacedustz/Vue/tree/main/2-Start-Vue/interpolation.md)
- [v-bind 디렉티브 속성 바인딩](https://github.com/spacedustz/Vue/tree/main/2-Start-Vue/v-bind.md)
- [Vue의 Method 이해하기](https://github.com/spacedustz/Vue/tree/main/2-Start-Vue/Vue-Method.md)
- [v-html 디렉티브 이해하기](https://github.com/spacedustz/Vue/tree/main/2-Start-Vue/v-html.md)
- [Section2 과제 완료](https://github.com/spacedustz/Vue/tree/main/2-Start-Vue/Assignment)

<br>

3. Events
- [Event Binding 이해하기](https://github.com/spacedustz/Vue/tree/main/3-Events/Event-Binding.md)
- [Event Binding Method 이해하기](https://github.com/spacedustz/Vue/tree/main/3-Events/Event-Binding-Function.md)
- [Native Event Object](https://github.com/spacedustz/Vue/tree/main/3-Events/Native-Event-Object.md)
- [Event Modifier](https://github.com/spacedustz/Vue/tree/main/3-Events/Event-Modifier.md)
- [Section3 과제 완료](https://github.com/spacedustz/Vue/tree/main/3-Events/Assignment)
- [양방향 바인딩](https://github.com/spacedustz/Vue/tree/main/3-Events/vmodel.md)
- [Computed Property](https://github.com/spacedustz/Vue/tree/main/3-Events/Computed-Property.md)
- [Watcher](https://github.com/spacedustz/Vue/tree/main/3-Events/Watcher.md)


<details>
<summary>Methods & Computed & Watch 정리</summary>

|Methods|Computed|Watch|
|---|---|---|
|템플릿에서 데이터를 바인딩 하는 용도, 예를 들어 Interpolation을 위한 `{{ }}`을 사용하기 위함|데이터 바인딩에만 쓰임|템플릿에 직접 사용하지 않습니다. 데이터,연산 등 어떤 프로퍼티든 Watch로 감시할 수 있습니다.|
|이벤트 바인딩 용도|다른 데이터를 기반으로 하는 데이터를 가져오는데 유용하며 의존하는 데이터가 바뀔때만 Vue에 의해 재평가 하거나 재실행되는 장점이 있음|데이터 변경에 대한 반응을 코드로 실행할 수 있습니다. (ex: HTTP Request 보내기, Timer 설정, Local Storage에 데이터를 저장하는 작업 등|
|데이터 바인딩을 위한 사용에서 템플릿 -> Vue 인스턴스로 로직을 아웃소싱 하는 경우, Methods는 컴포넌트의 Re-Rendering 주기에 맟춰 매번 실행됩니다. 그러므로 변동 사항이 생기면 템플릿을 재평가하고 해당 템플릿에 호출된 모든 메서드를 다시 호출합니다|즉, 연산 프로퍼티에 사용된 데이터가 바뀌는 경우에 한해서입니다. 다른 데이터가 바뀔때는 연산 프로퍼티를 재평가 하지 않습니다. |데이터가 아닌 업데이트에 사용해야 합니다. 바뀌는 데이터를 토대로 데이터가 아닌 내부에서 업데이트하는 작업이 있을때 Watch를 사용하는게 좋습니다.|
|**정리: 데이터 바인딩 -> {{}} 사용, 이벤트 바인딩 -> methods 사용, 페이지에 변동사항이 생기면 메서드 재실행 되길 원한다 -> methods 사용**|**정리: 다른 데이터에 의존하는 경우에만 쓰입니다.**|보통 사용할일이 별로 없습니다. 다른 데이터에 의존하는 데이터 출력엔 보통 연산 프로퍼티를 사용하기 때문입니다.|
</details>

<br>

<details>
<summary>v-bind & v-on 축약어</summary>

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
</details>

<br>

4. Dynamic Styling
- [Dynamic Styling - Class Binding](https://github.com/spacedustz/Vue/tree/main/4-Dynamic-Styling/Dynamic-Styling.md)
- [Section4 과제 완료](https://github.com/spacedustz/Vue/tree/main/4-Dynamic-Styling/Assignment)

<br>

5. Conditional Rendering
- [Conditional Rendering 시작](https://github.com/spacedustz/Vue/tree/main/5-Conditional Rendering/Conditional Rendering.md)