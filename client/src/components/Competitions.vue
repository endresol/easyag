<template>
  <v-content>
    <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm6>
            <v-toolbar dark color="indigo">
              <v-toolbar-title>Competitions</v-toolbar-title>
            </v-toolbar>
            <div v-for="competition in competitions"
              :key=competition.id>
              <v-card>
                <v-card-title>
                  {{competition.name}}

                </v-card-title>
              </v-card>
            </div>
          </v-flex>
        </v-layout>
    </v-container>
  </v-content>
</template>

<script>
import CompetitionService from '@/services/CompetitionService';

export default {
  data() {
    return {
      competitions: null,
    };
  },
  async mounted() {
    this.competitions = (await CompetitionService.index()).data;
  },
};
</script>

<style scoped>

</style>
