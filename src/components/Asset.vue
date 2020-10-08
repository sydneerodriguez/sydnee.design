<template>
  <img loading="lazy" :src="$props.source" :width="$props.width" :height="$props.height" :alt="$props.description" />
</template>

<script setup="props" lang="ts">
  declare const props: {
    readonly source: string
    readonly description: string
    readonly width: number
    readonly height: number
  }
</script>
