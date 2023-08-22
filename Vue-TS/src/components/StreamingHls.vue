<template>
  <!-- Animation 추가 -->
  <div :class="{animate: animatedBlock}">
    <button @click="animateBlock">Animate</button>
  </div>

  <!-- RTSP -> HLS Video -->
  <div class="video" align="center">
    <video id="video" controls autoplay muted>
      <source :src="videoUrl" type="application/x-mpegURL" />
      Your browser does not support HTML5 streaming!
    </video>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Hls from 'hls.js';
import { fetchVideo } from "@/stores/api";

const animatedBlock = ref<boolean>(false);
const videoUrl = ref<string>('');

const fetchVideo = async (): Promise<void> => {
  try {
    videoUrl.value = <string>await fetchVideo();
    console.log('Video URL:', videoUrl.value);

    const video = document.getElementById('video') as HTMLVideoElement;

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(videoUrl.value);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        console.log("Manifest_Passed Event 발생");
        video.play();
      });
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = videoUrl.value;
      video.addEventListener('loadedmetadata', () => {
        video.play();
      });
    } else {
      console.error('HLS is not Supported in This Browser');
    }

    console.log(videoUrl.value);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('비디오 가져오기 실패:', error.message);
    } else {
      console.error('비디오 가져오기 실패:', error);
    }
  }
};

onMounted(fetchVideo);

const animateBlock = (): void => {
  animatedBlock.value = true;
}
</script>

<style scoped>
.video {
  /*transition: transform 0.3s ease-out;*/
}

.animate {
  /*transform: translateX(-50px);*/
  animation: slide-fade 0.3s ease-out forwards;
}

@keyframes slide-fade {
  0% { transform: translateX(0) scale(1); }
  70% { transform: translateX(-120px) scale(1.1); }
  100% { transform: translateX(-150px) scale(1); }
}

</style>




