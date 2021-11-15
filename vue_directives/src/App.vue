<template>
  <!-- v-on = @ = event handler -->
  <a :href="product.url" :class="productClass" @click.prevent="redirect">
    {{ product.name }}
  </a>

  <p v-text="product.name" />
  <p v-html="product.textStar" />

  <input type="text" @keyup="keyPressed" />

  <hr />

  <p v-once>Initial stock: {{ product.stock }}</p>
  <p>Updated stock: {{ product.stock }}</p>
  <button @click="increase">Increase Stock</button>
  <button @click="decrease">Decrease Stock</button>

  <hr />

  <div>
    <h1 v-if="statusBuy">Buy it?</h1>
    <button v-show="statusBuy">Yes</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      product: {
        name: 'Camisa',
        url: '#local',
        textStar: '<b>Beautiful</b>',
        available: true,
        stock: 1
      }
    }
  },
  computed: {
    productClass(): string {
      return this.product.available ? 'success' : 'danger'
    },

    statusBuy(): boolean {
      return this.product.stock > 0 ? true : false
    }
  },
  methods: {
    redirect() {
      console.log('redirect')
    },

    keyPressed() {
      console.log('key pressed')
    },

    increase() {
      this.product.stock++
    },

    decrease() {
      if (this.product.stock >= 0) this.product.stock--
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
