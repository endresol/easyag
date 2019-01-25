<template>
  <v-toolbar color="indigo" dark fixed app>
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title
      @click="navigateTo({name: 'root'});">
      Easy AG
    </v-toolbar-title>
    <v-spacer></v-spacer>

    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn
        v-if="!$store.state.isUserLoggedIn"
        flat
        @click="navigateTo({name: 'register'});">
        Sign up
      </v-btn>
      <v-btn
        v-if="!$store.state.isUserLoggedIn"
        flat
        @click="navigateTo({name: 'login'});">
        Login
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
  },
};
</script>

<style scoped>
  .home {
    cursor: pointer;
  }
</style>
