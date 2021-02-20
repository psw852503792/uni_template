
export default {
    base_url: process.env.NODE_ENV === 'development'
        ? 'http://192.168.2.241/'
        : 'https://notecontest.hzxueersi.com',
    app_id: 'wxc5260a5797fcc8c3',	
    insight_url: `https://wxapi.speiyou.com/usercenter/common/wxoauth?app_id=${this.app_id}&callback_url=`
}