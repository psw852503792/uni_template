import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        hasLogin: false,
        userInfo: {}
    },
    mutations: {
        login(state, provider) {
            state.hasLogin = true
            state.userInfo = provider
            uni.setStorageSync('userInfo', JSON.stringify(provider))
        },
        logout(state) {
            state.hasLogin = false
            state.userInfo = {}
            uni.removeStorageSync('userInfo')
        }
    }
})

export default store
