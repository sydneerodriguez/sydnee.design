<template>
  <div class="projects">
    <div class="tile" v-for="project in projects" :key="project.link">
      <router-link :to="project.link">
        <Asset v-bind="project.asset" />
        <Typography class="title">
          {{ project.title }}
        </Typography>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'

  import Asset from '../components/Asset.vue'
  import Typography from '../components/Typography.vue'

  interface Project {
    asset: {
      source: string
      description: string
      width: number
      height: number
    }
    title: string
    link: string
  }

  @Component({
    components: {
      Asset,
      Typography,
    },
  })
  export default class Projects extends Vue {
    projects: Project[] = [
      {
        asset: {
          source: require('../assets/project.png'),
          description: '',
          width: 256,
          height: 256,
        },
        title: 'Hello World',
        link: '/projects/hello-world',
      },
      {
        asset: {
          source: require('../assets/project.png'),
          description: '',
          width: 256,
          height: 256,
        },
        title: 'Hello World',
        link: '/projects/hello-world',
      },
      {
        asset: {
          source: require('../assets/project.png'),
          description: '',
          width: 256,
          height: 256,
        },
        title: 'Hello World',
        link: '/projects/hello-world',
      },
    ]
  }
</script>

<style>
  .projects {
    display: grid;
    margin: 0rem auto;
    gap: 1rem;
    grid-template-columns: repeat(2, minmax(256px, 1fr));
  }

  .projects .tile {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
  }

  .projects .tile img {
    width: 100%;
    height: auto;
  }

  .projects .tile .title {
    margin: 0.5rem 0rem;
  }
</style>
