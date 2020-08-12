<template>
  <img
    ref="image"
    :class="{ loading }"
    loading="lazy"
    :src="source"
    :width="width"
    :height="height"
    :alt="description"
  />
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'
  import { Prop } from 'vue-property-decorator'

  @Component
  export default class Asset extends Vue {
    @Prop({ type: String, required: true }) readonly source!: string
    @Prop({ type: String, required: true }) readonly description!: string
    @Prop({ type: Number, required: true }) readonly width!: number
    @Prop({ type: Number, required: true }) readonly height!: number

    loading = true

    mounted() {
      const image = this.$refs.image as HTMLImageElement
      image.decode().then(() => (this.loading = false))
    }
  }
</script>

<style scoped>
  img.loading {
    filter: blur(1rem);
  }

  img {
    transition: filter 0.25s ease-in-out;
  }
</style>
