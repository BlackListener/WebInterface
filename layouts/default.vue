<template>
  <v-app white>
    <v-toolbar class="orange">
      <v-toolbar-title class="display-1">BlackListener</v-toolbar-title>
      <v-spacer />
      <v-btn flat>{{ $t('AppNavbar.login') }}</v-btn>
    </v-toolbar>
    <v-content>
      <nuxt />
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
}
</script>
