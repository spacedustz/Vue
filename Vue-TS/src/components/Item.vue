<template>
  <div class="input-group">
    <div class="input-group-text">
      <input class="form-check-input mt-0" type="checkbox" />
    </div>
    <input type="text" class="form-control" value="밥 잘먹기" disabled />
    <button class="btn btn-outline-secondary" type="button">X</button>
  </div>
</template>

<script lang="ts">
export default {
  name: "TodoItem",
};
</script>

<script lang="ts" setup></script>

<style lang="scss">
.input-group {
  padding: 0 !important;

  input {
    font-size: 14px;

    &::placeholder {
      font-size: 14px;
    }
  }

  button {
    font-size: 14px;
  }
}
</style>