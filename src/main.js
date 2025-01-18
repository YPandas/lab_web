import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'; // 导入 store.js 文件
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false
Vue.use(ElementUI);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
