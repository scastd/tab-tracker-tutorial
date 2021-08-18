<template>
  <v-toolbar
    class="green lighten-1 mb-4 elevation-0"
    dense
    flat
    fixed>

    <v-toolbar-title class="mr-4">
      <span
        class="home"
        @click="navigateTo({name: 'root'})">
        TabTracker
      </span>
    </v-toolbar-title>

    <v-toolbar-items>
      <v-btn elevation="0"
             dark
             @click="navigateTo({name: 'songs'})">
        Browse
      </v-btn>
    </v-toolbar-items>

    <v-spacer/>

    <v-toolbar-items>
      <v-btn elevation="0"
             dark
             @click="navigateTo({name: 'login'})"
             v-if="!this.$store.state.isUserLoggedIn">
        Login
      </v-btn>

      <v-btn elevation="0"
             dark
             @click="navigateTo({name: 'register'})"
             v-if="!this.$store.state.isUserLoggedIn">
        Sign Up
      </v-btn>

      <div>
        <!--        Mostrar username y signOut juntos, a la derecha-->
      </div>

      <v-btn elevation="0"
             dark
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
      this.$store.dispatch('clearUserData');
      this.$router.push({ name: 'root' });
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
