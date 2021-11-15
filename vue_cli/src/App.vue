<template>
  <ul>
    <li v-for="(todo, index) in doneTodos" :key="index">
      {{ todo.text }}
    </li>
  </ul>

  <button @click="checkAllTodos">Finish</button>
  <button @click="destroyComponent">Destroy</button>

  <hr />

  <h2>{{ count }}</h2>
  <button @click="increase">Add</button>
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
      todos: [] as ITodoProps[],
      count: 0
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

  methods: {
    checkAllTodos() {
      this.todos = this.todos.map(({ text }) => {
        return { text, done: true }
      })
    },

    increase() {
      this.count++
    },

    destroyComponent() {
      this.$.appContext.app.unmount()
    }
  },

  // Life cicle Hooks
  beforeCreate() {
    console.log('beforeCreate', this.todos)
  },

  created() {
    this.todos = [
      { text: 'Estudar Typescript', done: true },
      { text: 'Lavar os pratos', done: false },
      { text: 'Aprender Nuxt.js', done: true }
    ]

    console.log('created', this.todos)
  },

  beforeMount() {
    console.log('beforeMount', this.$el)
  },

  mounted() {
    console.log('mounted', this.$el)
  },

  beforeUpdate() {
    console.log('beforeUpdate', this.count)
  },

  updated() {
    console.log('updated', this.count)
  },

  beforeUnmount() {
    console.log('beforeUnmount')
  },

  unmounted() {
    console.log('unmounted')
  }
})
</script>
