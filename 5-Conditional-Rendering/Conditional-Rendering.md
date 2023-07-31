## Conditional Rendering

이번엔 컨텐츠의 조건부 렌더링에 대해 배워보겠습니다.

특정 조건을 만족할 때 페이지의 일정 부분이 렌더링 되도록 하고 컨텐츠 목록을 출력하는 방법을 알아볼겁니다.

<br>

예를 들어 강의 목표, 상품 목록 등 동적 렌더링이 필요한 부분을 작업해 볼겁니다.

그리고 목록이 늘어나면 새 항목이 렌더링 되고, 목록이 줄어들면 항목이 제거될 겁니다.

<br>

**학습할 목록**

1. 렌더링 할 상품이 없을때 특정 텍스트를 표시할 수 있는 Vue 도구
2. 데이터 목록을 출력하는 방법
3. Vue 내부 동작 과정의 이해와 중요한 최적화 방법 1가지 (데이터 목록을 출력할 때 사용)

---

## 구현

![img](https://raw.githubusercontent.com/spacedustz/Obsidian-Image-Server/main/img/conditional-rendering.png)

<br>

지금 위 페이지에선 Input에 입력값을 넣고 Add Goal을 눌러도 아무런 반응이 없는 상태입니다.

이제 해볼것은 입력값을 넣고 Add Goal을 눌렀을 때 결과 리스트에 추가하는 것 입니다.

또, 목록 항목을 클릭해서 목록에서 삭제도 할 수 있어야 하고, Goal 리스트에 문자열이 추가되면

"No goals have been added yet" 글자도 안보이게 처리해야 합니다.

<br>

### **사용할 Directives**

> **v-if & v-else & v-if-else** 

특정 조건을 검사 후 조건이 충족하면 자바스크립트 코드를 실행하는 디렉티브입니다.

단, **v-else를 사용할때 주의점은 v-if가 있는 요소의 바로 다음에 위치해야 동작합니다.**

<br>

> **v-show**

v-show와 v-if의 차이점을 설명해보자면,

v-if는 실제로 DOM에서 요소를 추가/제거를 합니다. 즉, DOM의 일부가 되는 요소가 무엇인지를 결정합니다.

반면 v-show는 CSS를 통해 항목을 숨기거나 표시합니다.

어떤 접근방식이 더 나을까요?

<br>

CSS로 항목을 표시하고 숨기면 매번 요스를 추가/삭제 하는 v-if와 달리 성능에 영향을 주지 않습니다.

반대로 DOM에 당장 필요하지 않은 요소가 많이 있다면 CSS를 이용한 방법이 이상적이지 않을 수 있습니다.

<br>

정리하면 일반적으로 v-if를 사용하는게 좋으며 이를 v-show로 대체하는 경우는,

가시성의 상태가 자주 바뀌는 요소가 있을 때 입니다.

만약 요소에 토글 버튼이 있어서 가시성 상태가 항상 전환되는 경우일때 v-show를 쓰면 됩니다.

<br>

> **v-for**

데이터를 순회할때 사용하는 기능입니다. `in` 키워드를 사용하여 배열에 루프 트리거를 줄 수 있습니다.

<br>

### **Goals 배열이 비어있을 때만 "No goals have been added yet" 출력**

```html
<!-- 바꾸기 전 -->
<p>No goals have been added yet - please start adding some!</p>

<!-- 바꾼 후 -->
<p v-if="goals.length === 0">No goals have been added yet - please start adding some!</p>
```

<br>

이제 임시로 goals 배열에 아무 값이나 넣고 새로고침 해보면 p태그의 문단이 사라진걸 확인할 수 있습니다.

<br>

### **Add Goal Button을 눌렀을때 goals 배열에 값 추가하기**

사용자가 입력한 값을 내부 값으로 저장하고 그 값을 goals 배열에 추가하기 위한 data 프로퍼티인 `enteredGoalValue` 를 하나 추가합니다.

그리고, addGoal() 함수를 만들어 리스트에 추가하는 로직을 작성 후, HTML에 바인딩 해줍니다.

```javascript
const app = Vue.createApp({
  data() {
    return {
      enteredGoalValue: '',
      goals: []
    };
  },

  methods: {
    addGoal() {
      this.goals.push(this.enteredGoalValue);
      this.enteredGoalValue = '';
    }
  }
});

app.mount('#user-goals');
```

<br>

```html
<!-- 데이터 바인딩 -->
<input type="text" v-model="enteredGoalValue" />
<button @click="addGoal">Add Goal</button>
```

이제 내부 로직인 goals의 배열에 데이터는 추가되었습니다. 하지만 아직 출력하는 로직은 작성하지 않았기 때문에 이제 출력을 해봅시다.

<br>

### Goals 배열의 업데이트된 바인딩 값 출력하기

위에서 input 이나 p 문단에 조건부로 값 바인딩을 하거나 출력을 했는데 결과값도 조건부로 출력해야 합니다.

목표(Goal)이 있을때만 출력을 해야 합니다.

이 리스트를 출력하는 ul 태그에는 v-else-if, v-else를 사용해보겠습니다.

위에서 언급한것과 같이 **v-else를 사용할때 주의점은 v-if가 있는 요소의 바로 다음에 위치해야 동작합니다.**

```html
<p v-if="goals.length === 0">No goals have been added yet - please start adding some!</p>

<ul v-else-if="goals.length > 0">
  <li>Goal</li>
</ul>

<p v-else>Error</p>
```

<br>

이렇게 어떤 조건에 해당하느냐에 따라 출력되는 값이나 화면이 달라지게 설정할 수 있습니다.

<br>

여기서 또 다른 방법은, v-show를 v-if나 v-if-else 등을 대신해서 사용할 수도 있습니다만,

위에서 설명한 v-show의 경우에는 적합하지 않으니 v-if, v-else를 사용하였습니다.

<br>

이제 v-for를 이용해 자바스크립트 goals 배열에 담긴 데이터를 출력 해보겠습니다.

위 코드에서 li 태그에서 모든 Goal을 출력하지만 목표를 각각 찾아서 li 태그 사이에 각 목표의 텍스트를 출력 할 겁니다.

```html
<ul v-else-if="goals.length > 0">
  <li v-for="goal in goals">{{ goal }}</li>
</ul>
```

<br>

이제 결과를 확인해보면 각각의 Goal이 잘 출력되고 개발자 도구를 보면 Goal을 추가할때마다 li 태그를 생성해서 추가해줍니다.

![img](https://raw.githubusercontent.com/spacedustz/Obsidian-Image-Server/main/img/conditional-rendering2.png)

<br>

즉 v-for로 인해 컨텐츠 목록을 렌더링하고 변경 시 업데이트 할 수 있습니다.

li 요소가 추가될떄마다 전체 목록을 Re-Rendering 하는것이 아닌 추가한 li 태그만 DOM에 동적으로 업데이트 해줌으로써

성능 측면에서도 굉장히 좋은 디렉티브라고 할 수 있습니다.