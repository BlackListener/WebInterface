<template>
  <div>
    <div class="section no-pad-bot">
      <div class="container">
        <br><br>
        <h1 class="header center">データ照会</h1>
        <div class="row center">
          <h5 class="header col s12 light">BlackListenerボットの<a href="https://go.blacklistener.tk/go/commands/lookup">lookupコマンド</a>とほとんど同じ動きをします。</h5>
        </div>
        <div class="row center">
          <input v-model="user_id" type="text" placeholder="ユーザーID">
          <button class="btn-large waves-effect waves-light" @click="find">検索</button>
        </div>
        <br><br>
      </div>
    </div>

    <div v-if="user.id" class="container">
      <div class="section">
        <table>
          <tbody>
            <tr>
              <th>評価値</th>
              <td>{{ user.rep }}</td>
            </tr>
            <tr>
              <th>ユーザータグ</th>
              <td>{{ user.tag }}</td>
            </tr>
            <tr>
              <th>ユーザーID</th>
              <td>{{ user.id }}</td>
            </tr>
            <tr>
              <th>名前変更</th>
              <td>{{ user.username_changes }}</td>
            </tr>
            <tr>
              <th>ボットかどうか</th>
              <td>{{ user.bot }}</td>
            </tr>
            <tr>
              <th>作成日時</th>
              <td>{{ user.createdTimestamp }}</td>
            </tr>
            <tr>
              <th>現在の日時</th>
              <td>{{ now }}</td>
            </tr>
          </tbody>
        </table>
        <table class="striped">
          <thead>
            <tr>
              <th>BANされたサーバー (オーナー)</th>
              <th>BANを実行したユーザー</th>
              <th>証拠一覧</th>
              <th>理由一覧</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(ban, i) in user.bannedFromServer" :key="ban">
              <td>{{ user.bannedFromServer[i] }} ({{ user.bannedFromServerOwner[i] }})</td>
              <td>{{ user.bannedFromUser[i] }}</td>
              <td>{{ user.probes[i] }}</td>
              <td>{{ user.reasons[i] }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Lookup',
  data() {
    return {
      user_id: '',
      user: {},
      now: '',
    }
  },
  methods: {
    async find() {
      const res = await fetch('https://api.blacklistener.tk/v1/users/' + this.user_id)
      this.user = await res.json()
      this.user.id = this.user_id
      this.now = new Date().toLocaleString()
    },
  },
}
</script>
