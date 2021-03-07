import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/scss/index.scss'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  mounted() {
    store.commit('SET_WINDOW_WIDTH', window.innerWidth)
    window.addEventListener('resize', () => {
      store.commit('SET_WINDOW_WIDTH', window.innerWidth)
    })
  },
  beforeDestroy() {
    window.removeEventListener('resize')
  },
  render: h => h(App)
}).$mount('#app')
