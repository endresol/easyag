<template>
  <div id="app">
    <v-app>
      <page-header />
      <v-content>
        <v-container fluid>
          <router-view></router-view>
        </v-container>
      </v-content>
      <v-footer app></v-footer>
    </v-app>
  </div>
</template>

<script>
import PageHeader from '@/components/Header';

export default {
  name: 'App',
  components: {
    PageHeader,
  },
};
</script>

<style>

</style>
