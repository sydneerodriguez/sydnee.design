<template>
  <header class="header">
    <Typography component="span" class="title">
      <router-link to="/projects">Sydnee</router-link>
    </Typography>

    <ul>
      <li>
        <router-link to="/projects">Projects</router-link>
      </li>
      <li>
        <router-link to="/about">About</router-link>
      </li>
    </ul>
  </header>
</template>

<script setup lang="ts">
  export { default as Typography } from './Typography.vue'
</script>

<style>
  .header {
    display: flex;
    justify-content: space-between;
    padding: 1rem 4rem;
  }

  .header .title {
    font-size: 2rem;
  }

  .header li {
    display: inline;
    margin: 0rem 0.5rem;
    list-style: none;
  }

  .header a {
    color: inherit;
    text-decoration: none;
  }

  .header ul li a.router-link-active,
  .header ul li a:hover {
    text-decoration: underline;
  }
</style>
