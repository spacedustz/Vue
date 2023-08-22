<template>
  <div>
    <line-chart :chart-data="chartData" :options="chartOptions"></line-chart>
  </div>
</template>

<script setup lang="ts">
import {onMounted, ref, watchEffect} from 'vue';
import { LineChart } from "vue-chart-3";
import {fetchFrame} from "@/stores/api";

interface FrameData {
  count: number;
  frameId: number;
  frameTime: number;
  instanceId: string;
  systemDate: string;
  systemTimestamp: number;
}

const frameData = ref<FrameData[]>([]);

const setData = async () => {
  try {
    frameData.value = await fetchFrame();
    chartData.value.datasets.map(i => i.data = frameData.value.map(data => data))

  } catch (error) {
    console.error('데이터를 가져오는 중 오류 발생:', error);
  }
};

const chartData = ref({
  labels: frameData.value.map(data => data.frameId),
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
  scales: {
    x: {
      type: 'time',
      time: {
        unit: 'day'
      }
    }
  }
});

// 주기적으로 Watch를 걸고 데이터가 변경될 경우 frameData를 업데이트 함
// 이 방법은 API에 많은 부담을 줄 수 있으므로, 실제 프로덕트에서는 웹소켓이나 다른 방법 권장
watchEffect(async () => {
  setInterval(async () => {
    frameData.value = await fetchFrame();
  }, 10000);

  chartData.value = {
    labels: frameData.value.map(data => data.frameId),
    datasets: [
      {
        label: '프레임 카운트',
        data: frameData.value.map(data => data),
        borderColor: 'rgba(75, 192, 192, 1)',
        fill: false,
      },
    ],
  };
})

onMounted(async () => {
  await setData();
});
</script>

<style scoped></style>