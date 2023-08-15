<template>
  <div>
    <h1>데이터 가져오기 연습</h1>
    <ul>
      <li v-for="item in items" :key="item.id">
        <h3>Event ID: {{ item.id }}</h3>
        <p>Frame ID: {{ item.frameId }}</p>

        <div v-if="item.extra">
          <h4>Extra Information</h4>
          <p>Bbox Height : {{ item.extra.bbox.height }}</p>
          <p>Bbox Width : {{ item.extra.bbox.width }}</p>

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

<script>
export default {
  name: "RequestBackend"
}
</script>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

// 데이터를 저장할 리액티브 변수 생성
const items = ref([]);

// 데이터 가져오는 함수
const fetchData = async () => {
  try {
    const response = await axios.get('http://localhost:8081/api/json', { withCredentials: true });
    items.value = response.data; // 데이터를 리액티브 변수에 저장
    console.log(response.data);
  } catch (error) {
    console.error('데이터를 가져오는 동안 오류 발생:', error);
  }
};

// 컴포넌트가 마운트되면 데이터 가져오기 함수 실행
onMounted(() => {
  fetchData();
});
</script>

<style scoped>

</style>