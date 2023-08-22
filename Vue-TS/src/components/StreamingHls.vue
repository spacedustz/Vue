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
import { fetchJson } from "@/services/ApiService";

const animatedBlock = ref(false);
const videoUrl = ref('');

const fetchVideo = async () => {
  try {
    videoUrl.value = <string>await fetchJson();
    console.log('Video URL:', videoUrl.value);

    /**
     * 주의할 점은, TypeScript 환경에서 getElementById와 같은 DOM 관련 메서드는 반환값의 타입이
     * 항상 HTMLElement | null이므로 타입 어설션 (Type Assertion)을 사용하여 HTMLVideoElement로 변환해주어야 한다는 것입니다.
     * 이 코드에서는 document.getElementById('video') as HTMLVideoElement와 같은 방식으로 어설션을 사용하여 타입을 지정하였습니다.
     */
    const video = document.getElementById('video') as HTMLVideoElement;
    console.log("is Supported ? = " + Hls.isSupported());

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(videoUrl.value);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, function () {
        console.log("Manifest_Passed Event 발생");
        video.play();
      });
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = videoUrl.value;
      video.addEventListener('loadedmetadata', function() {
        video.play();
      });
    } else {
      console.error('HLS is not Supported in This Browser');
    }

    console.log(videoUrl.value);
  } catch (error) {
    console.error('비디오 가져오기 실패:', error);
  }
};

onMounted(() => {
  fetchVideo();
});

const animateBlock = () => {
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




