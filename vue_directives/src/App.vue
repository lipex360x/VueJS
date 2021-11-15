<template>
  <!-- v-on = @ = event handler -->
  <div>
    <a :href="product.url" :class="productClass" @click.prevent="redirect">
      {{ product.name }}
    </a>

    <p v-text="product.name" />
    <p v-html="product.textStar" />

    <input type="text" @keyup="keyPressed" />

    <hr />

    <!-- v-once -->
    <p v-once>Initial stock: {{ product.stock }}</p>
    <p>Updated stock: {{ product.stock }}</p>
    <button @click="increase">Increase Stock</button>
    <button @click="decrease">Decrease Stock</button>
  </div>
  <hr />

  <!-- v-if / v-show -->
  <div>
    <h1 v-if="statusBuy">Buy it?</h1>
    <button v-show="statusBuy">Yes</button>
  </div>
  <hr />

  <!-- v-for -->
  <div>
    <p v-for="product in products" :key="product.id" :class="productStatus(product.id)">
      {{ product.name }} - Stock: {{ product.stock }} |
      <button @click="decreaseProduct(product.id)">-</button>
      <button @click="increaseProduct(product.id)">+</button>
    </p>
  </div>
  <hr />

  <!-- v-model -->
  <div>
    <form>
      <h2>Form Bind</h2>
      <input type="text" placeholder="Nome" v-model="form.name" />

      <input type="number" placeholder="Idade" v-model="form.age" />

      <textarea rows="2" placeholder="Descrição" v-model="form.message"></textarea>

      <input type="checkbox" v-model="form.newsletter" /> Newsletter <br />

      <input type="radio" name="color" value="vermelho" v-model="form.color" /> Vermelho
      <input type="radio" name="color" value="verde" v-model="form.color" /> Verde
      <input type="radio" name="color" value="azul" v-model="form.color" /> Azul

      <select v-model="form.fruit">
        <option disabled selected>Selecione uma fruta</option>
        <option value="uva">Uva</option>
        <option value="banana">Banana</option>
        <option value="morango">Morango</option>
      </select>
    </form>

    <p>Nome: {{ form.name }}</p>
    <p>Idade: {{ form.age }}</p>
    <p>Mensagem: {{ form.message }}</p>
    <p>Newsletter: {{ form.newsletter }}</p>
    <p>Cor: {{ form.color }}</p>
    <p>Fruta: {{ form.fruit }}</p>
  </div>
  <hr />

  <!-- custom directive -->
  <div>
    <h2 v-highlight:background.shadow="'green'">Custom Directive</h2>
    <h3 v-highlight="'blue'">Lorem Ipsum</h3>
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
      },
      products: [
        { id: 1, name: 'Camisa', available: true, stock: 1 },
        { id: 2, name: 'Bota', available: false, stock: 0 },
        { id: 3, name: 'Chapéu', available: false, stock: 0 },
        { id: 4, name: 'Cinto', available: true, stock: 5 }
      ],
      form: {
        name: '',
        age: 0,
        message: '',
        newsletter: false,
        color: '',
        fruit: ''
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
    },

    increaseProduct(id: number) {
      const productIndex = this.products.findIndex((product) => product.id === id)

      const product = this.products[productIndex]

      product.stock++
      product.available = true
    },

    decreaseProduct(id: number) {
      const productIndex = this.products.findIndex((product) => product.id === id)

      const product = this.products[productIndex]

      if (product.stock > 0) product.stock--
      if (product.stock == 0) product.available = false
    },

    productStatus(id: number) {
      const getProduct = this.products.find((product) => product.id === id)

      return getProduct?.available ? 'success' : 'danger'
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
  text-decoration: line-through;
}

input[type='email'],
input[type='text'],
select,
textarea {
  display: block;
}

form {
  padding-bottom: 1rem;
  border-bottom: 2px solid #000;
}
</style>
