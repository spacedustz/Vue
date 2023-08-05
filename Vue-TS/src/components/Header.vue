<template>
  <header class="header">
    <h1 class="header__title">TODO LIST</h1>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link to="/">All</router-link>
        </li>
        <li class="breadcrumb-item">
          <router-link to="/active">Active</router-link>
        </li>
        <li class="breadcrumb-item">
          <router-link to="/clear">Clear</router-link>
        </li>
      </ol>
    </nav>
  </header>
</template>

<script lang="ts">
export default {
  name: "BaseHeader",
};
</script>

<style lang="scss">
.header {
  padding: 0 !important;

  .header__title {
    text-align: center;
    margin-bottom: 20px;
    font-weight: 700;
  }

  .breadcrumb {
    margin: 0;
    padding: 6px 12px;
    background: #e9ecef;
    border-radius: 5px;
    box-sizing: border-box;
  }
}
</style>