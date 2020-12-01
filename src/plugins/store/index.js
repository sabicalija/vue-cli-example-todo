import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    todos: [],
    dummy: "Fun"
  },
  mutations: {
    addTodo(state, todo) {
      state.todos.push(todo);
    }
  }
})

export default store;