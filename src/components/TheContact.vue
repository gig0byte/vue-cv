<template>
  <div>
    <v-icon v-if="icon"
      color="white"
      small
      class="mr-3"
      v-text="'mdi-' + icon" />

    <component :is="href ? 'a' : 'span'"
      :href="href"
      class="white--text"
      v-text="title" />
  </div>
</template>

<script>
export default {
  name: "TheContact",

  props: {
    title: String,
    href: String,
    icon: String,
  },
};
</script>