<template>
	<view class="f-container">
		<view class="f-content">
			<view class="f-content-main">
				<slot></slot>	
			</view>
			<view v-if="$slots.bottom">
				<slot name="bottom"></slot>	
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'FlexLayout',
		data(){
			return{}
		}
	}
</script>

<style lang="scss">
	.f-container{
		display: flex;
		min-height: 100vh;
		background-color: #f9f9f9;
		flex-direction: column;
		.f-content{
			display: flex;
			flex-direction: column;
			flex: 1;
			position: relative;
			&-main{
				flex: 1;
			}
		}
	}
</style>
