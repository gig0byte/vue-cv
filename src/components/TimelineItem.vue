<template>
  <v-timeline-item id="timeline-item"
    color="white"
    small
    :style="`max-width:${isMobile ? 100 : 90}%;`">
    <template #icon>
      <v-icon small
        v-text="'mdi-circle'" />
    </template>

    <v-card elevation="0"
      class="pa-0 ma-0"
      style="border: 0.0625rem #d9d9d9 solid">
      <v-card-title class="pa-0 ma-0">
        <v-list-item class="pa-0 pl-2 ma-0"
          two-line>
          <v-list-item-avatar class="ma-0 mr-1 pa-0"
            size="30">
            <img :src="logo" />
          </v-list-item-avatar>

          <v-list-item-title class="text-wrap item-header">
            <a :href="link"
              target="_blank"
              style="color: var(--c-gold)">
              <truncate-text v-if="isMobile"
                :text="company"
                :max-length="30"
                :show-more-button="false" />

              <b v-else
                v-text="company" />
            </a>

            <span :class="{'ml-2': !isMobile, 'break-word': isMobile}"
              v-text="title" />

            <v-list-item-subtitle :class="{'mobile-date': isMobile }"
              v-text="dates" />

          </v-list-item-title>
        </v-list-item>
      </v-card-title>

      <v-card-text class="pa-1 pt-0 ma-0 item-text">
        <truncate-text :text="description" />
      </v-card-text>
    </v-card>
  </v-timeline-item>
</template>

<script>
import utilsMixin from "@/mixins/utils";

import TruncateText from "./TruncateText.vue";

export default {
  name: "TimelineItem",

  components: {
    TruncateText,
  },

  props: {
    company: String,

    title: String,

    dates: String,

    text: String,

    logo: String,

    description: String,

    link: String,
  },

  mixins: [utilsMixin],
};
</script>

<style scoped>
.item-header {
  font-size: 0.875rem;
  font-weight: normal;
  vertical-align: top;
}

.item-text {
  color: #32363a !important;
  padding: 0.375rem 0 0 0;
  font-size: 0.875rem;
  line-height: 1rem;
}

#timeline-item >>> .v-timeline-item__divider {
  min-width: 36px !important;
}

#timeline-item >>> .v-timeline-item__body {
  max-width: 100%;
  left: 10px;
  bottom: 6px;
}

#timeline-item >>> .v-timeline-item__body > .v-card:not(.v-card--flat)::after {
  border-right-color: white !important;
}

#timeline-item >>> .v-timeline-item__dot {
  border: 1.5px solid;
  /* margin: 1px !important; */
}

#timeline-item >>> .v-timeline-item__inner-dot {
  margin: 1.5px !important;
}

.mobile-date {
  font-size: 0.75rem;
  font-weight: normal;
}
</style>
