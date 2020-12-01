<template>
  <div class="home">
    <Toolbar />
    <TodoList />
    <!-- <button @click="onClick">Route me.</button> -->
  </div>
</template>

<script>
import Toolbar from "@/components/Toolbar.vue";
import TodoList from "@/components/TodoList.vue";

export default {
  name: "Home",
  components: {
    Toolbar,
    TodoList,
  },
  // data() {
  //   return {
  //     todos: [],
  //   };
  // },
  // methods: {
  // onAddTodo(todo) {
  //   this.todos.push(todo);
  // },
  // onClick() {
  //   this.$router.push("/about");
  // },
  // },
  // beforeMount() {
  //   console.log("Hello from Home.vue");
  //   console.log(this.todos);
  //   console.log(this.$route);
  // },
};
</script>
