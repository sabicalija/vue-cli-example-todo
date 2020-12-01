<template>
  <div>
    <Todo v-for="(todo, i) of todos" :key="i" :text="todo" />
  </div>
</template>

<script>
import { mapState } from "vuex";

import Todo from "@/components/Todo.vue";

export default {
  name: "TodoList",
  components: { Todo },
  computed: {
    dummy2() {
      return "Stuff";
    },
    ...mapState(["todos", "dummy"]),
  },
};
</script>

<style lang="scss" scoped></style>
