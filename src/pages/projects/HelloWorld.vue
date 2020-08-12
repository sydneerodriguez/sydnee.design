<template>
  <Article
    title="Hello World!"
    :header-image-source="require('../../assets/square.png')"
    header-image-description="A black square in the center of a white image."
    :header-image-width="1280"
    :header-image-height="720"
  >
    <ul>
      <Typography component="li">
        A list item.
      </Typography>
    </ul>
  </Article>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'

  import Article from '../../components/Article.vue'
  import Typography from '../../components/Typography.vue'

  @Component({
    components: {
      Article,
      Typography,
    },
  })
  export default class HelloWorld extends Vue {}
</script>
