<template>
  <div class="about">
    <Asset
      :source="require('../assets/about.png')"
      description="A profile picture of Sydnee."
      :width="512"
      :height="512"
      align="left"
    />
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ante lorem, vestibulum quis
    tempus id, eleifend eu magna. Nulla facilisi. Quisque pretium, libero et posuere euismod, dui
    erat viverra lacus, nec mattis ante metus a felis. Sed malesuada tellus eget tortor ornare, et
    viverra ex faucibus. Mauris lacus sapien, facilisis a elit in, convallis mattis purus. Donec
    tincidunt porta semper. Pellentesque rhoncus diam lectus, at vehicula lacus imperdiet et. Sed
    sed mollis justo. Integer eros purus, venenatis non sem luctus, consectetur bibendum lectus.
    Cras commodo in urna sed imperdiet. Sed consequat ullamcorper sapien gravida condimentum. Lorem
    ipsum dolor sit amet, consectetur adipiscing elit. Vivamus rhoncus posuere ultrices. Phasellus
    ut viverra ante. Suspendisse ante ligula, porta vitae dictum vitae, vehicula quis enim.
    Suspendisse vitae arcu nec erat interdum hendrerit eget id lectus. Donec nec nulla imperdiet,
    volutpat quam nec, gravida sem. Nam mattis volutpat velit ac rhoncus. Nullam consequat libero
    vitae varius porta. Mauris maximus enim leo, sit amet hendrerit tellus pulvinar vitae. Etiam
    malesuada ullamcorper elit, eget eleifend sapien volutpat ac. Nulla facilisi.
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'

  import Asset from '../components/Asset.vue'

  @Component({
    components: {
      Asset,
    },
  })
  export default class About extends Vue {}
</script>

<style>
  .about {
    overflow: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
