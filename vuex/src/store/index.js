import { createStore } from 'vuex'

export default createStore({
  state: {
    todos: []
  },

  mutations: {
    SET_TODOS(state, todos) {
      state.todos = todos
    },

    DELETE_TODO(state, id) {
      state.todos = state.todos.filter((todo) => todo.id !== id)
    }
  },

  actions: {
    fetchTodos(context) {
      console.log('todos dispatch')
      const todos = [
        { id: 1, text: 'Estudar HTML & CSS', done: true },
        { id: 2, text: 'Conceitos Vuex', done: true },
        { id: 3, text: 'Atomic Design', done: false },
        { id: 4, text: 'Começar com Nuxt', done: false },
        { id: 5, text: 'Back-end com Adonis', done: false }
      ]

      context.commit('SET_TODOS', todos)
    },

    deleteTodo(context, id) {
      context.commit('DELETE_TODO', id)
    }
  },

  getters: {
    $allTodos(state) {
      return state.todos
    },

    $doneTodos(state) {
      return state.todos.filter((todo) => todo.done)
    }
  }
})
