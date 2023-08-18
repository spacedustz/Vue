<template>
  <div class="video" align="center">
    <video id="video" controls="controls" autoplay muted>
      <source :src="videoUrl" type="application/x-mpegURL" />
      Your browser does not support HTML5 streaming!
    </video>
  </div>
</template>

<script>
export default {
  name: "StreamingRtsp"
}
</script>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import Hls from 'hls.js';

const videoUrl = ref('');
const baseUrl = 'http://localhost:18080'

const fetchVideo = async () => {
  try {
    const response = await axios.get(`${baseUrl}/api/video`, { withCredentials: true });
    videoUrl.value = baseUrl + response.data;
    console.log('Video URL:', videoUrl.value); // #EXT ~~

    const videoElement = document.getElementById('video');
    console.log("is Supported ? = " + Hls.isSupported());

    if (Hls.isSupported()) {
      const hls = new Hls();

      // // Set up a data URI with the m3u8 content received from the backend
      // const blob = new Blob([videoUrl.value], { type: 'application/x-mpegurl' });
      // const objectURL = URL.createObjectURL(blob);
      // console.log('Object URL' + objectURL);
      hls.loadSource(videoUrl.value); // Undefined
      hls.attachMedia(videoElement);
      hls.on(Hls.Events.MANIFEST_PARSED, function () {
        console.log("Manifest_Passed Event 발생")
        videoElement.play();
      });
    } else if (videoElement.canPlayType('application/vnd.apple.mpegurl')) {
      videoElement.src = videoUrl.value;
      videoElement.play();
    }

    console.log(response.data);
  } catch (error) {
    console.error('비디오 가져오기 실패:', error.message);
  }
}

onMounted(() => {
  fetchVideo();
});
</script>

<style scoped>

</style>