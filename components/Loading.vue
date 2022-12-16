<template>
  <div v-if="loading" class="loading-page m-5">
    <div class="d-flex justify-content-center opacity-50">
      <nuxt-img provider="customProvider" src="TriviCare_byn Positivo.webp" alt="logo" width="60%" height="100%"/>
    </div>
    <loading-progress
      indeterminate="indeterminate"
      size="64"
      rotate
      fillDuration="2"
      rotationDuration="1"
    />
  </div>
</template>

<script>
   export default {
    data: () => ({
      loading: false
    }),
    methods: {
      start() {
        this.loading = true
      },
      finish() {
        this.loading = false
      }
    }
  }
</script>

<style scoped>
  .loading-page {
    position: fixed;
    top: 0;
    left: 0;
    width: auto;
    height: auto;
    background: rgba(255, 255, 255, 0.8) !important;
    text-align: center;
    padding-top: 200px;
    font-size: 30px;
    font-family: sans-serif;
  }
</style>