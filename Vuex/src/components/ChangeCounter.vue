<template>
  <button @click="addOne">Add 1</button>
</template>

<script>
export default {
  name: "ChangeCounter"
}
</script>

<script setup>
import { useStore } from "vuex";

const store = useStore();

function addOne() {
  // Mutation의 이름을 commit에 넣어 Mutation을 불러옴
  store.commit('increment');
}
</script>

<style scoped>

</style>