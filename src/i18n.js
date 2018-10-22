import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

export default new VueI18n({
  locale: 'ja',
  messages: {
    ja: {
      AppNavbar: {
        login: 'ログイン',
      },
      AppFooter: {
        what_features: 'BlackListenerの機能は？',
        features: 'アンチスパム(休止中)、グローバルBAN、メッセージ削除(数で指定)、その他の機能も。',
        links: 'リンク',
        documentation: '説明書',
        invite: '招待',
        bug_tracker: 'バグトラッカー',
        settings: '設定',
      },
      HomePage: {
        subtitle: 'グローバルBANが可能なDiscordボット',
        invite: '招待',
        share_ban: 'BANの共有',
        share_ban_desc: '荒らしはサーバーにとってとても厄介な存在です。そしてBANをこのボットを使って共有しましょう。',
        info_inquiry: '簡単な情報照会',
        info_inquiry_desc: '誰でも簡単に、ユーザーのBAN情報などを見れるようにしよう(未来系)。',
        visualization_setting: 'サーバー設定を可視化',
        visualization_setting_desc: 'あのテキストベースではなくもっとわかりやすいもので表されます。',
      },
      UnknownRoutePage: {
        not_exists: '指定されたページは存在しません。',
        back_to_top: 'トップへ戻る',
      },
    },
    en: {
      AppNavbar: {
        login: 'Login',
      },
      AppFooter: {
        what_features: 'What\'s BlackListener\'s features?',
        features: 'Antispam(Disabled), Global Banning, Delete Message(Specify by number), And other things!',
        links: 'Links',
        documentation: 'Documentation',
        invite: 'Invite',
        bug_tracker: 'Bug tracker',
        settings: 'Settings',
      },
      HomePage: {
        subtitle: 'Bot that a Global BAN can do',
        invite: 'Invite',
        share_ban: 'Share a BAN',
        share_ban_desc: 'Vandalism is a very troubling existence for the server. Let\'s share the BAN with this bot.',
        info_inquiry: 'Easy to find information',
        info_inquiry_desc: 'Everyone can easily see the user\'s BAN information etc (future system).',
        visualization_setting: 'Visualization of<br />Server settings',
        visualization_setting_desc: 'It is represented not by text but by more obvious things.',
      },
    },
    UnknownRoutePage: {
      not_exists: 'Specified page does not exist.',
      back_to_top: 'Back to top page',
    },
  },
})
