<!--<template>-->
<!--  <div></div>-->
<!--  <dialog open>-->
<!--    &lt;!&ndash; Header 슬롯 &ndash;&gt;-->
<!--    <header>-->
<!--      <slot name="header">-->
<!--        <h2>{{ title }}</h2>-->
<!--      </slot>-->
<!--    </header>-->

<!--    &lt;!&ndash; Dialog의 주 컨텐츠 &ndash;&gt;-->
<!--    <section>-->
<!--      <slot></slot>-->
<!--    </section>-->

<!--    &lt;!&ndash; 사용자가 클릭할 버튼 표시 &ndash;&gt;-->
<!--    <menu>-->
<!--      <slot name="actions"></slot>-->
<!--    </menu>-->
<!--  </dialog>-->
<!--</template>-->

<!--<script> export default { name: "BaseDialog" } </script>-->

<!--<script lang="ts" setup>-->
<!--import { defineProps } from 'vue';-->

<!--const props = defineProps({-->
<!--  title: {-->
<!--    type: String,-->
<!--    required: false-->
<!--  }-->
<!--});-->
<!--</script>-->

<!--<style scoped>-->
<!--div {-->
<!--  position: fixed;-->
<!--  top: 0;-->
<!--  left: 0;-->
<!--  height: 100vh;-->
<!--  width: 100%;-->
<!--  background-color: rgba(0, 0, 0, 0.75);-->
<!--  z-index: 10;-->
<!--}-->

<!--dialog {-->
<!--  position: fixed;-->
<!--  top: 20vh;-->
<!--  left: 10%;-->
<!--  width: 80%;-->
<!--  z-index: 100;-->
<!--  border-radius: 12px;-->
<!--  border: none;-->
<!--  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);-->
<!--  padding: 0;-->
<!--  margin: 0;-->
<!--  overflow: hidden;-->
<!--}-->

<!--header {-->
<!--  background-color: #3a0061;-->
<!--  color: white;-->
<!--  width: 100%;-->
<!--  padding: 1rem;-->
<!--}-->

<!--header h2 {-->
<!--  margin: 0;-->
<!--}-->

<!--section {-->
<!--  padding: 1rem;-->
<!--}-->

<!--menu {-->
<!--  padding: 1rem;-->
<!--  display: flex;-->
<!--  justify-content: flex-end;-->
<!--  margin: 0;-->
<!--}-->

<!--@media (min-width: 768px) {-->
<!--  dialog {-->
<!--    left: calc(50% - 20rem);-->
<!--    width: 40rem;-->
<!--  }-->
<!--}-->
<!--</style>-->