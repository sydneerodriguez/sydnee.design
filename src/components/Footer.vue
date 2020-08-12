<template>
  <footer class="footer">
    <Typography>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </Typography>
  </footer>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'

  import Typography from './Typography.vue'

  @Component({
    components: {
      Typography,
    },
  })
  export default class Footer extends Vue {}
</script>

<style>
  .footer {
    text-align: center;
    padding: 1rem;
  }
</style>
