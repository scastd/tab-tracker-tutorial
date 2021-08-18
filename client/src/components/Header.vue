<template>
  <v-toolbar
    class="toolbar"
    color="#66BB6A"
    dense
    flat
    fixed>

    <v-toolbar-title>
      <span class="home" @click="navigateTo({name: 'root'})">
        TabTracker
      </span>
    </v-toolbar-title>

    <v-spacer/>

    <v-toolbar-items>
      <v-btn elevation="0"
             dark
             rounded
             @click="navigateTo({name: 'login'})"
             v-if="!this.$store.state.isUserLoggedIn">
        Login
      </v-btn>

      <v-btn elevation="0"
             dark
             rounded
             @click="navigateTo({name: 'register'})"
             v-if="!this.$store.state.isUserLoggedIn">
        Sign Up
      </v-btn>

      <v-btn elevation="0"
             dark
             rounded
             @click="signOut"
             v-if="this.$store.state.isUserLoggedIn">
        Sign Out
      </v-btn>
    </v-toolbar-items>

  </v-toolbar>
</template>

<script>
export default {
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },

    signOut() {
      this.$store.dispatch('setToken', null);
      this.navigateTo({name: 'root'});
    }
  }
};
</script>

<style scoped>
.home {
  cursor: pointer
}

.home:hover {
  color: #fff;
}

.toolbar {
  margin-bottom: 15px;
}
</style>
