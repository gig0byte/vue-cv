<template>
  <div style="height: 100%;">
    <v-card color="#4573aa"
      class="ma-0"
      height="100%"
      style="width: 100%;">
      <v-card-text style="height: calc(100vh - 40px); overflow:auto;"
        class="pa-0 pb-4 ma-0">
        <v-layout v-if="photo"
          justify-center
          class="pb-2 mt-4">
          <badged-img :src="photo"
            height="150px"
            max-width="112.5px"
            @click="dialogOpened = true" />
        </v-layout>

        <card-with-title title="Contacts">
          <v-layout column>
            <the-contact v-for="contact in contacts"
              :key="contact.title"
              :title="contact.title"
              :href="contact.href"
              :icon="contact.icon"
              class="" />
          </v-layout>
        </card-with-title>

        <card-with-title v-for="asset in assets"
          :key="asset.name"
          :title="asset.name"
          class="mb-1">
          <v-layout column>
            <the-linear v-for="item in asset.items"
              :key="item.title"
              :title="item.title"
              :value="item.value"
              class="mt-1" />
          </v-layout>
        </card-with-title>
      </v-card-text>

      <v-card-actions class="mx-0 px-0"
        style="height: 40px;">
        <v-layout column>
          <v-divider style="color: white; width: 100%;" />

          <v-toolbar dense
            flat
            color="#4573aa"
            height="auto">

            <a v-if="source"
              class="white--text"
              :href="source"
              target="_blank">
              Source of page
            </a>

            <v-spacer />

            <a v-if="source"
              class="white--text"
              href="/"
              target="_blank">
              SAPUI5 Version
            </a>

            <v-spacer v-if="isMobile" />

            <v-btn v-if="isMobile"
              text
              color="white"
              class="pa-0 ma-0"
              @click="SET_LAYOUT('TwoColumnsMidExpanded')">
              <span v-text="'Show more'" />
            </v-btn>
          </v-toolbar>
        </v-layout>
      </v-card-actions>
    </v-card>

    <photo-dialog v-model="dialogOpened"
      :src="photo" />
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import utilsMixin from "@/mixins/utils";

import BadgedImg from "./BadgedImg.vue";
import CardWithTitle from "./CardWithTitle.vue";
import PhotoDialog from "./PhotoDialog.vue";
import TheContact from "./TheContact.vue";
import TheLinear from "./TheLinear.vue";

export default {
  name: "LeftSide",

  components: {
    CardWithTitle,
    TheContact,
    TheLinear,
    PhotoDialog,
    BadgedImg,
  },

  mixins: [utilsMixin],

  data: () => ({
    dialogOpened: false,
  }),

  computed: {
    ...mapGetters(["contacts", "assets", "photo", "source"]),
  },

  methods: {
    ...mapMutations(["SET_LAYOUT"]),
  },
};
</script>

<style scoped>
.v-card__actions {
  bottom: 0;
  position: absolute;
  width: 100%;
  border-top: 1px solid #cecece;
  margin-bottom: 1px;
}
</style>