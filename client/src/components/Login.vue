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
                  Login
                </v-card-text>
              </v-card>

              <div>
                <v-text-field
                  label="Email"
                  v-model="email"/>
                <br>

                <v-text-field
                  type="password"
                  label="Password"
                  v-model="password"/>
                <br>

                <div class="error" v-html="error"/>

                <br>

                <v-btn
                  class="register-btn"
                  color="#66BB6A"
                  block
                  rounded
                  @click="login">
                  Login
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
    async login() {
      try {
        const response = await AuthService.login({
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
