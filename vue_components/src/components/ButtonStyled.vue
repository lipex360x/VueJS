<template>
  <button :class="['buttonStyled', color]">
    <slot name="before" />
    {{ text }}
    {{ user.name }}
    <slot name="after" />
  </button>
</template>

<script lang="ts">
interface IUserProp {
  id: number
  name: string
}

import { defineComponent, PropType } from 'vue'

type color = 'success' | 'danger' | 'primary'

export default defineComponent({
  props: {
    text: {
      type: [String, Number],
      default: 'Default Value'
    },
    color: {
      type: String,
      default: 'primary',
      validator: (value: color) => {
        return ['success', 'danger', 'primary'].includes(value)
      }
    },
    user: {
      type: Object as PropType<IUserProp>,
      required: true
    }
  }
})
</script>

<style scoped>
.buttonStyled {
  color: #fff;
  border-radius: 0.3rem;
  padding: 0.5rem 1rem;
  outline: none;
  border: none;
  cursor: pointer;
  display: block;
  margin-bottom: 1rem;
  background-color: #2d6cea;
}

.success {
  background-color: green;
}

.danger {
  background-color: rgba(253, 2, 2, 0.637);
  border: 1px solid red !important;
}

.primary {
  background-color: #2d6cea;
}
</style>
