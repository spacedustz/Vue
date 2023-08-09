## Vue 3 Composition API

지금까지 배운 Option API에서는 data, methods, computed property, watcher등을 사용했습니다.

Composition API란 컴포넌트를 작성하는 2가지 방법 중 하나일뿐 Option API 보다 무조건 좋은건 아닙니다.

<br>

**Composition API를 사용하는 이유**

- Option API는 필요한 데이터 프로퍼티, 함수, 연산 프로퍼티 등등이 각 컴포넌트마다 전부 다 분산되있거나 중복 로직이 발생
- Option API는 컴포넌트 로직의 재사용이 까다롭다.

<br>

**Option API**

로직을 여러가지 옵션 (data, methods 등)에 나누어 놓는 방식

```javascript
// Option API
data() {
    return {
        name: 'Max'
    };
},

methods: {
    do Smth()
}
```

<br>

**Composition API**

`setup()` 함수를 사용하여 로직을 번들로 만들어 컴포넌트 구성 객체에 추가하는 방식

```javascript
// Composition API
setup() {
const name = ref('Max');
function doSmth() { ... }
return { name, doSmth };
}
```

<br>

템플릿 코드나 v-if, 데이터 바인딩 같은 기능들은 Vue 2-3 모두 똑같고 컴포넌트 구성 객체의 코드 설정만 바꾸는것이 Composition API라고 할 수 있습니다.

즉, 기존의 컴포넌트 로직을 구성하는

- data
- methods
- computed
- watch

옵션을 Composition의 setup() 함수로 대체 가능하다는 점입니다.

<br>

추가적으로 Vue의 Lifecycle 함수들도 약간의 변경이 있는데 이건 나중에 배워보도록 하고,

컴포넌트를 구성하는 기존의 Option API의 변경점부터 배워보겠습니다.

---

## Data -> Refs

위에 말했듯이 Composition API는 Property, emits 등과 같은 다른 기능들은 똑같고,

컴포넌트를 구성하는 방법만이 바뀌었을 뿐입니다.

그 중 기존 Option API 에서의 Data를 Ref로 대체하는 방법을 배워보겠습니다.

<br>

**App.vue**

다양한 요소를 불러올 수 있게 해주는 중요한 구문인 ref를 Import 해줍니다.

이 ref는 기존 Option API에서의 data를 대체합니다.

<br>

그리고, 이 ref는 참조를 생성하는데 DOM 요소에 대한 참조가 아닌, 값을 참조해 템플릿에서 사용 가능하게 합니다.

이 값은 아무런 값이나 생성하는 것아 아닌, 반응형 값을 생성하기 때문에 이 값을 바꾸면,

Vue도 인식하고 감시할 수 있어서 값이 바뀌거나 템플릿에 바인딩되면 Vue는 DOM에서 템플릿을 업데이트 합니다.

<br>

이제 위에서 말했듯 ref는 값을 생성하니까 그 값을 변수나 상수에 저장하면 **반응형 값이** 됩니다.

그리고, setup()은 템플릿에서 사용할 구성 요소를 작성 후, 항상 객체를 반환합니다.

이 객체는 실제 값을 바인딩 하거나 사용할 수 있습니다.



```javascript
<script>
import { ref } from 'vue';

export default {
	// 이런 옵션들은 기존 Vue2와 동일함
	component: [],
	props: [],

	// Composition API
	setup() {
		// ref에 저장하는 값은 value가 됨
		const userName = ref('Maximilian');


		return {
			userName: uName;
		};
		
	}
}
</script>
```

<br>

**주의할 점**

setup() 함수는 컴포넌트의 시작 프로세스 이전에 적용되므로 기존 Vue2 Option API를 사용할때,

자주 사용하던 this 키워드는 못쓰게 되었고 프로퍼티에도 접근할 수 없습니다.

왜냐면 컴포넌트가 실행되기 전에 실행되는 프로세스 중 하나가 setup() 이기 때문입니다.

<br>

이제 **반응형 값**이라는게 무슨 의미인지 타이머를 설정해서 알아보겠습니다.

타이머 내의 함수에서 ref의 값을 Max로 바꿔주었습니다.

```javascript
<script>
import { ref } from 'vue';

export default {
	// 이런 옵션들은 기존 Vue2와 동일함
	component: [],
	props: [],

	// Composition API
	setup() {
		// ref에 저장하는 값은 value가 됨
		const userName = ref('Maximilian');

		// 2초가 지나고 변화를 감지해 DOM 업데이트
		setTimeOut(function() {
			userName.value = 'Max';
		}, 2000);

		return {
			userName: uName;
		};
		
	}
}
</script>
```

<br>

즉 setup 함수에서 ref를 활용한 경우 Vue가 자동으로 변화를 감지하고 DOM을 업데이트 합니다.

---

## Setup 함수 바꾸기

많은 컴포넌트에서 컴포지션 API를 사용하는 경우, 이전 섹션에 따라 내보낸 객체에 `setup()`메서드를 추가하면 성가실 수 있습니다.

특히`export default { ... }`을 추가하고 컴포넌트의`<template>` 에서 사용할 수 있는 값을 반환해야 해서 그렇습니다.

<br>

Vue.js는 이를 대체할 구문을 제공합니다. 

`setup()` 메서드를 수동으로 추가하지 않고 `<script setup>`을 사용할 수 있습니다.

다음과 같은 코드를:

```javascript
<script>
import { ref } from 'vue';

export default {
	// 이런 옵션들은 기존 Vue2와 동일함
	component: [],
	props: [],

	// Composition API
	setup() {
		// ref에 저장하는 값은 value가 됨
		const userName = ref('Maximilian');

		// 2초가 지나고 변화를 감지해 DOM 업데이트
		setTimeOut(function() {
			userName.value = 'Max';
		}, 2000);

		return {
			userName: uName;
		};
		
	}
}
</script>
```

<br>

다음으로 대체 가능 합니다.

```javascript
<script setup>
import { ref } from 'vue';

const uName = ref('Maximilian');

setTimeOut(function() {
	uName.value = 'Max';
}, 2000);
</script>
```

<br>

` script setup`과 `setup()` 메서드 중 어느 것을 사용하든 여전히 같은 방식으로 작동합니다.