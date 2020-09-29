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

<script setup lang="ts">
  export { default as Article } from '../../components/Article.vue'
  export { default as Typography } from '../../components/Typography.vue'
</script>
