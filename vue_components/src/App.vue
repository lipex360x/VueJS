<template>
  <h1>Hello Vue</h1>
  <ButtonStyled text="Save" color="danger" :user="user">
    <template v-slot:before>
      <i class="fab fa-accusoft"></i>
    </template>

    <template v-slot:after>
      <i class="fab fa-500px"></i>
    </template>
  </ButtonStyled>

  <ButtonStyled :user="{ name: 'Doe' }" @viewConsole="action($event)" />

  <hr />

  <ul>
    <li @click="currentView = 'Home'">Home</li>
    <li @click="currentView = 'About'">About</li>
    <li @click="currentView = 'Contact'">Contact</li>
  </ul>

  <component :is="currentView" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Home from '@/pages/Home.vue'
import About from '@/pages/About.vue'
import Contact from '@/pages/Contact.vue'

export default defineComponent({
  components: { Home, About, Contact },

  data() {
    return {
      user: {
        id: 1,
        name: 'John'
      },

      currentView: 'Home'
    }
  },

  methods: {
    action(event: string) {
      console.log('action emited -', event)
    }
  }
})
</script>

<style scoped>
.buttonStyled {
  /* css here */
  border: 1px solid blue;
}

::v-deep.buttonStyled span {
  color: red;
}
</style>
