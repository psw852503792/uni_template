import $ from './common'
import store from '../store'
const api = {
    init() {
	    const unionId = $.getQueryString('union_id')
	    const openId = $.getQueryString('open_id')
	    if (unionId && openId) {
	        const data = {
			    unionId,
			    openId
	        }
	        uni.setStorageSync('userId', data)
	        store.commit('setUserId', data)
            uni.reLaunch({
                url: '/pages/index/index'
            })
	    }
    }
}
export default api