<template>
  <div>
    <v-toolbar
      rounded
      elevation="0"
      block
      dark>
      <v-toolbar-title
        class="toolbar-title green--text lighten-1">
        {{ title }}
      </v-toolbar-title>

      <slot name="action" />
    </v-toolbar>

    <div class="elevation-3 pl-4 pr-4 pt-2 pb-2">
      <slot>
        No slot content defined.
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Panel',

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
