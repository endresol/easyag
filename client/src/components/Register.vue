<template>
  <v-content>
    <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="indigo">
                <v-toolbar-title>Register</v-toolbar-title>
              </v-toolbar>
                <v-card-text>
                <v-form>
                  <v-text-field
                    type="text"
                    name="fullname"
                    v-model="fullname"
                    label="Full name"
                    prepend-icon="person"
                  />
                  <v-text-field
                    type="email"
                    name="email"
                    v-model="email"
                    label="E-mail"
                    prepend-icon="email"
                  />
                  <v-text-field
                    type="password"
                    name="password"
                    v-model="password"
                    label="Password"
                    prepend-icon="lock"
                  />
                  <div class="error" v-html="error" />
                </v-form>
                </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="indigo" dark @click='register'>Register</v-btn>
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
      fullname: '',
      email: '',
      password: '',
      error: null,
    };
  },
  methods: {
    async register() {
      try {
        const response = await AuthenticationService.register({
          fullname: this.fullname,
          email: this.email,
          password: this.password,
        });
        this.$store.dispatch('setToken', response.data.token);
        this.$store.dispatch('setUser', response.data.user);
        this.$router.push({ name: 'root' });
      } catch (err) {
        this.error = err.response.data.error;
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
