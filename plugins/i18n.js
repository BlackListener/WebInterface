import Vue from 'vue'
import VueI18n from 'vue-i18n'
import browserLang from 'browser-lang'

Vue.use(VueI18n)

const messages = {
  en: require('~/locales/en.json'),
  ja: require('~/locales/ja.json'),
}

const locale = browserLang({
  languages: Object.keys(messages),
  fallback: 'en',
})

export default ({ app }) => {
  app.i18n = new VueI18n({ locale, messages })
}
