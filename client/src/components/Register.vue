<template>
  <v-content>
    <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Register</v-toolbar-title>
              </v-toolbar>
                <v-card-text>
                <v-form>
                  <v-text-field
                    type="email"
                    name="email"
                    v-model="email"
                    placeholder="e-mail"
                  />
                  <br />
                  <v-text-field
                    type="password"
                    name="password"
                    v-model="password"
                    placeholder="Password"
                  />
                  <br />
                  <div class="error" v-html="error" />
                </v-form>
                </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" @click='register'>Register</v-btn>
                  </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
    </v-container>
  </v-content>
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
