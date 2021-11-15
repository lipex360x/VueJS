<template>
  <h1>{{ fullName }}</h1>

  <h2>{{ count }}</h2>
  <button @click="increment">Add</button>
  <button @click="decrease">Del</button>
  <button @click="reset">reset</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      name: 'Hello',
      lastname: 'World',
      count: 0
    }
  },

  computed: {
    fullName(): string {
      return `${this.name} ${this.lastname}`
    }
  },

  methods: {
    increment() {
      this.count++
    },
    decrease() {
      this.count--
    },
    reset() {
      this.count = 0
    }
  }
})
</script>
