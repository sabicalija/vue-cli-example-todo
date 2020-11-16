<template>
  <div>{{ text }}</div>
</template>

<script>
export default {
  name: "Todo",
  props: {
    text: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped></style>
