<template>
  <div class="section no-pad-bot">
    <div class="container">
      <br><br>
      <h1 class="header center orange-text">404 Not Found</h1>
      <div class="row center">
        <h5 class="header col s12 light">{{ $t('UnknownRoutePage.not_exists') }}</h5>
      </div>
      <div class="row center">
        <router-link to="/" class="btn-large waves-effect waves-light orange">{{ $t('UnknownRoutePage.back_to_top') }}</router-link>
      </div>
      <br><br>
    </div>
  </div>
</template>
