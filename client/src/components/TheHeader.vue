<template>
  <v-toolbar
    class="green lighten-0 mb-4 elevation-0"
    dense
    flat
    fixed
  >

    <v-toolbar-title class="mr-4">
      <span
        class="home"
        @click="navigateTo({name: 'root'})"
      >
        TabTracker
      </span>
    </v-toolbar-title>

    <v-toolbar-items>
      <v-btn elevation="0"
             dark
             @click="navigateTo({name: 'songs'})"
      >
        Browse
      </v-btn>
    </v-toolbar-items>

    <v-spacer/>

    <v-btn dark elevation="0" class="mr-3" @click="toggleUITheme">
      Theme
    </v-btn>

    <v-toolbar-items v-if="!this.$store.state.isUserLoggedIn">
      <v-btn elevation="0"
             dark
             @click="navigateTo({name: 'login'})"
      >
        Login
      </v-btn>

      <v-btn elevation="0"
             dark
             @click="navigateTo({name: 'register'})"
      >
        Sign Up
      </v-btn>
    </v-toolbar-items>

    <v-toolbar-items v-if="this.$store.state.isUserLoggedIn">
      <v-btn elevation="0"
             dark
             @click="navigateTo({ name: 'profile' })"
      >
        Profile
      </v-btn>

      <v-btn elevation="0"
             dark
             @click="signOut"
      >
        Sign Out
      </v-btn>
    </v-toolbar-items>

  </v-toolbar>
</template>

<script>
export default {
    name: 'PageHeader',

    methods: {
        navigateTo(route) {
            this.$router.push(route);
        },

        signOut() {
            this.$store.dispatch('clearUserData');
            this.$router.push({ name: 'root' });
        },

        toggleUITheme() {
            //
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
</style>
