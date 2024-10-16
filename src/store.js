// src/store.js
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    themeColor: '#fcd21d' // 默认主题颜色
  },
  mutations: {
    setThemeColor(state, color) {
      state.themeColor = color;
      // 动态更新 CSS 变量
      document.documentElement.style.setProperty('--theme-color', color);
    }
  }
});
