<template>
  <v-card elevation="0"
    width="auto"
    class="pl-1"
    style="overflow-x: hidden; height: 100vh;">
    <v-card-title :class="['ma-0', {'pt-3': !isMobile }]">
      <v-layout column>
        <v-toolbar flat
          dense
          class="ma-0 pa-0 toolbar"
          height="auto">

          <v-layout column>
            <h5 style="font-weight: normal;"
              v-text="name" />

            <h4 class="mb-1 grey-header"
              v-text="position" />
          </v-layout>

          <template v-if="isMobile">
            <v-spacer />

            <v-btn small
              outlined
              class="pa-0"
              min-width="32"
              color="info"
              @click="SET_LAYOUT('OneColumn')">
              <v-icon v-text="'mdi-close'" />
            </v-btn>

          </template>

        </v-toolbar>

        <v-divider />

        <v-toolbar flat
          dense
          class="ma-0 pa-0 toolbar"
          height="auto">
          <v-spacer v-if="this.isMobile" />

          <h5 class="my-2"
            style="font-weight: normal;"
            v-text="slogan" />

          <v-spacer v-if="this.isMobile" />
        </v-toolbar>

        <v-divider />
      </v-layout>

    </v-card-title>

    <v-card-text>
      <time-line v-for="timeline in experience"
        :key="timeline.title"
        :title="timeline.title"
        :items="timeline.items" />
    </v-card-text>
  </v-card>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import utilsMixin from "@/mixins/utils";

import TimeLine from "./TimeLine.vue";

export default {
  name: "RightSide",

  components: {
    TimeLine,
  },

  mixins: [utilsMixin],

  computed: {
    ...mapGetters(["name", "position", "slogan", "experience"]),
  },

  methods: {
    ...mapMutations(["SET_LAYOUT"]),
  },
};
</script>

<style scoped>
.toolbar >>> .v-toolbar__content {
  margin: 0 !important;
  padding: 0 !important;
}
</style>