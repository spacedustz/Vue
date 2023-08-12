<template>
  <div class="input-group">

    <div class="input-group-text">

      <!-- props에서 넘어온 상태값이 clear라면 체크박스를 체크 한다 -->
      <input
          class="form-check-input mt-0"
          type="checkbox"
          :checked="props.status === 'clear'"
      />
    </div>

    <!-- props로 받아온 title을 바인딩 -->
    <input type="text" class="form-control" :value="props.title" disabled/>
    <button class="btn btn-outline-secondary" type="button">X</button>

  </div>
</template>

<script lang="ts">
export default {
  name: "TodoItem",
};
</script>

<script lang="ts" setup>
import { defineProps } from "vue";

interface TodoItem {
  id: number;
  title: string;
  status: "active" | "clear";
}

// 컴포넌트에서 필요한 Props를 전달해줌 (id, title, status)
const props = defineProps<TodoItem>();
</script>

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