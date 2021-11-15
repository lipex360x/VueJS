<template>
  <ul>
    <li v-for="(todo, index) in doneTodos" :key="index">
      {{ todo.text }}
    </li>
  </ul>

  <button @click="checkAllTodos">Finish</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

interface ITodoProps {
  text: string
  done: boolean
}

export default defineComponent({
  data() {
    return {
      todos: [] as ITodoProps[]
    }
  },

  computed: {
    doneTodos(): ITodoProps[] {
      return this.todos.filter((todo) => todo.done === true)
    }
  },

  watch: {
    todos(newValue: ITodoProps[]) {
      const isFinished = !newValue.some(({ done }) => !done)

      if (isFinished) alert('Yeaaa')
    }
  },

  created() {
    this.todos = [
      { text: 'Estudar Typescript', done: true },
      { text: 'Lavar os pratos', done: false },
      { text: 'Aprender Nuxt.js', done: true }
    ]
  },

  methods: {
    checkAllTodos() {
      this.todos = this.todos.map(({ text }) => {
        return { text, done: true }
      })
    }
  }
})
</script>
