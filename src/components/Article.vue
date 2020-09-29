<template>
  <article class="article">
    <Typography class="title" component="h1">
      {{ title }}
    </Typography>
    <Asset
      class="header-image"
      :source="headerImageSource"
      :description="headerImageDescription"
      :width="headerImageWidth"
      :height="headerImageHeight"
    />
    <slot />
  </article>
</template>

<script setup="props" lang="ts">
  export { default as Asset } from './Asset.vue'
  export { default as Typography } from './Typography.vue'

  declare const props: {
    title: string
    headerImageSource: string
    headerImageDescription: string
    headerImageWidth: number
    headerImageHeight: number
  }

  export const title = props.title
  export const headerImageSource = props.headerImageSource
  export const headerImageDescription = props.headerImageDescription
  export const headerImageWidth = props.headerImageWidth
  export const headerImageHeight = props.headerImageHeight
</script>

<style>
  .article .title {
    text-align: center;
  }

  .article .header-image {
    width: 100%;
    height: auto;
  }
</style>
