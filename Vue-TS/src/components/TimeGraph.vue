<template>
  <div>
    <line-chart :chart-data="chartData" :options="chartOptions"></line-chart>
  </div>
</template>

<script setup lang="ts">
import {ref, onMounted, watchEffect } from 'vue';
import { Line } from 'vue-chartjs';
import { fetchFrame } from "@/services/ApiService";

const frameData = ref<Array<any>>([]);

const chartData = ref({
  labels: frameData.map(data => data.frameId),
  datasets: [
    {
      label: '프레임 카운트',
      data: ['count', 'frame_id', 'frame_time', 'instance_id', 'system_date', 'system_timestamp'],
      borderColor: 'rgba(75, 192, 192, 1)',
      fill: false,
    },
  ],
});

const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: false,
});

// 주기적으로 Watch를 걸고 데이터가 변경될 경우 frameData를 업데이트 함
// 이 방법은 API에 많은 부담을 줄 수 있으므로, 실제 프로덕트에서는 웹소켓이나 다른 방법 권장
watchEffect(async () => {
  setInterval(async () => {
    frameData.value = await fetchFrame();
  }, 10000);
})

onMounted(async () => {
  try {
    frameData.value = await fetchFrame();
    const frames = response.data;

  } catch (error) {
    console.error('데이터를 가져오는 중 오류 발생:', error);
  }
});
</script>

<style scoped></style>