<template>
  <div id="index">
    <v-parallax>
      <v-layout
        align-center
        justify-center
        column
      >
        <h1 class="display-1 black--text">BlackListener</h1>
        <h3 class="subheading display-3 black--text">{{ $t('HomePage.subtitle') }}</h3>
      </v-layout>
    </v-parallax>
  </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>
