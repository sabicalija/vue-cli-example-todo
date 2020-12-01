<template>
  <div>
    <button @click="onClick">Add Todo</button>
    <input v-model="inputText" type="text" />
  </div>
</template>

<script>
export default {
  name: "Toolbar",
  data() {
    return {
      inputText: "",
    };
  },
  methods: {
    onClick() {
      // this.$emit("addTodo", this.inputText);
      this.$store.commit("addTodo", this.inputText);
      this.inputText = "";
    },
  },
};
</script>

<style lang="scss" scoped></style>
