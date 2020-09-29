<template>
  <img loading="lazy" :src="source" :width="width" :height="height" :alt="description" />
</template>

<script setup="props" lang="ts">
  declare const props: {
    readonly source: string
    readonly description: string
    readonly width: number
    readonly height: number
  }

  export const source = props.source
  export const description = props.description
  export const width = props.width
  export const height = props.height
</script>
