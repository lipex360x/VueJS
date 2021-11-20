<template>
  <ul>
    <li v-for="todo in $allTodos" :key="todo.id">
      {{ todo.text }}

      <button @click="deleteTodo(todo.id)">X</button>
    </li>
  </ul>
</template>

<script>
export default {
  computed: {
    $allTodos() {
      return this.$store.getters.$allTodos
    }
  },
  created() {
    this.$store.dispatch('fetchTodos')
  },

  methods: {
    deleteTodo(id) {
      this.$store.dispatch('deleteTodo', id)
    }
  }
}
</script>
