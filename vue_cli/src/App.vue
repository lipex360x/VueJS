<template>
  <h1>{{ name }} {{ lastname }}</h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      name: 'Hello',
      lastname: 'World'
    }
  }
})
</script>
