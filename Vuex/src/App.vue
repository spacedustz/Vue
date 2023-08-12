<template>
  <base-container title="Vuex">
    <!-- 주입 없이 Global State를 이용해서 데이터 전달 -->
    <the-counter></the-counter>
    <button @click="addOne">Add 1</button>
    <change-counter></change-counter>
  </base-container>
</template>

<script setup>
import { useStore } from 'vuex'; // Composition에서 Vuex Store를 불러옴
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from "@/components/TheCounter";
import ChangeCounter from "@/components/ChangeCounter";

const store = useStore(); // Vuex

function addOne() {
  // Mutation의 이름을 commit에 넣어 Mutation을 불러옴
  store.commit("increment");
}
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
</style>