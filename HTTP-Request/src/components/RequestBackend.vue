<template>
  <div>
    <h1>데이터 가져오기 연습</h1>
    <ul>
      <!-- item 배열 순회 -->
      <li v-for="item in items" :key="item.id">
        <h3>Event ID: {{ item.eventId }}</h3>
        <p>Frame ID: {{ item.frameId }}</p>

        <div v-if="itemHasExtra(item)">
          <h4>Extra Information</h4>
          <p>Bbox Height: {{ getBboxHeight(item.extra) }}</p>
          <p>Bbox Width: {{ getBboxWidth(item.extra) }}</p>

          <h4>Vertices</h4>
          <ul>
            <li v-for="vertex in item.extra.vertices" :key="vertex.id">
              Vertex ID: {{ vertex.id }}
              <p>X: {{ vertex.x }}</p>
              <p>Y: {{ vertex.y }}</p>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const items = ref([]);

const fetchData = async () => {
  try {
    const response = await axios.get('http://localhost:18080/api/json', { withCredentials: true });
    items.value = response.data;
    console.log(response.data);
  } catch (error) {
    console.error('데이터를 가져오는 동안 오류 발생:', error);
  }
};

const itemHasExtra = (item) => {
  return !!item.extra;
};

const getBboxHeight = (extra) => {
  return extra.bbox.height;
};

const getBboxWidth = (extra) => {
  return extra.bbox.width;
};

onMounted(() => {
  fetchData();
});
</script>

<!-- 타입스크립트 코드 -->
<!--<script setup lang="ts">-->
<!--import { ref, onMounted } from 'vue';-->
<!--import axios from 'axios';-->

<!--interface Vertex {-->
<!--  id: number;-->
<!--  x: number;-->
<!--  y: number;-->
<!--}-->

<!--interface Bbox {-->
<!--  height: number;-->
<!--  width: number;-->
<!--}-->

<!--interface Extra {-->
<!--  bbox: Bbox;-->
<!--  vertices: Vertex[];-->
<!--}-->

<!--interface Item {-->
<!--  id: number;-->
<!--  frameId: number;-->
<!--  extra?: Extra;-->
<!--}-->

<!--const items = ref<Item[]>([]);-->

<!--const fetchData = async () => {-->
<!--  try {-->
<!--    const response = await axios.get<Item[]>('http://localhost:8081/api/json', { withCredentials: true });-->
<!--    items.value = response.data;-->
<!--    console.log(response.data);-->
<!--  } catch (error) {-->
<!--    console.error('데이터를 가져오는 동안 오류 발생:', error);-->
<!--  }-->
<!--};-->

<!--const itemHasExtra = (item: Item): boolean => {-->
<!--  return !!item.extra;-->
<!--};-->

<!--const getBboxHeight = (extra: Extra): number => {-->
<!--  return extra.bbox.height;-->
<!--};-->

<!--const getBboxWidth = (extra: Extra): number => {-->
<!--  return extra.bbox.width;-->
<!--};-->

<!--onMounted(() => {-->
<!--  fetchData();-->
<!--});-->
<!--</script>-->

<style scoped>

</style>