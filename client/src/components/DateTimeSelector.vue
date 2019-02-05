<template>
  <div>
    <v-layout>
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
            v-model="selectedDate"
            :label="titletag + ' Date'"
            prepend-icon="event"
            readonly
            @input="handleDate"
          />
          <v-date-picker v-model="selectedDate" @input="handleDate"></v-date-picker>
        </v-menu>
      </v-flex>
      <v-flex xs6>
        <v-menu
          ref="menu"
          :close-on-content-click="false"
          v-model="menu2"
          :nudge-right="40"
          :return-value.sync="selectedTime"
          lazy
          transition="scale-transition"
          offset-y
          full-width
          max-width="290px"
          min-width="290px"
        >
          <v-text-field
            slot="activator"
            v-model="selectedTime"
            :label="titletag + ' Time'"
            prepend-icon="access_time"
            readonly
            @input="handleTime"
          ></v-text-field>
          <v-time-picker
            v-model="selectedTime"
            format="24hr"
            @change="$refs.menu.save(selectedTime);handleTime()"
          ></v-time-picker>
        </v-menu>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  props: [
    'titletag',
  ],
  data() {
    return {
      selectedDate: null,
      selectedTime: null,
      menu1: null,
      menu2: null,
    };
  },
  methods: {
    handleDate() {
      this.menu1 = false;
      this.$emit('newdate', this.selectedDate);
    },
    handleTime() {
      this.menu2 = false;
      this.$emit('newtime', this.selectedTime);
    },
  },
};
</script>

<style scoped>

</style>
