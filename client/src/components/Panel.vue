<template>
  <div>
    <v-toolbar
      rounded
      elevation="0"
      dense
      block
      dark>
      <v-toolbar-title
        class="toolbar-title green--text lighten-1">
        {{ title }}
      </v-toolbar-title>
    </v-toolbar>

    <div class="elevation-10 pl-4 pr-4 pt-2 pb-2">
      <slot>
        No slot content defined.
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'title'
  ]
};
</script>

<style scoped>
.toolbar-title {
  font-size: 23px;
}
</style>
