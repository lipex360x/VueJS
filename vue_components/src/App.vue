<template>
  <h1>Hello Vue</h1>
  <ButtonStyled />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import ButtonStyled from '@/components/ButtonStyled.vue'

export default defineComponent({
  components: { ButtonStyled }
})
</script>
