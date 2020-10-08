<template>
  <article class="article">
    <Typography class="title" component="h1">
      {{ $props.title }}
    </Typography>
    <Asset
      class="header-image"
      :source="$props.headerImageSource"
      :description="$props.headerImageDescription"
      :width="$props.headerImageWidth"
      :height="$props.headerImageHeight"
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
