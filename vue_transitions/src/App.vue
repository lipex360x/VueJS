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
    :appear="true"
  >
    <h1 v-if="show">Vue Content</h1>
  </transition>
  <hr />

  <!-- hooks -->
  <!-- 
    @before-enter="beforeEnter"
    @enter="enter"
    @after-enter="afterEnter"
    @enter-cancelled="enterCancelled"
    @before-leave="beforeLeave"
    @leave="leave"
    @after-leave="afterLeave"
    @leave-cancelled="leaveCancelled"
    :css="false"
     -->
  <transition
    @after-enter="beforeEnter"
    enter-active-class="animate__animated animate__fadeInDown "
    leave-active-class="animate__animated animate__fadeOutUp animate__faster"
  >
    <h1 v-if="show">Vue Content</h1>
  </transition>
  <hr />

  <transition
    enter-active-class="animate__animated animate__fadeInDown "
    leave-active-class="animate__animated animate__fadeOutUp animate__faster"
    :appear="true"
  >
    <h1 :v-if="true">Vue Content</h1>
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
  },

  methods: {
    beforeEnter(element: HTMLElement) {
      element.classList.add('test')
      console.log(element)
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

/* hooks */
.test {
  color: green;
}
</style>
