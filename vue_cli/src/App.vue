<template>
  <h1>{{ fullName }}</h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      name: 'Hello',
      lastname: 'World'
    }
  },
  computed: {
    fullName(): string {
      return `${this.name} ${this.lastname}`
    }
  }
})
</script>
