<template>
  <nav class="gray lighten-1" role="navigation">
    <div class="nav-wrapper container"><a id="logo-container" href="#" class="brand-logo">BlackListener</a>
      <ul class="right hide-on-med-and-down">
        <li><a href="#">{{ $t('AppNavbar.login') }}</a></li>
      </ul>
      <ul id="nav-mobile" class="sidenav">
        <li><a href="#">{{ $t('AppNavbar.login') }}</a></li>
      </ul>
      <a href="#" data-target="nav-mobile" class="sidenav-trigger"><i class="material-icons">menu</i></a>
    </div>
  </nav>
</template>

<script>
import M from 'materialize-css/dist/js/materialize.min.js'

export default {
  name: 'app-navbar',
  mounted: () => {
    M.Sidenav.init(document.querySelectorAll('.sidenav'))
  },
}
</script>
