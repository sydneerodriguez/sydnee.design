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

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'
  import { Prop } from 'vue-property-decorator'

  import Asset from './Asset.vue'
  import Typography from './Typography.vue'

  @Component({
    components: {
      Asset,
      Typography,
    },
  })
  export default class Article extends Vue {
    @Prop({ type: String, required: true }) title!: string
    @Prop({ type: String, required: true }) headerImageSource!: string
    @Prop({ type: String, required: true }) headerImageDescription!: string
    @Prop({ type: Number, required: true }) headerImageWidth!: number
    @Prop({ type: Number, required: true }) headerImageHeight!: number
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
