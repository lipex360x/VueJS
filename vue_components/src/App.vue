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
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import ButtonStyled from '@/components/ButtonStyled.vue'

export default defineComponent({
  components: { ButtonStyled },
  data() {
    return {
      user: {
        id: 1,
        name: 'John'
      }
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
