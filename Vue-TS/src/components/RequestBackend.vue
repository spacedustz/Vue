<template>
  <div class="data-container">
    <h1>데이터 가져오기 연습</h1>
    <ul class="item-list">
      <!-- item 배열 순회 -->
      <li v-for="item in items" :key="item.eventId" class="item">

        <h2 class="item-title">Event ID: {{ item.eventId }}</h2>
        <p class="item-subtitle">Frame ID: {{ item.frameId }}</p>

        <div v-if="itemHasExtra(item)" class="item-extra">
          <h3 class="extra-title">Extra Information</h3>
          <p class="extra-id"> Extra ID : {{ item.extra.id }}</p>

          <br>
          <h3>BBox</h3>
          <p>Bbox ID : {{ item.extra.bbox.id }}</p>
          <p class="extra-bbox-height">Bbox Height: {{ getBboxHeight(item.extra) }}</p>
          <p class="extra-bbox-width">Bbox Width: {{ getBboxWidth(item.extra) }}</p>

          <br>
          <h3 class="vertices-title">Vertices</h3>
          <ul class="vertices-list">
            <li v-for="vertex in item.extra.vertices" :key="vertex.id" class="vertex">
              <p class="vertex-id"><strong>Vertex ID:</strong> {{ vertex.id }}</p>
              <p class="vertex-x">X: {{ vertex.x }}</p>
              <p class="vertex-y">Y: {{ vertex.y }}</p>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { fetchJson } from "@/stores/api";

interface Item {
  eventId: number;
  frameId: number;
  extra: Extra;
}

interface Extra {
  id: number;
  bbox: Bbox;
  vertices: Vertex[];
}

interface Vertex {
  id: number;
  x: number;
  y: number;
}

interface Bbox {
  id: number;
  height: number;
  width: number;
}

const items = ref<Item[]>([]);

const fetchData = async () => {
  try {
    const response = await fetchJson();
    response.map(data => items.value.push(data));
  } catch (error) {
    console.error('데이터를 가져오는 동안 오류 발생:', error);
  }
};

const itemHasExtra = (item: Item): boolean => {
  return !!item.extra;
};

const getBboxHeight = (extra: Extra): number => {
  return extra.bbox.height;
};

const getBboxWidth = (extra: Extra): number => {
  return extra.bbox.width;
};

onMounted(() => {
  fetchData();
  console.log(items)
});
</script>

<style scoped>
.data-container {
  padding: 20px;
  background-color: #f6f6f6;
  border-radius: 5px;
}

.item-list {
  list-style-type: none;
  padding-left: 0;
}

.item {
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
}

.item-title, .item-subtitle, .extra-title, .vertices-title {
  margin-top: 10px;
}

.item-extra {
  background-color: #e9e9e9;
  padding: 10px;
  margin-top: 10px;
  border-radius: 3px;
}

.vertices-list {
  list-style-type: none;
  padding-left: 0;
}

.vertex {
  margin-top: 5px;
}
</style>