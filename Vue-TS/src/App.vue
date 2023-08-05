<template>
  <div class="container">
    <div class="row">
      <base-header />
    </div>
    <div class="row">
      <todo-input />
    </div>
    <div class="row">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts" setup>
import BaseHeader from "./components/Header.vue";
import TodoInput from "./components/Input.vue";
</script>

<style lang="scss">
#app {
  padding: 50px 0;

  .row + .row {
    margin-top: 15px;
  }
}
</style>
