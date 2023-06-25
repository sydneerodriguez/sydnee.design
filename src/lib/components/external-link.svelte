<script lang="ts">
  export let href: string
</script>

<a
  class="underline"
  {href}
  target="_blank"
  rel="noopener noreferrer"
>
  <slot />
</a>
