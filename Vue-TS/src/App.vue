<template>
  <div>
    <DummyComponent></DummyComponent>
  </div>

  <div>
    <RequestBackend></RequestBackend>
  </div>

  <div>
    <streaming-hls></streaming-hls>
  </div>
</template>

<script lang="ts" setup>

import DummyComponent from "@/components/DummyComponent.vue";
import RequestBackend from "@/components/RequestBackend.vue";
import StreamingHls from "@/components/StreamingHls.vue";
</script>

<style></style>