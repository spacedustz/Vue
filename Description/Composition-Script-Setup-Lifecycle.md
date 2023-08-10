## Script Setup

기존 setup()를 사용하는 것보다 가독성 측면에서 더 뛰어난 Script Setup에서의 다양한 기능들의 사용법 입니다.

변경점만 간단하게 작성합니다.

<br>

```js
<template>
  <div>
    <p>Props value: {{ propsValue }}</p>
    <p>Injected value: {{ injectedValue }}</p>
    <p>Computed value: {{ computedValue }}</p>
    <p>Reactive value: {{ reactiveValue }}</p>
    <button @click="increment">Increment</button>
  </div>
</template>

<script setup>
import { ref, reactive, computed, toRefs, inject, defineProps, defineEmits, provide } from 'vue';

// Props
const props = defineProps({
  propsValue: String,
});

// Provide, 1: 임의 식별자 2: 전달하고자 하는 실제 값  
provide('userAge', user.age)

// Emit
const emit = defineEmits();

// Inject 1: Provide의 첫번째 파라미터
const injectedValue = inject('injectedValue');

// State
const count = ref(0);
const state = reactive({
  reactiveValue: 42,
});

// Computed
const computedValue = computed(() => count.value * 2);

// Methods
const increment = () => {
  count.value++;
  emit('incremented', count.value);
};

// Destructuring props and reactive state
const { propsValue } = toRefs(props);
const { reactiveValue } = toRefs(state);
</script>
```

<br>

1. `props`: `defineProps`를 통해 부모 컴포넌트로부터 전달된 프롭스를 정의합니다.

2. `emit`: `defineEmits`를 통해 이벤트를 발생시키는 함수를 정의하고, 이를 통해 부모 컴포넌트로 이벤트를 전달합니다.

3. `inject`: `inject` 함수를 사용하여 부모 컴포넌트나 상위 계층에서 제공된 값을 주입받습니다.

4. `ref`: `ref` 함수를 사용하여 반응형 변수를 생성합니다.

5. `reactive`: `reactive` 함수를 사용하여 반응형 상태 객체를 생성합니다.

6. `computed`: `computed` 함수를 사용하여 계산된 속성을 정의하고 사용합니다.

7. `toRefs`: `toRefs` 함수를 사용하여 반응형 변수 또는 상태를 단순한 ref로 변환합니다.

<br>

`script setup`을 사용하면 이러한 항목들을 더욱 간단하게 정의하고 활용할 수 있습니다.

각 항목은 Composition API의 기능을 더 편리하게 사용하도록 도와줍니다.

<br>

|Option API| -> |Composition API|
|---|---|---|
|data() {...}| -> |ref(), reactive()|
|methods: { doSmth() {...} }| -> |function doSmth() {...}|
|computed: { val() {...} }| -> |const val = computed()|
|watch: {...}| -> |watch(dep, (val, oldV) => {})|
|provide: {...} / inject: []| -> |provide(key, val) / inject(key)|

---

## Composition API - LifeCycle Hooks

|Option API| -> |Composition API|
|---|---|---|
|beforeCreate(), create()| -> |불필요 (setuo()이 대신함)|
|beforeMount(), mounted()| -> |onBeforeMount(), onMounter()|
|beforeUpdate(), updated()| -> |onBeforeUpdate(), onUpdated()|
|beforeUnmount(), unmounted()| -> |onBeforeMount(), onUnmounted()|

<br>

**beforeCreate, create()**

Option API와는 다르게 Composition API는 LifeCycle Hook을 컴포넌트 구성에 추가하지 않습니다.

내부적으로 Vue에서 함수를 불러오고 Setup에서 그 함수를 호출하죠.

기본적으로 setup은 beforeCreate, created가 실행되는 시점에 실행되기 때문입니다.

즉, setup 함수가 2개의 Lifecycle Hook을 자동으로 실행시켜 줍니다.

<br>

beforeCreate(), create()를 제외하고 나머지 LifyCycle 함수들은 전부 앞에 `on`만 붙고 사용법이 비슷합니다.