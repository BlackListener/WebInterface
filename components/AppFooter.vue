<template>
  <footer class="page-footer">
    <div class="container">
      <div class="row">
        <div class="col l6 s12">
          <h5 v-t="'AppFooter.what_features'" class="white-text" />
          <p v-t="'AppFooter.features'" class="grey-text text-lighten-4" />
        </div>
        <div class="col l3 s12">
          <h5 class="white-text"><i class="material-icons">link</i>{{ $t('AppFooter.links') }}</h5>
          <ul>
            <li><a v-t="'AppFooter.documentation'" class="white-text" href="http://docs.blacklistener.tk/" /></li>
            <li><a v-t="'AppFooter.invite'" class="white-text" href="https://discordapp.com/oauth2/authorize?client_id=456966161079205899&permissions=8&scope=bot" /></li>
            <li><a class="white-text" href="https://github.com/BlackListener/BlackListener">GitHub</a></li>
            <li><a v-t="'AppFooter.bug_tracker'" class="white-text" href="https://bugs.rht0910.tk/projects/BL/issues/?filter=allopenissues" /></li>
            <li><a class="white-text" href="https://discordapp.com">Discord</a></li>
          </ul>
        </div>
        <div class="col l3 s12">
          <h5 class="white-text"><i class="material-icons">settings</i>{{ $t('AppFooter.settings') }}</h5>
          <ul>
            <li><a class="white-text" href="#!">Link 1</a></li>
            <li><a class="white-text" href="#!">Link 2</a></li>
            <li><a class="white-text" href="#!">Link 3</a></li>
            <li><a class="white-text" href="#!">Link 4</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-copyright">
      <div class="container">
        Made by <a href="https://github.com/rht0910">rht0910</a>
        <span class="right brightness" @click="toggleDarkMode">
          {{ !darkMode ? 'Dark' : 'Light' }} Mode
        </span>
      </div>
    </div>
  </footer>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'AppFooter',
  computed: mapState(['darkMode']),
  methods: mapMutations(['toggleDarkMode']),
}
</script>

<style>
footer {
  background-color: #ff9800!important;
}

.footer-copyright a {
  color: #ffcc80!important;
}

.dark footer {
  color: #c0c0c0!important;
  background-color: #101010!important;
}

.dark .footer-copyright a {
  color: #d0d0d0!important;
}

.brightness {
  cursor: pointer;
  user-select: none;
}
</style>
