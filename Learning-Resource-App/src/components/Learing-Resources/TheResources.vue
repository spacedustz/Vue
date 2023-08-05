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
import StoredResources from "@/components/Learing-Resources/StoredResources";

export default {
  components: { BaseButton, BaseCard, TheResources, AddResource, StoredResources },

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
    },
    addResource(title, description, url) {
      const newResource = {
        id: new Date().toISOString(),
        title: title,
        description: description,
        link: url
      };
      // 배열의 맨앞에 추가 (unshift)
      this.storedResources.unshift(newResource);
      // 리소스를 추가할때마다 탭이 바뀌게 함
      this.selectedTab = 'stored-resources';
    }
  },

  provide() {
    return {
      resources: this.storedResources,
      addResource: this.addResource
    };
  },
}
</script>

<style scoped>

</style>