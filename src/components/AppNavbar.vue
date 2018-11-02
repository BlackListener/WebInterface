<template>
  <nav class="gray lighten-1" role="navigation">
    <div class="nav-wrapper container">
      <router-link to="/" class="brand-logo">BlackListener</router-link>
      <ul class="right hide-on-med-and-down">
        <li><a v-t="'AppNavbar.login'" href="#" /></li>
      </ul>
      <ul id="nav-mobile" class="sidenav">
        <li><a v-t="'AppNavbar.login'" href="#" /></li>
      </ul>
      <a href="#" data-target="nav-mobile" class="sidenav-trigger"><i class="material-icons">menu</i></a>
    </div>
  </nav>
</template>

<script>
import M from 'materialize-css/dist/js/materialize.min.js'

export default {
  name: 'AppNavbar',
  data() {
    return {
      instances: null,
    }
  },
  mounted() {
    M.Sidenav.init(document.querySelectorAll('.sidenav'))
  },
  beforeDestroy() {
    this.instances.forEach(instance => instance.destroy())
  },
}
</script>

<style>
.dark nav {
  background-color: #101010;
  color: #c0c0c0;
}
</style>
