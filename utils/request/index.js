import store from '../../store/index.js'
import baseUrl from '../common/baseUrl.js'
const ajax = function(obj) {
    const defaultParams = {
        method: 'get',
        data: '',
        ...obj
    }
    return new Promise((resolve, reject) => {
        uni.request({
            url: baseUrl + defaultParams.url,
            method: defaultParams.method,
            dataType: 'json',
            header: {
                Authorization: `Token ${store.state.token}`
            },
            data: defaultParams.data,
            success: res => {
                resolve(res.data)
            },
            fail: err => {
                reject(err)
            }
        })
    })
}
export default ajax
