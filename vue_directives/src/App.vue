<template>
  <a :href="products.url" :class="productClass">
    {{ products.name }}
  </a>

  <p v-text="products.name"></p>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      products: {
        name: 'Camisa',
        url: 'http://loja.com/camisa',
        available: true
      }
    }
  },
  computed: {
    productClass(): string {
      return this.products.available ? 'success' : 'danger'
    }
  }
})
</script>

<style scoped>
.success {
  color: green;
}

.danger {
  color: red;
}
</style>
