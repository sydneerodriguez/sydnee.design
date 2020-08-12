<template>
  <div id="application">
    <Header />
    <router-view class="content" />
    <Footer />
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'

  import Header from './components/Header.vue'
  import Footer from './components/Footer.vue'

  @Component({
    components: {
      Header,
      Footer,
    },
  })
  export default class Application extends Vue {}
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
