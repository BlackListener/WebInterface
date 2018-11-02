<template>
  <div id="app">
    <app-navbar />
    <transition name="fade">
      <router-view />
    </transition>
    <app-footer />
  </div>
</template>

<script>
import AppNavbar from './components/AppNavbar.vue'
import AppFooter from './components/AppFooter.vue'

export default {
  name: 'App',
  components: {
    AppNavbar,
    AppFooter,
  },
}
</script>

<style>
.section h1 {
  color: #ff9800!important;
}

.section .btn-large {
  background-color: #ff9800!important;
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
