<script>
	export default {
		onLaunch: function() {
			let userInfo = uni.getStorageSync('userInfo') || ''
			if(userInfo){
				//更新登陆状态
				this.$store.commit('login',userInfo)
			}
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	view,
	scroll-view,
	swiper,
	swiper-item,
	cover-view,
	cover-image,
	icon,
	text,
	rich-text,
	progress,
	button,
	checkbox,
	form,
	input,
	label,
	radio,
	slider,
	switch,
	textarea,
	navigator,
	audio,
	camera,
	image,
	video{
		box-sizing: border-box;
	}
	.g-container{
		background-color: #EFF2F5;
	}
	::-webkit-scrollbar{
		width: 0;
		height: 0;
		color: transparent;
	}
	.g-elli{
		width:300upx;	
		display: block;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
	}
	.g-more-elli{
		display:-webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
	}
</style>
