<!-- 아이템 리스트 출력 -->
<template>
  <todo-item
      v-for="item in props.todoList"
      :key="Item.id"
      :id="item.id"
      :title="item.title"
      :status="item.status"
  />
</template>

<script lang="ts">
export default {
  name: "ItemList",
};
</script>

<script lang="ts" setup>
import { defineProps } from "vue";

interface TodoItem {
  id: number;
  title: string;
  status: "active" | "clear";
}

interface Props {
  todoList: TodoItem[];
}

const props = defineProps<Props>();
</script>

<style lang="scss"></style>