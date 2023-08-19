
해당 코드를 TypeScript 스크립트 블록을 사용하여 변환해 보겠습니다. 아래는 TypeScript를 사용하여 변환한 코드입니다:

vue
Copy code
<template>
  <div class="video" align="center">
    <video id="video" controls="controls" autoplay muted>
      <source :src="videoUrl" type="application/x-mpegURL" />
      Your browser does not support HTML5 streaming!
    </video>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';
import Hls from 'hls.js';

const videoUrl = ref('');
const baseUrl = 'http://localhost:18080';

const fetchVideo = async () => {
  try {
    const response = await axios.get<string>(`${baseUrl}/api/video`, { withCredentials: true });
    videoUrl.value = baseUrl + response.data;
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

    console.log(response.data);
  } catch (error) {
    console.error('비디오 가져오기 실패:', error);
  }
};

onMounted(() => {
  fetchVideo();
});
</script>

<style scoped>

</style>




