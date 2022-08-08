<template>
  <v-card :color="color"
    class="pa-0 ma-0"
    style="height: calc(100vh - 1px); width: 100%;">
    <v-card-text style="height: calc(100vh - 41px); overflow:auto;">
      <v-slot />
    </v-card-text>

    <v-card-actions>

    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "CardContainer",

  props: {
    color: {
      type: String,
      default: "white",
    },
  },
};
</script>

<style>
</style>