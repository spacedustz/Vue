<template>
  <base-card>
    <form @submit.prevent="submitData">
      <!-- Title -->
      <div class="form-control">
        <lable for="title">제목</lable>
        <input
          type="text"
          id="title"
          name="title"
          ref="titleInput"
        />
      </div>
      <!-- Description -->
      <div class="form-control">
        <lable for="description">설명</lable>
        <textarea
        id="description"
        name="description"
        rows="3"
        ref="descInput"
        ></textarea>
      </div>
      <!-- Title -->
      <div class="form-control">
        <lable for="link">링크</lable>
        <input
            type="url"
            id="link"
            name="link"
            ref="linkInput"
        />
      </div>
      <!--Submit Button -->
      <div>
        <base-button type="submit">제출</base-button>
      </div>
    </form>
  </base-card>
</template>

<script>
import BaseCard from "@/components/UI/BaseCard";
import BaseButton from "@/components/UI/BaseButton";

export default {
  components: {BaseButton, BaseCard},

  inject: ['addResource'],

  methods: {
    submitData() {
      const enteredTitle = this.$refs.titleInput.value;
      const enteredDesc = this.$refs.descInput.value;
      const enteredLink = this.$refs.linkInput.value;

      this.addResource(enteredTitle, enteredDesc, enteredLink);
    }
  }
}
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>