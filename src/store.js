import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    darkMode: localStorage.getItem('dark-mode') === 'true',
  },
  mutations: {
    toggleDarkMode(state) {
      state.darkMode = !state.darkMode
      localStorage.setItem('dark-mode', state.darkMode)
    },
  },
})
