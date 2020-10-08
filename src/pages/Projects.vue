<template>
  <div class="landing">
    <div class="intro">
      <Typography component="h1">
        yoyoyo
      </Typography>
      <Typography component="h3">
        yoyoyo
      </Typography>
    </div>
    <div class="projects">
      <router-link class="tile" v-for="project in projects" :key="project.link" :to="project.link">
        <Asset v-bind="project.asset" />
        <div class="meta">
          <Typography class="title">
            {{ project.title }}
          </Typography>
          <Typography class="description">
            {{ project.description }}
          </Typography>
        </div>
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
    description: string
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
        description: 'this is a description',
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
        description: 'this is a description',
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
        description: 'this is a description',
        link: '/projects/hello-world',
      },
    ]
  }
</script>

<style>
  .intro {
    height: 15rem;
  }

  .projects {
    display: grid;
    margin: 0rem auto;
    gap: 2.5rem;
    /* grid-template-columns: repeat(2, minmax(256px, 1fr)); */
    grid-template-columns: 1fr;
  }

  .projects .tile {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    text-align: center;
    background-color:rosybrown;
  }

  .projects .tile .meta {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-width: 18rem;
  }

  .projects .tile img {
    width: 100%;
    height: auto;
  }

  .projects .tile .title {
    margin: 0.5rem 0rem;
  }
</style>
