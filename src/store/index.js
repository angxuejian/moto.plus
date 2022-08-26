import { createStore } from 'vuex';

export default createStore({
  state: {
    theme: '', // 默认为空(白)，dark(黑)
  },
  mutations: {
    SET_THEME: (state, value) => { state.theme = value },
  },
  actions: {
    CHANGE_THEME: function(context) {
      if (!context.state.theme) {
        document.documentElement.setAttribute('theme', 'dark')
        context.commit('SET_THEME', 'dark')
      } else {
        document.documentElement.removeAttribute('theme')
        context.commit('SET_THEME', '')
      }
    },
  },
  modules: {},
});

