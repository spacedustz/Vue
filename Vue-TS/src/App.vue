<!-- BootStrap Grid 사용 -->
<template>
  <div class="container">

    <div class="row">
      <base-header />
    </div>

    <!-- emit을 통해 이벤트(update:todo)가 발생하면 할일 목록 추가 -->
    <div class="row">
      <todo-input @update:todo="handleUpdateTodoList" />
    </div>

    <!-- 할일 목록 바인딩 -->
    <div class="row">
      <router-view :todoList="todoList" />
    </div>

  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import BaseHeader from "./components/Header.vue";
import TodoInput from "./components/Input.vue";

interface TodoItem {
  id: number;
  title: string;
  status: "active" | "clear";
}

// 할일 목록 TodoItem 배열 타입으로 형변환
const todoList = ref([
  {
    id: 0,
    title: "청소하기",
    status: "active"
  },
  {
    id: 1,
    title: "공과금 내기",
    status: "active"
  },
  {
    id: 2,
    title: "운동 1시간 하기",
    status: "clear"
  },
] as TodoItem[]);

// TodoItem 타입의 item 파라미터를 받아서 todoList에 항목 추가
const handleUpdateTodoList = (item: TodoItem) => { todoList.value.push(item) };
</script>

<style lang="scss">
#app {
  padding: 50px 0;

  .row + .row {
    margin-top: 15px;
  }
}
</style>
