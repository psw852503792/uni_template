import Vue from 'vue'
import App from './App'
import store from './store'
import api from './utils/common'
import http from './api'

import FlexLayout from './components/base/FlexLayout.vue'

Vue.component('FlexLayout', FlexLayout)
Vue.config.productionTip = false

Vue.prototype.$store = store
Vue.prototype.$api = api
Vue.prototype.$http = http
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
