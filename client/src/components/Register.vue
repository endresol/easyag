<template>
   <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title>Register</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-card-text>
            <input
              type="email"
              name="email"
              v-model="email"
              placeholder="e-mail"
            />
            <br />
            <input
              type="password"
              name="password"
              v-model="password"
              placeholder="Password"
            />
            <br />
            <div class="error" v-html="error" />
            <br />
            <button
              @click='register'>
              Register
            </button>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>


  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService';

export default {
  data() {
    return {
      email: '',
      password: '',
      error: null,
    };
  },
  methods: {
    async register() {
      try {
        await AuthenticationService.register({
          email: this.email,
          password: this.password,
        });
      } catch (err) {
        this.error = err.response.data.error;
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
  color:red;
}
</style>
