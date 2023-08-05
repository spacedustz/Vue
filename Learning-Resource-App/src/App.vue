<template>
  <base-header title="학습 기록"></base-header>
  <stored-resources :resources="storedResources"></stored-resources>
</template>

<script>
import StoredResources from "@/components/Learing-Resources/StoredResources";
import BaseHeader from "@/components/Layouts/BaseHeader";

export default {
  components: { StoredResources, BaseHeader },

  data() {
    return {
      storedResources: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'The Official Vue.js Documentation',
          link: 'https://vuejs.org'
        },
        {
          id: 'google',
          title: 'Google',
          description: 'The Official Google Documentation',
          link: 'https://google.org'
        },
      ]
    };
  },
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