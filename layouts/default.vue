<template>
  <div id="app" :class="{ dark: darkMode }">
    <app-navbar />
    <nuxt />
    <app-footer />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import AppNavbar from '~/components/AppNavbar.vue'
import AppFooter from '~/components/AppFooter.vue'

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

.page-enter-active, .page-leave-active {
  transition-property: opacity;
  transition-duration: .25s;
}

.page-enter-active {
  transition-delay: .25s;
}

.page-enter, .page-leave-active {
  opacity: 0
}
</style>
