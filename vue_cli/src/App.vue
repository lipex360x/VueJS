<template>
  <h1>{{ fullName }}</h1>

  <h2>{{ countValue }}</h2>
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
      countValue: 0
    }
  },

  computed: {
    fullName(): string {
      return `${this.name} ${this.lastname}`
    }
  },

  methods: {
    increment() {
      this.countValue++
    },
    decrease() {
      this.countValue--
    },
    reset() {
      this.countValue = 0
    }
  },

  watch: {
    countValue(newValue, oldValue) {
      console.log(newValue)
      console.log(oldValue)
    }
  }
})
</script>
