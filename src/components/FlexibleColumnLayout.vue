<template>
  <v-container fluid
    class="pa-0"
    style="overflow:hidden;">
    <v-row id="master"
      no-gutters
      style="height:100vh;">
      <v-slide-x-transition>
        <v-col v-if="_cols.master"
          :cols="_cols.master"
          style="overflow:auto;">
          <slot name="master" />
        </v-col>

      </v-slide-x-transition>

      <v-slide-x-reverse-transition>
        <v-col v-if="_cols.detail"
          :cols="_cols.detail"
          style="overflow:auto;">
          <slot name="detail" />
        </v-col>
      </v-slide-x-reverse-transition>
    </v-row>
  </v-container>
</template>

<script>
import utilsMixin from "@/mixins/utils";

export default {
  name: "FlexibleColumnLayout",

  props: {
    layout: {
      type: String,
      default: "TwoColumnsMidExpanded",
    },
  },

  mixins: [utilsMixin],

  computed: {
    _layouts() {
      return {
        OneColumn: {
          master: 12,
          detail: 0,
        },

        MidColumnFullScreen: {
          master: 0,
          detail: 12,
        },

        TwoColumnsBeginExpanded: {
          master: this.isMobile ? 0 : 8,
          detail: this.isMobile ? 12 : 4,
        },

        TwoColumnsMidExpanded: {
          master: this.isMobile ? 0 : 4,
          detail: this.isMobile ? 12 : 8,
        },
      };
    },

    _cols() {
      console.log(this.layout);
      return this._layouts[this.layout];
    },
  },
};
</script>