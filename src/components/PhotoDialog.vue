<template>
  <v-dialog :value="value"
    width="auto"
    scrollable
    @input="$emit('input', !value)"
    style="height: auto; overflow: hidden;">
    <v-layout column
      style="height: auto; overflow:hidden;">
      <img :src="src"
        :style="`width: ${$vuetify.breakpoint.mobile ? 360 : 500}px;`" />

      <v-toolbar height="40px"
        class="pa-0 ma-0 pb-4">
        <v-spacer />

        <v-btn text
          color="info"
          class="pa-0 ma-0"
          @click="$emit('input', !value)">

          Close
        </v-btn>
      </v-toolbar>
    </v-layout>
  </v-dialog>
</template>

<script>
export default {
  name: "PhotoDialog",

  props: {
    value: Boolean,

    src: String,
  },
};
</script>
