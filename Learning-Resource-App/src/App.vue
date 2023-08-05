<template>
  <base-header title="학습 기록"></base-header>
  <the-resources></the-resources>
</template>

<script>
import BaseHeader from "@/components/Layouts/BaseHeader";
import TheResources from "@/components/Learing-Resources/TheResources";

export default {
  components: { BaseHeader, TheResources },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>