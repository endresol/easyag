<template>
  <v-content>
    <v-container grid-list-sm>
        <v-layout row wrap>
          <v-flex xs12 align-center justify-space-between>
            <v-toolbar dark color="indigo">
              <v-toolbar-title>Create Competition</v-toolbar-title>
            </v-toolbar>
            <v-layout row wrap>
              <v-flex xs12>
                <v-text-field
                  name="name"
                  v-model="name"
                  label="Name"
                />
              </v-flex>
              <v-flex xs6>
                <v-menu
                  :close-on-content-click="false"
                  v-model="menu1"
                  :nudge-right="40"
                  lazy
                  transition="scale-transition"
                  offset-y
                  full-width
                  min-width="290px"
                >
                  <v-text-field
                    slot="activator"
                    name="startdate"
                    v-model="startdate"
                    label="Start Date"
                    prepend-icon="event"
                    readonly
                  />
                  <v-date-picker v-model="startdate" @input="menu1 = false"></v-date-picker>
                </v-menu>
              </v-flex>
              <v-flex xs6>
                <v-menu
                  ref="menu"
                  :close-on-content-click="false"
                  v-model="menu2"
                  :nudge-right="40"
                  :return-value.sync="time"
                  lazy
                  transition="scale-transition"
                  offset-y
                  full-width
                  max-width="290px"
                  min-width="290px"
                >
                  <v-text-field
                    slot="activator"
                    v-model="starttime"
                    label="Start Time"
                    prepend-icon="access_time"
                    readonly
                  ></v-text-field>
                  <v-time-picker v-model="starttime" format="24hr"></v-time-picker>
                </v-menu>
              </v-flex>
              <v-flex xs6>
                <v-menu
                  :close-on-content-click="false"
                  v-model="menu3"
                  :nudge-right="40"
                  lazy
                  transition="scale-transition"
                  offset-y
                  full-width
                  min-width="290px"
                >
                  <v-text-field
                    slot="activator"
                    name="enddate"
                    v-model="enddate"
                    label="End Date"
                    prepend-icon="event"
                    readonly
                  />
                  <v-date-picker v-model="enddate" @input="menu3 = false"></v-date-picker>
                </v-menu>
              </v-flex>
              <v-flex xs6>
                <v-menu
                  ref="menu"
                  :close-on-content-click="false"
                  v-model="menu4"
                  :nudge-right="40"
                  :return-value.sync="time"
                  lazy
                  transition="scale-transition"
                  offset-y
                  full-width
                  max-width="290px"
                  min-width="290px"
                >
                  <v-text-field
                    slot="activator"
                    v-model="endtime"
                    label="End Time"
                    prepend-icon="access_time"
                    readonly
                  ></v-text-field>
                  <v-time-picker v-model="endtime" format="24hr"></v-time-picker>
                </v-menu>
              </v-flex>
              <v-flex xs6>
                <v-menu
                  :close-on-content-click="false"
                  v-model="menu5"
                  :nudge-right="40"
                  lazy
                  transition="scale-transition"
                  offset-y
                  full-width
                  min-width="290px"
                >
                  <v-text-field
                    slot="activator"
                    name="registrationdeadlinedate"
                    v-model="registrationdeadlinedate"
                    label="Registration Deadline Date"
                    prepend-icon="event"
                    readonly
                  />
                  <v-date-picker v-model="registrationdeadlinedate" @input="menu5 = false"></v-date-picker>
                </v-menu>
              </v-flex>
              <v-flex xs6>
                <v-menu
                  ref="menu"
                  :close-on-content-click="false"
                  v-model="menu6"
                  :nudge-right="40"
                  :return-value.sync="time"
                  lazy
                  transition="scale-transition"
                  offset-y
                  full-width
                  max-width="290px"
                  min-width="290px"
                >
                  <v-text-field
                    slot="activator"
                    v-model="registrationdeadlinetime"
                    label="Registration Deadline Time"
                    prepend-icon="access_time"
                    readonly
                  ></v-text-field>
                  <v-time-picker v-model="registrationdeadlinetime" format="24hr"></v-time-picker>
                </v-menu>
              </v-flex>

              <v-flex xs12>
                <v-text-field
                  name="imageurl"
                  v-model="imageUrl"
                  label="Image/pdf url"
                />
              </v-flex>
              <v-flex xs12>
                <v-text-field
                  name="price"
                  v-model="price"
                  label="Price"
                />
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex xs12 md6>
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
      starttime: null,
      enddate: null,
      endtime: null,
      registrationdeadlinedate: null,
      registrationdeadlinetime: null,
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
