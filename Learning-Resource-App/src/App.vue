<template>
  <ul>
    <learning-resource
        v-for="res in storedResources"
        :key="res.id"
        :title="res.title"
        :description="res.description"
        :link="res.link"
    ></learning-resource>
  </ul>
</template>

<script>
import LearningResource from './components/Learing-Resources/LearningResource.vue';
export default {
  components: {
    LearningResource
  },

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

<style scoped>

</style>