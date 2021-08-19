<template>
  <v-app>
    <div id="app">
      <page-header/>
      <router-view/>
    </div>
  </v-app>
</template>

<script>
import PageHeader from '@/components/PageHeader.vue';

export default {
  name: 'App',

  components: {
    PageHeader
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /*background: #8f8f8f;*/

  /*--background-color-primary: #1e1e1e;*/
  /*--background-color-secondary: #2d2d30;*/
  /*--accent-color: #3f3f3f;*/
  /*--text-primary-color: #ddd;*/
}
</style>
