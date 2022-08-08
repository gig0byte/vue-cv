<template>
  <v-badge bottom
    overlap>
    <template #badge>
      <v-icon small
        color="white"
        v-text="icon" />
    </template>

    <v-img v-bind="$attrs"
      :src="src"
      style="cursor: pointer; "
      v-on="$listeners" />
  </v-badge>
</template>

<script>
export default {
  name: "BadgedImg",

  props: {
    src: String,

    icon: {
      type: String,
      default: "mdi-magnify-plus-outline",
    },
  },
};
</script>

<style>
</style>