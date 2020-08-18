<template>
    <view class="mask" v-if="isShow" @click="isShow =false">
        <view class="calendar">
            <calendarmeha :date="date || '1990-01-01'" @getbir="getData"/>
        </view>
    </view>
</template>

<script>
import calendarmeha from './mehaotian-calendar.vue'
export default {
    props: {
        date: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            isShow: false
        }
    },
    components: {
        calendarmeha
    },
    methods: {
        show() {
            this.isShow = true
        },
        getData(data) {
            this.isShow = false
            this.$emit('currDate', data)
        }
    }
}
</script>

<style>
	.mask{
		position: fixed ;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: rgba(0,0,0,.5);
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 998;
	}
	.calendar{
		margin: 50upx;
		height: 50vh;
	}
	.calendar>view{
		height: 100%;
	}
</style>
