<template>
  <v-layout column>
    <span class="white--text"
      v-text="title" />

    <v-progress-linear :value="value"
      color="var(--c-gold)"
      background-color="white"
      height="16"
      rounded />
  </v-layout>
</template>

<script>
export default {
  name: "TheLinear",

  props: {
    title: String,

    value: Number,
  },
};
</script>

<style scoped>
.v-progress-linear {
  border-radius: 10px !important;
}
</style>