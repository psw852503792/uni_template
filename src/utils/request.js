import store from '../store/index.js'
import config from './config.js'
const ajax = function(obj) {
  const defaultParams = {
    method: 'get',
    data: '',
    ...obj
  }
  return new Promise((resolve, reject) => {
    uni.request({
      url: config.base_url + defaultParams.url,
      method: defaultParams.method,
      dataType: 'json',
      header: {
        stuNumber: ` ${store.state.stuNumber}`,
        unionId: `${store.state.union_Id}`
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
