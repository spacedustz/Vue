## Dynamic Styling

이제까지 Vue의 Interpolation, v-bind를 이용한 데이터 바인딩, Computed Property나 Watch 같은 기능을 이용한 Vue의 반응성과 이벤트 바인딩에 대해 배웠습니다.

<br>

이번엔 스타일링 중에서도 동적 스타일링에 대해 배워보겠습니다.

Vue에서 Dynamic Styling을 사용하면 이벤트에 따른 반응으로써 페이지 항목의 스타일을 동적으로 바꿀 수 있습니다.

예를 들어 클릭이나 사용자가 어딘가로 이동하는 경우에요.

```html
    <section id="styling">
      <div class="demo"></div>
      <div class="demo"></div>
      <div class="demo"></div>
    </section>
```

<br>

위의 HTML div 를 클릭할 수 있고, 활성화된 div를 강조 표시해 보겠습니다.

저번에 배웠던 데이터 프로퍼티 또는 데이터 객체를 만들고 div 태그를 추적하겠습니다.

```html
    <section id="styling">
      <div
        class="demo"
        :style="{borderColor: boxASelected ? 'red' : '#ccc'}"
        @click="boxSelected('A')"></div>
      <div class="demo" @click="boxSelected('B')"></div>
      <div class="demo" @click="boxSelected('C')"></div>
    </section>
```

<br>

```javascript
Vue.createApp({
  data() {
    return {
      boxASelected: false,
      boxBSelected: false,
      boxCSelected: false
    };
  },

  methods: {
    boxSelected(box) {
      if (box === 'A') {
        this.boxASelected = true;
      } else if (box === 'B') {
        this.boxBSelected = true;
      } else if (box === 'C') {
        this.boxCSelected = true;
      }
    }
  }
}).mount('styling');
```

<br>

위 코드에서 기존 html의 Inline Styling을 할 수 있는 style 속성에 v-bind의 축약어인 `:`를 붙임으로써 동적으로

boxASelected의 상태에 따라 삼항연산식을 사용하여 동적으로 style을 변경할 수 있습니다.

<br>

위 코드의 경우 boxASelected가 true면 red, false면 `#ccc` Hex Code가 적용되게 해뒀습니다.

그리고 `:style="{borderColor}"`를 설명하자면 css의 border-color를 적어도 되지만 그렇게 되면 `{}` 안에 객체를 지정해야 하기 떄문에

`' '`를 붙여줘야 하므로 카멜 케이스를 써서 borderColor로 지정해주었습니다.

지금은 동적 스타일링에 대해 학습했으므로 박스의 선택 해제는 구현하지 않겠습니다.

---

## 동적으로 CSS 클래스 추가하기

위 처럼 인라인 방식으로 style을 동적 바인딩해도 잘 작동하지만, 같은 줄의 다른 모든 스타일이 무시되기 때문에 좋은 선택이 아닙니다.

그래서 모던 웹 개발과 CSS 에서 인라인 방식의 스타일링을 지양하는 편입니다.

<br>

따라서 위의 모든 코드를 삭제하고 동적으로 CSS 클래스를 추가하는 방법을 배워보겠습니다.

css 파일로 가서 새 css 클래스를 대충 만들어서 border-color를 지정해줍니다.

```css
...

.active {
  border-color: red;
  background-color: salmon;
}
```

<br>

그리고 다시 HTML로 돌아가서 새로 만든 CSS 클래스를 이용하여 동적 스타일링을 해봅시다.

스타일 부분에도 Vue는 특별한 구문을 지원합니다.

v-bind를 사용할 경우 객체 구문을 지원하고 프로퍼티를 추가할 수 있는데, 해당 프로퍼티 이름은 CSS 클래스를 반영합니다.

그리고 그 프로퍼티의 값이 true/false 일때 class의 추가 여부를 보여줍니다.

```html
<div :class="{demo: true, active: boxASelected}" @click="boxSelected('A')"></div>
```

<br>

위 코드에서 div 구문의 기본적인 스타일은 CSS의 demo 클래스로 적용되지만, 

boxASelected 함수의 값이 true라면 CSS의 active 클래스의 Styling이 동적으로 바인딩됩니다.

위 코드를 더 간결하고 가독성 있게 변경해보면,

```html
<div class="demo" :class="{active: boxASelected}" @click="boxSelected('A')"></div>
```

<br>

v-bind를 이용해 바인딩하지 않고 하드코딩된 class를 demo로 지정함으로써 기본적인 CSS 클래스는 demo를 사용합니다.

그 후 바인딩된 `:class`를 이용해 active 객체의 값이 boxASelected=true가 되면 동적 스타일링이 적용되는 코드입니다.

마지막으로, 박스의 선택 해제 토글도 쉽게 구현할 수 있습니다.

```javascript
  methods: {
    boxSelected(box) {
      if (box === 'A') {
        this.boxASelected = !this.boxASelected;
      } else if (box === 'B') {
        this.boxBSelected = !this.boxBSelected;
      } else if (box === 'C') {
        this.boxCSelected = !this.boxCSelected;
      }
    }
  }
```

---

## 클래스 바인딩을 연산 프로퍼티로 대체하기

저번에 동적 스타일링을 위해 클래스 바인딩을 사용했었는데 이렇게 HTML에 로직이 있는것은 좋은 방법이 아닙니다.

```html
<div class="demo" :class="{active: boxASelected}" @click="boxSelected('A')"></div>
```

<br>

위 코드는 간단한 예제이지만 바인딩 할 클래스가 많거나 로직이 복잡해지면 가독성이 떨어질겁니다.

이제 저 로직을 HTML에서 빼기 위해 저번에 학습한 Computed Property를 다시 사용해보겠습니다.

```javascript
  computed: {
    boxAClasses() {
      return { active: this.boxASelected };
    }
  }
```

<br>

```html
<div class="demo" :class="boxAClasses" @click="boxSelected('A')"></div>
```

<br>

위처럼 HTML 내의 로직을 Vue로 빼면 HTML 코드의 가독성이 좋아질 뿐 아니라 더 복잡한 동적 코드가 있을 경우 매우 유용하게 사용할 수 있습니다.