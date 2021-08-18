<template>
  <v-container>
    <v-row no-gutters align="center" justify="center">
      <v-col/>

      <v-col>
        <v-layout column>
          <v-flex>
            <div>
              <v-card flat dense block dark>
                <v-card-text>
                  Registration
                </v-card-text>
              </v-card>

              <div>
                <form name="tab-tracker-form" autocomplete="off">
                  <v-text-field
                    label="Email"
                    v-model="email"/>
                  <br>

                  <v-text-field
                    type="password"
                    label="Password"
                    v-model="password"
                    autocomplete="new-password"/>
                </form>

                <br>

                <div class="error" v-html="error"/>

                <br>

                <v-btn
                  class="register-btn green lighten-1"
                  block
                  rounded
                  @click="register">
                  Register
                </v-btn>
              </div>
            </div>
          </v-flex>
        </v-layout>
      </v-col>

      <v-col/>
    </v-row>
  </v-container>

</template>

<script>
import AuthService from '@/services/AuthService';

export default {
  data() {
    return {
      email: '',
      password: '',
      error: null
    };
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

        this.error = null; // Clear the error when data is entered correctly
      } catch (e) {
        this.error = e.response.data.error;
      }
    }
  }
};
</script>

<style scoped>
.error {
  color: red;
}

.v-card__text {
  color: #66bb6a !important;
  font-size: 23px;
}

.register-btn {
  color: black !important;
}
</style>
