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

<style scoped>

</style>