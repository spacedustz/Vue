## Comoisition API - methdos & computed & watcher

### Method -> General Function

이번엔 기존 Option API에서 사용하던 methods를 Composition API에선 어떻게 사용하는지 알아보겠습니다.

```javascript
<template>  
  <section class="container">  
    <h2>{{ user.name }}</h2>  
    <h3>{{ user.age }}</h3>  
    <button @click="setAge">Change Age</button>  
  </section>  
</template>  
  
<script setup>  
import { reactive } from 'vue'  
  
const user = reactive({  
  name: 'Maximilian',  
  age: 31  
})  
  
function setAge() {  
  user.age = 32  
}  
</script>
```

<br>

사실 methods를 안쓰고 단순히 setup 내부에 함수를 정의하면 되므로 따로 설명이 필요 없는 부분입니다.

<br>

### Computed Property -> Computed Function

연산 프로퍼티를 연산 함수로 바꾸는 방법도 설명이 필요 없기에 코드로 대체합니다.

```javascript
const fullName = computed(function() { return user.firstName + ' ' + user.lastName })
```

<br>

### Watcher

Composition API에서의 Watch는 `watch()`를 사용합니다.

`watch()`의 **첫번째 파라미터**는 이 함수의 의존성을 설정하는 부분이며, 감시자 함수를 실행할 시점을 알려줍니다.

즉 바뀔 값을 감시하는 것이며, 이 첫번쨰 파라미터로는 Reactive한 값이 들어와야 합니다.

<br>

**두번째 파라미터**는 실제 호출 대상인 함수를 지정해야 합니다.

이 함수는 watch에 의해 자동으로 2개의 내부 파라미터를 가지게 됩니다. **(newValue, oldValue)**

이 Value들은 첫번쨰 파라미터의 변경 전/후 의 값을 파라미터로 가지는 겁니다.

```javascript
import { ref, reactive, computed, watch } from 'vue'  
  
// Data Property  
const user = reactive({  
  age: 31,  
  firstName: ref(''),  
  lastName: ref('')  
})  
  
// Computed Function  
const fullName = computed(function() { return user.firstName + ' ' + user.lastName })  
  
// methods -> Function  
function setAge() { user.age = 32 }  
  
// Watcher  
watch(() => user.age, function (newValue, oldValue) {  
  console.log('Old Age : ' + oldValue)  
  console.log('New Age : ' + newValue)  
})
```

<br>

여러개의 값을 감시하고 싶다면 watch 함수의 첫번째 파라미터에 배열을 주고 내부에 Reactive한 값을 넣으면 됩니다.

그럼 동일하게 두번째 파라미터로 자동으로 배열이 되겠죠. 값의 순서는 의존성의 순서를 따라갑니다.

age가 첫번째니 0번쨰 인덱스이고 firstName이 두번째나 1번째 인덱스를 사용합니다.

```javascript
// Watcher  
watch([() => user.age, () => user.firstName], function (newValues, oldValues) {  
  console.log('Old Age : ' + oldValues[0])  
  console.log('New Age : ' + newValues[0])  
  console.log('Old FirstName : ' + oldValues[1])  
  console.log('New FirstName : ' + newValues[1])  
})
```