<template>
  <h1>Hello Vue</h1>
  <ButtonStyled text="Save" color="danger" :user="user" />
  <ButtonStyled :user="user" />
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
