<template>
  <div>
    <div class="section no-pad-bot">
      <div class="container">
        <br><br>
        <h1 class="header center">BlackListener</h1>
        <div class="row center">
          <h5 v-t="'HomePage.subtitle'" class="header col s12 light" />
        </div>
        <div class="row center">
          <a href="https://discordapp.com/oauth2/authorize?client_id=456966161079205899&permissions=8&scope=bot" class="btn-large waves-effect waves-light">招待</a>
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
              <h5 v-t="'HomePage.share_ban'" class="center" />

              <p v-t="'HomePage.share_ban_desc'" class="light" />
            </div>
          </div>

          <div class="col s12 m4">
            <div class="icon-block">
              <h2 class="center light-blue-text"><i class="material-icons">group</i></h2>
              <h5 v-t="'HomePage.info_inquiry'" class="center" />

              <p v-t="'HomePage.info_inquiry_desc'" class="light" />
            </div>
          </div>

          <div class="col s12 m4">
            <div class="icon-block">
              <h2 class="center light-blue-text"><i class="material-icons">settings</i></h2>
              <h5 v-t="'HomePage.visualization_setting'" class="center" />

              <p v-t="'HomePage.visualization_setting_desc'" class="light" />
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
