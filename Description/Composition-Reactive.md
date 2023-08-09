## Reactive Object

위의 코드처럼 상수로 어떠한 값들을 선언해 보았습니다.

이번엔 반응형 객체를 만들어서 출력해보고 그 내부 동작과정을 학습해 보겠습니다.

```javascript
<template>  
  <section class="container">  
    <h2>{{ user.name }}</h2>  
    <h3>{{ user.age }}</h3>  
  </section>  
</template>

<script setup>  
import { ref } from 'vue'  
  
// const name = ref('Maximilian');  
// const age = ref(31);  
  
const user = ref({  
  name: 'Maximilian',  
  age: 31  
})  
  
  setTimeout(function() {  
    user.value.name = 'Max'  
    user.value.age = 32  
  }, 2000)  
</script>
```

<br>

위 코드처럼 ref의 값으로 객체를 전달하면 Vue가 객체 내부의 변화를 파악할 수 있도록 객체는 프록시로 래핑 됩니다.

setup 함수가 객체를 반환하고, 내부적으로 미가공된 ref 객체를 받으며 객체 내부 반응성을 인지합니다.

그리고 새 값이 지정되거나 템플릿에서 사용될 때를 알기 때문입니다.

하지만 이렇게 객체를 다룰 경우 객체만을 위해 만들어진 Reactive를 사용하는 것이 더 좋습니다.

<br>

**Reactive 사용**

Reactive는 ref와 비슷하지만, 객체 전용으로 만들어졌습니다.

Ref는 어떤 값이던지 다 받을 수 있었지만 reactive() 함수는 값으로 **객체**만을 이용합니다.

<br>

Reactive는 객체를 프록시로 래핑해서 반응형으로 만들어 객체를 사용할 수 있게 해줍니다.

즉, value 프로퍼티로 객체를 래핑하지 안기 때문에,

`user.value.name` 부분에서 value를 거치지 않고 `user.name`으로 사용이 가능하다는 의미입니다.

```javascript
<template>  
  <section class="container">  
    <h2>{{ user.name }}</h2>  
    <h3>{{ user.age }}</h3>  
  </section>  
</template>  
  
<script setup>  
import { reactive } from 'vue'  
  
// const name = ref('Maximilian');  
// const age = ref(31);  
  
const user = reactive({  
  name: 'Maximilian',  
  age: 31  
})  
  
  setTimeout(function() {  
    user.name = 'Max'  
    user.age = 32  
  }, 2000)  
</script>
```

<br>

#### Reactivity - Advanced

isRef() = Ref 값이 반응형인지 확인
isReactive() = 객체가 반응형인지 확인
toRefs() = 파라미터로 들어온 반응형 객체 내부에 중첩된 값을 반응형으로 만듬 (즉, Ref로 변환)