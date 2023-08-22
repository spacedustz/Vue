<template>
  <p>================================================</p>
  <div>
    <router-link to="/json">Request Backend Json</router-link>
  </div>

  <div>
    <router-link to="/video">Streaming HLS</router-link>
  </div>

  <div>
    <router-link to="/graph">Time Graph</router-link>
  </div>

  <div>
    <router-link to="/test">Dummy Chart</router-link>
  </div>

  <router-view></router-view>
<!--  <div>-->
<!--    <RequestBackend></RequestBackend>-->
<!--  </div>-->

<!--  <div>-->
<!--    <streaming-hls></streaming-hls>-->
<!--  </div>-->

<!--  <div>-->
<!--    <time-graph></time-graph>-->
<!--  </div>-->
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<style scoped>
</style>
