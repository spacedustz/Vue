<!-- BootStrap Grid 사용 -->
<template>
  <div class="spacing">
    <h1>Vue 3 Composition API</h1>

    <!-- v-model을 사용한 양방향 데이터 바인딩 -->
    <input v-model="inputText" />

    <!-- v-if를 사용한 조건부 렌더링 -->
    <p v-if="showMessage">This message will only appear if showMessage is true.</p>

    <!-- 버튼 클릭시 counter 값 증가 -->
    <p>Counter: {{ counter }}</p>
    <button @click="incrementCounter">Increment Counter</button>
    <button @click="minuxCounter">Minus Counter</button>
  </div>

  <div class="spacing">
    <div class="spacing">
      <label>Name:</label>
      <input v-model="person.name" type="text">
    </div>

    <div class="spacing">
      <label>Age:</label>
      <input v-model="person.age" type="number">
    </div>

    <div class="spacing">
      <label>isValid:</label>
      <input v-model="person.isValid">
    </div>
    <button @click="addPerson" class="spacing">Add Person</button>

    <!-- v-for를 사용한 반복 렌더링 -->
    <ul>
      <li v-for="(p, index) in personList" :key="index">
        <p>{{ p.name }}</p>
        <p>{{ p.age }}</p>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { ref, Ref } from 'vue';

interface Person {
  name: string,
  age: number,
  isValid: boolean
}

// ref를 사용하여 변수를 선언하고 초기 값 할당
const inputText: Ref<string> = ref('');
const showMessage: Ref<boolean> = ref(true);
const personList: Ref<Person[]> = ref([]);
const counter: Ref<number> = ref(0);
const person: Ref<Person> = ref({
  name: '',
  age: 0,
  isValid: true
});

// 함수 정의
const incrementCounter = () => {
  if (counter.value < 20) counter.value++;
};

const minuxCounter= () => {
  if (counter.value > 0) counter.value--; else counter.value = 0
};

const addPerson = () => {
  if (person.value.isValid) {
    personList.value.push({...person.value});
    person.value = { name: '', age: 0, isValid: true }; // 입력값 초기화
  }
}

</script>

<style lang="scss">
.spacing {
  margin-top: 20px; /* 여기에 원하는 간격 값을 지정하세요 */
}

</style>
