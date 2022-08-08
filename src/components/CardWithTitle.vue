<template>
  <v-card color="transparent"
    elevation="0"
    class="pa-0 pt-1 ma-0">
    <v-card-title class="pa-0 pt-1">
      <v-toolbar color="transparent"
        class="white--text"
        height="24px"
        dense
        flat>
        <v-spacer />

        <span style="font-size: 1rem; font-weight: normal;"
          v-text="title" />

        <v-spacer />
      </v-toolbar>
    </v-card-title>

    <v-card-text class="ma-0 py-0">
      <slot />
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "CardWithTitle",

  props: {
    title: String,
  },
};
</script>