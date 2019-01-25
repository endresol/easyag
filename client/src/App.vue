<template>
  <div id="app">
    <v-app>
      <page-header />
      <router-view/>
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
