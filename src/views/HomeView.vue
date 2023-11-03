<template>
  <div class="home">
    <h3>{{ time }}</h3>
    <h1>{{ $t("message.hello") }}</h1>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      time: new Date().toLocaleString()
    };
  },
};
</script>

<style lang="scss">
  .home{
    text-align: center;
  }
</style>
