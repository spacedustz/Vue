<template>
  <div>
    <line-chart :chart-data="chartData" :options="chartOptions"></line-chart>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { Line } from 'vue-chartjs';
import axios from 'axios';

const chartData = ref({
  labels: [],
  datasets: [
    {
      label: '프레임 카운트',
      data: [],
      borderColor: 'rgba(75, 192, 192, 1)',
      fill: false,
    },
  ],
});

const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: false,
});

onMounted(async () => {
  try {
    const response = await axios.get('/api/csv'); // 실제 API 엔드포인트로 대체하세요
    const frames = response.data;

    const labels = frames.map((frame) => frame.systemDate); // 'systemDate'가 필드 이름인 것으로 가정
    const data = frames.map((frame) => frame.count);

    chartData.value.labels = labels;
    chartData.value.datasets[0].data = data;
  } catch (error) {
    console.error('데이터를 가져오는 중 오류 발생:', error);
  }
});
</script>

<style scoped></style>