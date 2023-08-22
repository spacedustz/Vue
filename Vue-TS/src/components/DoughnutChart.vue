<template>
  <div>
    <DoughnutChart ref="doughnutRef" :chartData="testData" :options="options" />
    <button @click="shuffleData">Shuffle</button>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';
import { DoughnutChart } from 'vue-chart-3';
import { shuffle } from 'lodash';

const data = ref<number[]>([30, 40, 60, 70, 5]);
const doughnutRef = ref<InstanceType<typeof DoughnutChart> | null>(null);

const options = ref({
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Doughnut Chart',
    },
  },
});

const testData = computed(() => ({
  labels: ['Paris', 'Nîmes', 'Toulon', 'Perpignan', 'Autre'],
  datasets: [
    {
      data: data.value,
      backgroundColor: ['#77CEFF', '#0079AF', '#123E6B', '#97B0C4', '#A5C8ED'],
    },
  ],
}));

const shuffleData = () => {
  data.value = shuffle(data.value);
};
</script>