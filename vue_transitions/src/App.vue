<template>
  <button @click="show = !show">Toggle</button>

  <!-- fade -->
  <transition name="fade">
    <h1 v-if="show">Vue Content</h1>
  </transition>
  <hr />

  <!-- Custon: animate.style -->
  <transition
    enter-active-class="animate__animated animate__fadeInDown"
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
    @before-leave="beforeLeave"
    enter-active-class="animate__animated animate__fadeInDown "
    leave-active-class="animate__animated animate__fadeOutUp animate__faster"
  >
    <h1 v-if="show">Vue Content</h1>
  </transition>
  <hr />

  <!-- Appear -->
  <transition
    enter-active-class="animate__animated animate__fadeInDown "
    leave-active-class="animate__animated animate__fadeOutUp animate__faster"
    :appear="true"
  >
    <h1 :v-if="true">Vue Content</h1>
  </transition>
  <hr />

  <!-- mode -->
  <ul>
    <li @click="view = 'Home'">Home</li>
    <li @click="view = 'About'">About</li>
    <li @click="view = 'Contact'">Contact</li>
  </ul>
  <transition
    enter-active-class="animate__animated animate__fadeIn animate__faster"
    leave-active-class="animate__animated animate__fadeOut animate__faster"
    mode="out-in"
  >
    <component :is="view" />
  </transition>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import 'animate.css'

import Home from '@/pages/Home.vue'
import About from '@/pages/About.vue'
import Contact from '@/pages/Contact.vue'

export default defineComponent({
  components: { Home, About, Contact },
  data() {
    return {
      show: false,
      view: 'Home'
    }
  },

  methods: {
    beforeEnter(element: HTMLElement) {
      element.classList.add('in')
    },

    beforeLeave(element: HTMLElement) {
      element.classList.add('out')
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
  transition: opacity 2s;
}

/* hooks */
.in {
  color: green;
}

.out {
  color: red;
}
</style>
