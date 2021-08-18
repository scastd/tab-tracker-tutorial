<template>
  <v-container>
    <v-row no-gutters align="center" justify="center">
      <v-col/>

      <v-col>
        <v-layout column>
          <v-flex>

            <Panel title="Register">
              <form name="tab-tracker-form" autocomplete="off">
                <v-text-field
                  label="Email"
                  v-model="email"/>

                <v-text-field
                  type="password"
                  label="Password"
                  v-model="password"
                  autocomplete="new-password"/>
              </form>

              <div v-if="!!error">
                <v-alert type="error" v-html="error"/>
              </div>

              <br>

              <v-btn
                class="green lighten-1 black--text"
                block
                rounded
                @click="register">
                Register
              </v-btn>
            </Panel>

          </v-flex>
        </v-layout>
      </v-col>

      <v-col/>
    </v-row>
  </v-container>
</template>

<script>
import AuthService from '@/services/AuthService';
import Panel from '@/components/Panel';

export default {
  data() {
    return {
      email: '',
      password: '',
      error: null
    };
  },

  components: {
    Panel
  },

  methods: {
    async register() {
      try {
        const response = await AuthService.register({
          email: this.email,
          password: this.password
        });

        await this.$store.dispatch('setToken', response.data.token);
        await this.$store.dispatch('setUser', response.data.user);

        await this.$router.push({ name: 'home' });

        this.error = null; // Clear the error when data is entered correctly
      } catch (e) {
        this.error = e.response.data.error;
      }
    }
  }
};
</script>

<style scoped>
</style>
