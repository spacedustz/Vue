<template>
  <div class="video" align="center">
    <video id="video" ref="videoPlayer" controls="controls" autoplay muted>
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
const videoPlayer = ref(null);
const hlsInstance = ref(null);

const fetchVideo = async () => {
  try {
    const response = await axios.get('http://localhost:8081/api/video', { withCredentials: true });
    // videoUrl.value = response.data;
    initVideoPlayer();
    console.log(response.data);
  } catch (error) {
    console.error('비디오 가져오기 실패:', error);
  }
}

const initVideoPlayer = () => {
  const videoElement = videoPlayer.value;
  console.log('Element = ' + videoElement);

  console.log("is Supported ? = " + Hls.isSupported());
  if (Hls.isSupported()) {
    const hls = new Hls();
    hlsInstance.value = hls;

    // // Set up a data URI with the m3u8 content received from the backend
    // const blob = new Blob([videoUrl.value], { type: 'application/x-mpegurl' });
    // const objectURL = URL.createObjectURL(blob);
    // console.log('Object URL' + objectURL);

    hls.loadSource(videoUrl.value);
    hls.attachMedia(videoElement);
    hls.on(Hls.Events.MANIFEST_PARSED, function () { videoElement.play(); });
  } else if (videoElement.canPlayType('application/vnd.apple.mpegurl')) {
    videoElement.src = videoUrl.value;
  }
};

onMounted(() => {
  fetchVideo();
});
</script>

<style scoped>

</style>