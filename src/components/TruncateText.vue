<template>
  <div>
    <span v-text="_text"
      style="white-space: break-spaces;" />

    <a v-if="moreMax && showMoreButton"
      class="ml-2"
      @click="toggled = !toggled"
      v-text="`Show ${toggled ? 'less' : 'more'}`" />
  </div>
</template>

<script>
export default {
  name: "TruncateText",

  props: {
    text: String,

    showMoreButton: {
      type: Boolean,
      default: true,
    },

    maxLength: {
      type: Number,
      default: 799,
    },
  },

  data: () => ({
    toggled: false,
  }),

  computed: {
    _text() {
      let sText = this.text;

      if (this.moreMax && !this.toggled) {
        sText = this.text.slice(0, this.maxLength) + "...";
      }
      return sText;
    },

    moreMax() {
      return this.text.length > this.maxLength;
    },
  },
};
</script>