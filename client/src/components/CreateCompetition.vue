<template>
  <v-content>
    <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm6>
            <v-toolbar dark color="indigo">
              <v-toolbar-title>Create Competition</v-toolbar-title>
            </v-toolbar>
            <div>
              <v-text-field
                name="name"
                v-model="name"
                label="Name"
              />
              <v-text-field
                slot="activator"
                name="startdate"
                v-model="startdate"
                label="Start Date"
                prepend-icon="event"
                readonly
              />
              <v-date-picker v-model="startdate" @input="menu2 = false"></v-date-picker>
              <v-text-field
                name="name"
                v-model="name"
                label="Name"
              />
              <v-text-field
                name="name"
                v-model="name"
                label="Name"
              />
              <v-text-field
                name="name"
                v-model="name"
                label="Name"
              />
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
      name: null,
      startdate: null,
      enddate: null,
      registrationdeadline: null,
      description: null,
      imageUrl: null,
      price: null,
      club_id: null,
    };
  },
  async mounted() {
    this.competitions = (await CompetitionService.index()).data;
  },
};
</script>

<style scoped>

</style>
