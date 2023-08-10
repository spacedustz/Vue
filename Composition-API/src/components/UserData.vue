<template>
  <div>
    <h2>{{ userName }}</h2>
    <h3>{{ age }}</h3>
  </div>
</template>

<script setup>
import { computed, defineProps, inject, isRef } from "vue";

// Props
const props = defineProps({
  firstName: String,
  lastName: String,
})

// defineEmits
// const emit = defineEmits({});

// Computed
const userName = computed(() => { return props.firstName + ' ' + props.lastName })

// Inject, 1: Provide의 첫번째 파라미터
const age = inject('userAge');
console.log('Age is Ref? ' + ' ' + isRef(age))
</script>

<!--<script>-->
<!--import { computed } from 'vue';-->

<!--export default {-->
<!--  props: ['firstName', 'lastName', 'age'],-->
<!--  setup(props, context) {-->
<!--    const name = computed(function() { return props.firstName + ' ' + props.lastName })-->

<!--    console.log(context)-->

<!--    // emit-->
<!--    context.emit('save-data', 1)-->

<!--    return { userName: name }-->
<!--  }-->
<!--}-->
<!--</script>-->

<style scoped>

</style>