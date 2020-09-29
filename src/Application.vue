<template>
  <div id="application">
    <Header />
    <router-view class="content" />
    <Footer />
  </div>
</template>

<script setup lang="ts">
  export { default as Header } from './components/Header.vue'
  export { default as Footer } from './components/Footer.vue'
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@600&family=Roboto:ital@0;1&display=swap');

  :root {
    font-family: 'Roboto', sans-serif;
  }

  #application {
    display: grid;
    grid-template-rows: auto 1fr auto;
    height: 100vh;
  }

  .content {
    max-width: 62.5rem;
    margin: 0rem auto;
  }
</style>
