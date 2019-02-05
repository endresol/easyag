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
                <date-time-selector
                  titletag="Start"
                  @newdate="handleDate($event, 'start')"
                  @newtime="handleTime($event ,'start')"
                ></date-time-selector>
              </v-flex>
              <v-flex xs6>
                <date-time-selector
                  titletag="End"
                  @newdate="handleDate($event, 'end')"
                  @newtime="handleTime($event ,'end')"
                ></date-time-selector>
              </v-flex>

              <v-flex xs6>
                <date-time-selector
                  titletag="Registration Deadline"
                  @newdate="handleDate($event, 'registrationdeadline')"
                  @newtime="handleTime($event ,'registrationdeadline')"
                ></date-time-selector>
              </v-flex>
              <v-flex xs6>
                <v-text-field
                  name="price"
                  v-model="price"
                  label="Price"
                />
              </v-flex>

              <v-flex xs12>
                <v-text-field
                  name="imageurl"
                  v-model="imageUrl"
                  label="Image/pdf url"
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
import DateTimeSelector from '@/components/DateTimeSelector';

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
  components: {
    DateTimeSelector,
  },
  async mounted() {
    this.competitions = (await CompetitionService.index()).data;
  },
  methods: {
    handleDate(date, name) {
      this[`${name}date`] = date;
    },
    handleTime(time, name) {
      this[`${name}time`] = time;
    },
  },
};
</script>

<style scoped>

</style>
