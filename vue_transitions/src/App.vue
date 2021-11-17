<template>
  <button @click="show = !show">Toggle</button>

  <!-- fade -->
  <transition name="fade">
    <h1 v-if="show">Vue Content</h1>
  </transition>

  <hr />

  <!-- Custon: animate.style -->
  <transition
    enter-active-class="animate__animated animate__fadeInDown "
    leave-active-class="animate__animated animate__fadeOutUp animate__faster"
  >
    <h1 v-if="show">Vue Content</h1>
  </transition>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import 'animate.css'

export default defineComponent({
  data() {
    return {
      show: false
    }
  }
})
</script>

<style scoped>
/* fade */
.fade-leave-to,
.fade-enter-from {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

/* custon */
</style>
