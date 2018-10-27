<template>
  <div class="section no-pad-bot">
    <div class="container">
      <br><br>
      <h1 class="header center orange-text">404 Not Found</h1>
      <div class="row center">
        <h5 v-t="'UnknownRoutePage.not_exists'" class="header col s12 light" />
      </div>
      <div class="row center">
        <router-link v-t="'UnknownRoutePage.back_to_top'" to="/" class="btn-large waves-effect waves-light orange" />
      </div>
      <br><br>
    </div>
  </div>
</template>
