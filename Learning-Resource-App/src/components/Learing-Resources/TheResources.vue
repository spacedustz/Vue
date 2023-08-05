<template>
  <base-card>
    <base-button
        @click="setSelectedTab('stored-resources')"
        :mode="storedResButtonMode">목록 보기</base-button>
    <base-button
        @click="setSelectedTab('add-resource')"
        :mode="addResButtonMode">학습 추가</base-button>
  </base-card>
  <component :is="selectedTab"></component>
</template>

<script>
import BaseCard from "@/components/UI/BaseCard";
import BaseButton from "@/components/UI/BaseButton";
import TheResources from './StoredResources.vue';
import AddResource from './AddResource.vue';

export default {
  components: { BaseButton, BaseCard, TheResources, AddResource },

  data() {
    return {
      selectedTab: 'stored-resources',
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

  computed: {
    storedResButtonMode() {
      return this.selectedTab === 'stored-resources' ? null : 'flat';
    },
    addResButtonMode() {
      return this.selectedTab === 'add-resource' ? null : 'flat';
    }
  },

  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    }
  },

  provide() {
    return {
      resources: this.storedResources
    };
  },
}
</script>

<style scoped>

</style>