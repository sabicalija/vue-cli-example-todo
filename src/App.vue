<template>
  <div id="app">
    <Toolbar @addTodo="onAddTodo" />
    <TodoList :data="todos" />
  </div>
</template>

<script>
import Toolbar from "@/components/Toolbar.vue";
import TodoList from "@/components/TodoList.vue";

export default {
  name: "App",
  components: {
    Toolbar,
    TodoList,
  },
  data() {
    return {
      todos: [],
    };
  },
  methods: {
    onAddTodo(todo) {
      this.todos.push(todo);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
