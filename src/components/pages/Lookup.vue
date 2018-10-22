<template>
  <div>
    <div class="section no-pad-bot">
      <div class="container">
        <br><br>
        <h1 class="header center orange-text">データ照会</h1>
        <div class="row center">
          <h5 class="header col s12 light">BlackListenerボットの<a href="https://go.blacklistener.tk/go/commands/lookup">lookupコマンド</a>とほとんど同じ動きをします。</h5>
        </div>
        <div class="row center">
          <input type="text" v-model="user_id" placeholder="ユーザーID" />
          <button @click="find" class="btn-large waves-effect waves-light orange">検索</button>
        </div>
        <br><br>
      </div>
    </div>

    <div class="container">
      <div class="section">

        <div class="row">
          <div class="col s12 m4">
            <table>
              <tbody>
                <tr>
                  <td>ユーザーネーム</td>
                  <td>{{ this.user.username }}</td>
                </tr>
                <tr>
                  <td>アカウント作成</td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="col s12 m4">
            <div class="icon-block">
              <h2 class="center light-blue-text"><i class="material-icons">group</i></h2>
              <h5 class="center">簡単な情報照会</h5>

              <p class="light">誰でも簡単に、ユーザーのBAN情報などを見れるようにしよう(未来系)。</p>
            </div>
          </div>

          <div class="col s12 m4">
            <div class="icon-block">
              <h2 class="center light-blue-text"><i class="material-icons">settings</i></h2>
              <h5 class="center">サーバー設定を可視化</h5>

              <p class="light">あのテキストベースではなくもっとわかりやすいもので表されます。</p>
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
  name: 'lookup',
  data: function() {
    return {
      user_id: '',
      user: {},
    }
  },
  methods: {
    async find() {
      console.log('haha')
      const res = await fetch('https://compute.blacklistener.tk/data/users/' + this.user_id + '/config.json')
      this.user = await res.json()
    },
  },
}
</script>
