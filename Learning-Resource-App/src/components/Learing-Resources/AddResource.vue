<template>
  <!-- Dialog 에는 2개의 슬롯이 있으니 Custom한 템플릿을 작성해줍니다. -->
  <base-dialog v-if="inputIsInvalid" title="Invalid Input" @close="confirmError">
    <template v-slot:default>
      <p>하나 이상의 입력값이 잘못 되었습니다.</p>
      <p>최소 1글자 이상 입력 해주세요.</p>
    </template>
    <!-- 버튼 슬롯 -->
    <template #actions>
      <base-button @click="confirmError">확인</base-button>
    </template>
  </base-dialog>
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
import BaseDialog from "@/components/UI/BaseDialog";

export default {
  components: {BaseDialog, BaseButton, BaseCard},

  inject: ['addResource'],

  data() {
    return {
      // 처음은 사용자가 아무 입력이 없으니 false를 Default로 설정
      inputIsInvalid: false
    };
  },

  methods: {
    submitData() {
      const enteredTitle = this.$refs.titleInput.value;
      const enteredDesc = this.$refs.descInput.value;
      const enteredLink = this.$refs.linkInput.value;

      // 입력값 중 하나가 비어 있으면 inputIsInvalid를 true로 설정
      if (enteredTitle.trim() === '' || enteredDesc.trim() === '' || enteredLink.trim() === '') {
        this.inputIsInvalid = true;
        return;
      }

      this.addResource(enteredTitle, enteredDesc, enteredLink);
    },

    // 에러 창을 닫을 수 있는 함수
    confirmError() {
      this.inputIsInvalid = false;
    },
  },
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