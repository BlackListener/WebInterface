<template>
  <div id="app" :class="{ dark: darkMode }">
    <app-navbar />
    <transition name="fade">
      <router-view />
    </transition>
    <app-footer />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import AppNavbar from './components/AppNavbar.vue'
import AppFooter from './components/AppFooter.vue'

export default {
  name: 'App',
  components: {
    AppNavbar,
    AppFooter,
  },
  computed: mapState(['darkMode']),
}
</script>

<style>
.section h1 {
  color: #ff9800!important;
}

.section .btn-large {
  background-color: #ff9800!important;
}

.dark {
  background-color: #303030;
  color: #d0d0d0;
}

.dark .section h1 {
  color: #2196F3!important;
}

.dark .section .btn-large {
  background-color: #2196F3!important;
}

.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: .25s;
}

.fade-enter-active {
  transition-delay: .25s;
}

.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
