<!-- BootStrap Form Text 사용 -->
<template>
  <!-- Enter를 눌렀을때 input Value를 통해 할일 등록 -->
  <input
      type="text"
      class="form-control"
      placeholder="할일을 입력해주세요."
      :value="inputValue"
      @keyup.enter="handleAddItem"
  />
</template>

<script lang="ts">
export default {
  name: "TodoInput",
};
</script>

<script lang="ts" setup>
import { ref, defineEmits } from "vue";

// Reactive Data Property
const inputValue = ref("");

// Emit Event 등록
const emit = defineEmits([
    "update:todo"
]);

// 할일을 추가하는 함수, 입력값을 처리하고 update:todo 이벤트를 발생시킴.
const handleAddItem = (event: Event) => {

  // 사용자의 입력값을 가져오기 위해 이벤트 객체의 target 속성을 사용하여 형변환, 입력 요소의 값(value)를 가져옴
  const value = (event.target as HTMLInputElement).value;

  // 입력값이 없으면 함수 실행 종료
  if (!value) return ;

  // input Property의 값을 사용자의 입력값으로 업데이트
  inputValue.value = value;

  // update:todo 이벤트를 발생 시킴, 이벤트에는 새로운 할일 항목을 나타내는 객체가 전달됨
  emit("update:todo", {
    id: 1,
    title: value,
    status: "active",
  });

  // 할일 추가 후 입력값 초기화
  inputValue.value = "";
}
</script>

<script lang="ts" setup></script>

<style lang="scss">
.todo-input {
  font-size: 14px;

  &::placeholder {
    font-size: 14px;
  }
}
</style>