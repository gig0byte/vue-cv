<template>
  <v-card elevation="0"
    class="mt-0 pt-0"
    style="max-width:95%;">
    <v-card-title class="ma-0 pa-0">
      <span style="font-size: 1.125rem; color: var(--c-grey);"
        v-text="title" />
    </v-card-title>

    <v-card-text class="ma-0 pa-0">
      <v-timeline align-top
        dense>
        <timeline-item v-for="(item, i) in items"
          :key="i"
          v-bind="item" />
      </v-timeline>
    </v-card-text>
  </v-card>
</template>

<script>
import TimelineItem from "./TimelineItem.vue";

export default {
  name: "TimeLine",

  components: {
    TimelineItem,
  },

  props: {
    title: String,

    items: Array,
  },
};
</script>

<style scoped>
.v-timeline::before {
  left: calc(16px) !important;
}
</style>