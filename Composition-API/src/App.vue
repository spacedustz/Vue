<!--<template>-->
<!--  <section class="container">-->
<!--    <h2>{{ user.name }}</h2>-->
<!--    <h3>{{ user.age }}</h3>-->
<!--  </section>-->
<!--</template>-->

<!--<script setup>-->
<!--import { ref } from 'vue'-->

<!--// const name = ref('Maximilian');-->
<!--// const age = ref(31);-->

<!--const user = ref({-->
<!--  name: 'Maximilian',-->
<!--  age: 31-->
<!--})-->

<!--  setTimeout(function() {-->
<!--    user.value.name = 'Max'-->
<!--    user.value.age = 32-->
<!--  }, 2000)-->
<!--</script>-->

<template>
  <section class="container">
    <user-data :first-name="user.firstName" :last-name="user.lastName"></user-data>
<!--    <h2>{{ fullName }}</h2>-->
<!--    <h3>{{ user.age }}</h3>-->
    <button @click="setAge">Change Age</button>
    <div>
      <input type="text" placeholder="First Name" v-model="user.firstName" />
      <input type="text" placeholder="Last Name" ref="lastNameInput" />
      <button @click="setLastName">Set Last Name</button>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive, watch, provide } from 'vue'
import UserData from "./components/UserData"

// Provide, 1: 임의 식별자 2: 전달하고자 하는 실제 값
provide('userAge', user.age)

// Data Property
const user = reactive({
  age: 31,
  firstName: ref(''),
  lastName: ref('')
})

const lastNameInput = ref(null);

// Computed Function
// const fullName = computed(function() { return user.firstName + ' ' + user.lastName })

// methods -> Function
function setAge() { user.age = 32 }
function setLastName() { user.lastName = lastNameInput.value.value; }

// Watcher
watch([() => user.age, () => user.firstName], function (newValues, oldValues) {
  console.log('Old Age : ' + oldValues[0])
  console.log('New Age : ' + newValues[0])
  console.log('Old FirstName : ' + oldValues[1])
  console.log('New FirstName : ' + newValues[1])
})
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>