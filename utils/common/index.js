const api = {
    copyText(data) {
        // #ifdef H5
        var NumClip = document.createElement('div')
        NumClip.innerHTML = data
        NumClip.style = 'position: absolute;left: 9999px;-webkit-user-select:all; top:0'
        document.body.appendChild(NumClip)
        window.getSelection().removeAllRanges()
        var range = document.createRange()
        range.selectNode(NumClip)
        window.getSelection().addRange(range)
        if (document.execCommand('copy', false, null)) {
            document.execCommand('copy', false, null)// 执行浏览器复制命令
            this.toast('已复制')
        } else {
            console.log('不兼容')
        }
        window.getSelection().removeAllRanges()
        document.body.removeChild(NumClip)
        // #endif

        // #ifndef H5
        uni.setClipboardData({
            data: data,
            success: function(res) {
                console.log(res)
            }
        })
        // #endif
    },
    getQueryString(name) {
        var reg = new RegExp('(^|&|/?)' + name + '=([^&]*)(&|$)', 'i')
        var r = window.location.href.match(reg)
        if (r != null) return decodeURI(r[2])
        return null
    },
    showLoading(mask = true, title = '加载中...') {
        uni.showLoading({
            mask,
            title
        })
    },
    toast(title, icon = 'none', mask = false, duration = 1500) {
        uni.showToast({
            icon,
            title,
            mask,
            duration
        })
    },
    clone(obj) {
        if (obj === null) return null
        if (typeof obj !== 'object') return obj
        if (obj.constructor === Date) return new Date(obj)
        if (obj.constructor === RegExp) return new RegExp(obj)
        var newObj = new obj.constructor()
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                var val = obj[key]
                newObj[key] = typeof val === 'object' ? this.clone(val) : val
            }
        }
        return newObj
    },
    delayBack(obj) {
        if (typeof obj === 'string') {
            obj = {
                content: obj
            }
        }
        const defaultParams = {
            title: '提交成功',
            confirmText: '立即返回',
            ...obj
        }
        const back = setTimeout(() => {
            uni.navigateBack({
                delta: 1
            })
        }, 3000)
        uni.showModal({
            title: defaultParams.title,
            content: defaultParams.content,
            confirmText: defaultParams.confirmTexts,
            showCancel: false,
            success() {
                clearTimeout(back)
                uni.navigateBack({
                    delta: 1
                })
            }
        })
    },
    formatTime(timestamp, type = 'day') {
        let time
        if (typeof timestamp === 'string') {
            time = new Date(timestamp.replace(/-/g, '/'))
        } else {
            time = new Date(timestamp)
        }
        const add0 = num => {
            return num < 10 ? '0' + num : num
        }
        const y = time.getFullYear()
        const m = time.getMonth() + 1
        const d = time.getDate()
        const h = time.getHours()
        const mm = time.getMinutes()
        const ss = time.getSeconds()
        if (type === 'month') {
            return y + '-' + add0(m)
        } else if (type === 'day') {
            return y + '-' + add0(m) + '-' + add0(d)
        } else if (type === 'min') {
            return y + '-' + add0(m) + '-' + add0(d) + ' ' + add0(h) + ':' + add0(mm)
        } else if (type === 'sec') {
            return y + '-' + add0(m) + '-' + add0(d) + ' ' + add0(h) + ':' + add0(mm) + ':' + add0(ss)
        } else if (type === 'year') {
            return y
        }
    }
}
export default api
