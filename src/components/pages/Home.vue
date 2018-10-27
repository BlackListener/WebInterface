<template>
  <div>
    <div class="section no-pad-bot">
      <div class="container">
        <br><br>
        <h1 class="header center orange-text">BlackListener</h1>
        <div class="row center">
          <h5 class="header col s12 light">{{ $t('HomePage.subtitle') }}</h5>
        </div>
        <div class="row center">
          <a href="https://discordapp.com/oauth2/authorize?client_id=456966161079205899&permissions=8&scope=bot" class="btn-large waves-effect waves-light orange">招待</a>
        </div>
        <br><br>

      </div>
    </div>

    <div class="container">
      <div class="section">

        <div class="row">
          <div class="col s12 m4">
            <div class="icon-block">
              <h2 class="center light-blue-text"><i class="material-icons">block</i></h2>
              <h5 class="center">{{ $t('HomePage.share_ban') }}</h5>

              <p class="light">{{ $t('HomePage.share_ban_desc') }}</p>
            </div>
          </div>

          <div class="col s12 m4">
            <div class="icon-block">
              <h2 class="center light-blue-text"><i class="material-icons">group</i></h2>
              <h5 class="center">{{ $t('HomePage.info_inquiry') }}</h5>

              <p class="light">{{ $t('HomePage.info_inquiry_desc') }}</p>
            </div>
          </div>

          <div class="col s12 m4">
            <div class="icon-block">
              <h2 class="center light-blue-text"><i class="material-icons">settings</i></h2>
              <h5 class="center">{{ $t('HomePage.visualization_setting') }}</h5>

              <p class="light">{{ $t('HomePage.visualization_setting_desc') }}</p>
            </div>
          </div>
        </div>

      </div>
      <br><br>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>

<style>
.icon-block {
  padding: 0 15px;
}
.icon-block .material-icons {
  font-size: inherit;
}
</style>
