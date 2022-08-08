<template>
  <v-app style="height: 100vh">
    <v-main>
      <flexible-column-layout :layout="layout">
        <template #master>
          <left-side />
        </template>

        <template #detail>
          <right-side />
        </template>
      </flexible-column-layout>
    </v-main>
  </v-app>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";

import FlexibleColumnLayout from "./components/FlexibleColumnLayout.vue";
import LeftSide from "./components/LeftSide.vue";
import RightSide from "./components/RightSide.vue";

export default {
  name: "App",

  components: {
    LeftSide,
    RightSide,
    FlexibleColumnLayout,
  },

  computed: {
    ...mapGetters(["appTitle", "layout"]),
  },

  methods: {
    ...mapMutations(["SET_LAYOUT", "SET_ISMOBILE"]),

    ...mapActions(["getData"]),
  },

  watch: {
    appTitle(newVal) {
      document.title = newVal;
    },
  },

  created() {
    this.getData();

    let layout = this.$vuetify.breakpoint.smAndDown
      ? "OneColumn"
      : "TwoColumnsMidExpanded";

    this.SET_LAYOUT(layout);
  },
};
</script>
