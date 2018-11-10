<template>
  <div>
    <div class="section no-pad-bot">
      <div class="container">
        <br><br>
        <h1 v-t="'LookupPage.info_inquiry'" class="header center" />
        <div class="row center">
          <h5 v-t="'LookupPage.info_inquiry_desc'" class="header col s12 light" />
        </div>
        <div class="row center">
          <input v-model="user_id" :placeholder="$t('LookupPage.user_id')" type="text" class="center">
          <button v-t="'LookupPage.search'" class="btn-large waves-effect waves-light" @click="find" />
        </div>
        <br><br>
      </div>
    </div>

    <div v-if="user.tag" class="container">
      <div class="section">
        <table>
          <tbody>
            <tr>
              <th v-t="'LookupPage.res_tag'" />
              <td v-text="user.tag" />
            </tr>
            <tr>
              <th v-t="'LookupPage.res_rep'" />
              <td v-text="user.rep" />
            </tr>
            <tr>
              <th v-t="'LookupPage.res_name_log'" />
              <td>
                <ul style="margin: 0;">
                  <li v-for="log in user.username_changes" :key="log" v-text="log" />
                </ul>
              </td>
            </tr>
            <tr v-t="'LookupPage.res_bot'">
              <th>ボットかどうか</th>
              <td v-text="user.bot ? 'はい' : 'いいえ'" />
            </tr>
            <tr>
              <th v-t="'LookupPage.res_created'" />
              <td v-text="new Date(user.createdTimestamp).toLocaleString()" />
            </tr>
          </tbody>
        </table>
        <table class="striped">
          <thead>
            <tr>
              <th v-t="'LookupPage.res_ban_servers'" />
              <th v-t="'LookupPage.res_ban_users'" />
              <th v-t="'LookupPage.res_ban_probes'" />
              <th v-t="'LookupPage.res_ban_reasons'" />
            </tr>
          </thead>
          <tbody>
            <tr v-if="!user.bannedFromUser.length">
              <td colspan="4" class="center">BANされていません</td>
            </tr>
            <tr v-for="(ban, i) in user.bannedFromServer" :key="ban">
              <td v-text="`${user.bannedFromServer[i]} (${user.bannedFromServerOwner[i]})`" />
              <td v-text="user.bannedFromUser[i]" />
              <td v-text="user.probes[i]" />
              <td v-text="user.reasons[i]" />
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
    },
  },
}
</script>
