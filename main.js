import App from './App'
import store from './store'

import TopMenu from '@/components/TopMenu'
Vue.component('topMenu', TopMenu)
import LeftMenu from '@/components/LeftMenu'
Vue.component('leftMenu', LeftMenu)
import uView from '@/uni_modules/uview-ui'
Vue.use(uView)
// 如此配置即可
// uni.$u.config.unit = 'rpx'

// #ifndef VUE3
import Vue from 'vue'
import * as filters from '@/plugins/filters'

Vue.config.productionTip = false
App.mpType = 'app'

Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
})

const app = new Vue({
	store,
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'

export function createApp() {
  const app = createSSRApp(App)
  app.use(store)
  return {
    app
  }
}
// #endif