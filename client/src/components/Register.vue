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
                <v-text-field
                  label="Email"
                  v-model="email"/>
                <br>

                <v-text-field
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
import AuthenticationService from '@/services/AuthenticationService';

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
        await AuthenticationService.register({
          email: this.email,
          password: this.password
        });

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
