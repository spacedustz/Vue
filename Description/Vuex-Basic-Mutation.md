## Vues 란?

Global State를 관리하기 위한 Library입니다.

State는 Data로 변환될 수 있으며 일종의 반응형 데이터로도 볼 수 있습니다.

변경될 수 있으며 무언가를 트리거하는 데이터죠.

<br>

하지만 앱의 다양한 컴포넌트에 영향을 주는 데이터인 상태를 관리하는 건 어렵습니다.

그래서 우선 상태를 Global State/LocalState 로 먼저 구분해줍니다.

<br>

### Local State

Local State는 하나의 컴포넌트 내부에서 관리도는 데이터이자 상태입니다.

해당 컴포넌트와 **프로퍼티를 통해 간적접으로 하위 컴포넌트도 영향을 줍니다.**

사용자의 입력값, 어떠한 컨테이너 표시, 숨기는 버튼 등의 예로 활용됩니다.

<br>

### Global State

Global State는 여러 컴포넌트 & 앱 전체에 걸쳐 영향을 주는 데이터이자 상태입니다.

사용자 로그인 여부, 인증 상태 등의 예로 활용됩니다.

---

## Vuex 사용

```
npm install --save vuex@next
```

<br>

**main에 Vuex 추가**

```js
import { createApp } from 'vue';  
import { createStore } from "vuex"; // Import Vuex Store  
  
import App from './App.vue';  
  
// 상태 객체를 반환하는 함수, App당 1개의 store만 가질 수 있음  
const store = createStore({  
    state() {  
        // 이 반환 객체를 어플리케이션 전체와 관련된 데이터를 보유함  
        return {  
            counter: 0  
        };  
    }  
});  
const app = createApp(App);  
  
// Store 사용  
app.use(store);  
app.mount('#app');
```

<br>

**App.vue**

```js
<template>  
  <base-container title="Vuex">  
    <!-- 주입 없이 Global State를 이용해서 데이터 전달 -->  
    <the-counter></the-counter>  
    <button @click="addOne">Add 1</button>  
  </base-container>  
</template>  
  
<script setup>  
import { useStore } from 'vuex'; // Composition에서 Vuex Store를 불러옴  
import BaseContainer from './components/BaseContainer.vue';  
import TheCounter from "@/components/TheCounter";  
  
const store = useStore(); // Vuex  
  
function addOne() {  
  store.state.counter++;  
}  
</script>
```

<br>

**TheCounter.vue**

```js
<template>  
  <h3>{{ counter }}</h3>  
</template>  
  
<script>  
export default {  
  name: "TheCounter"  
}  
</script>  
  
<script setup>  
import { computed } from 'vue';  
import { useStore } from "vuex";  
  
const store = useStore();  
  
const counter = computed(function() { return store.state.counter; })  
</script>
```

<br>

위 코드는 Composition API 기반으로 작성했으며, main app에 저장한 State 객체의 프로퍼티인

counter를 활용해 아무런 inject 없이 컴포넌트들 전역에서 제약 조건 없이 편하게 사용이 가능합니다.

<br>

이 예시는 아주 작은 어플리케이션이고, 이런 경우엔 데이터 프로퍼티가 더 효과적일 수 있으나,

Global State를 활용하는 방법에 대해 알아보고자 간단한 프로젝트를 만들어서 만들어 보았습니다.

---

## Vuex - Mutation

데이터를 변경하는 더 나은 방법에 대해 알아보겠습니다.

위에서 `store.state.counter` 이런 방식으로 호출하면 상태 변화 메커니즘에 대한 명확한 정의가 없습니다.

즉, 현재 상태에서 어디서든지 상태(데이터)를 변화시킬 수 있다는 의미입니다.

<br>

위에서 본것처럼 컴포넌트에서 **직접적으로** Store에 접근하고 있지만,

이상적인 방향은 **직접** 접근하는 방식이 아닌 Vuex의 내장된 개념인 변형(Mutation)을 사용하는게 좋습니다.

이 Mutation은 상태를 업데이트 하는 로직을 가지고 있습니다.

이는 컴포넌트 내부에 있으며, **직접** 상태를 바꾸는 대신 Mutation을 Trigger 합니다.

<br>

Mutation을 Trigger 함으로써 모든 컴포넌트는 같은 방식으로 동작한다는 걸 보장합니다.

<br>

**main app**

컴포넌트마다 상태를 변경하는 함수를 각각 작성하는 것보다,  Option API의 methods 처럼

상태를 변경하는 함수를 main app에 정의해 놓습니다.

```js
// 상태 객체를 반환하는 함수, App당 1개의 store만 가질 수 있음  
const store = createStore({  
    state() {  
        // 이 반환 객체를 어플리케이션 전체와 관련된 데이터를 보유함  
        return {  
            counter: 0  
        };  
    },  
  
    // 상태를 변경하는 Mutation    
    mutations: {  
        // 현재 상태를 파라미터로 받음  
        increment(state) {  
            state.counter = state.counter + 1;  
        }  
    }  
});
```

<br>

**App.vue**

이제 다른 모든 컴포넌트에서 아래 형식으로 Mutation을 가져와 동일한 상태 변형 함수를 사용할 수 있습니다.

```js
// Mutation의 이름을 commit에 넣어 Mutation을 불러옴
function addOne() { store.commit('increment'); }
```

<br>
#### Payload를 이용한 Mutation에 데이터 전달

특정 Mutation은 파라미터를 요구하는 것도 있습니다.