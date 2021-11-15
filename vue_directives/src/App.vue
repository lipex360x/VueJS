<template>
  <!-- v-on = @ = event handler -->
  <a :href="products.url" :class="productClass" @click.prevent="redirect">
    {{ products.name }}
  </a>

  <p v-text="products.name" />
  <p v-html="products.textStar" />

  <input type="text" @keyup="keyPressed" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      products: {
        name: 'Camisa',
        url: '#local',
        textStar: '<b>Beautiful</b>',
        available: true
      }
    }
  },
  computed: {
    productClass(): string {
      return this.products.available ? 'success' : 'danger'
    }
  },
  methods: {
    redirect() {
      console.log('redirect')
    },

    keyPressed(value: string) {
      console.log(value)
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
