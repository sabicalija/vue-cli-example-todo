<template>
  <div>
    <Todo v-for="(todo, i) of data" :key="i" :text="todo" />
  </div>
</template>

<script>
import Todo from "@/components/Todo.vue";

export default {
  name: "TodoList",
  components: { Todo },
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped></style>
