<template>
  <learning-survey @survey-submit="storeSurvey"></learning-survey>
  <user-experiences :results="savedSurveyResults"></user-experiences>
  <request-backend></request-backend>
</template>

<script>
import LearningSurvey from './components/survey/LearningSurvey.vue';
import UserExperiences from './components/survey/UserExperiences.vue';
import RequestBackend from "@/components/RequestBackend";

export default {
  components: {
    RequestBackend,
    LearningSurvey,
    UserExperiences,
  },
  data() {
    return {
      savedSurveyResults: [],
    };
  },
  methods: {
    storeSurvey(surveyData) {
      const surveyResult = {
        name: surveyData.userName,
        rating: surveyData.rating,
        id: new Date().toISOString(),
      };
      this.savedSurveyResults.push(surveyResult);
      console.log(surveyResult);
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>