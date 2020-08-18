<template>
    <view class="">
        <mpvue-city-picker 
            :theme-color="themeColor" 
            ref="mpvueCityPicker" 
            :picker-value-default="cityPickerValueDefault"
            @onCancel="onCancel" 
            @onConfirm="onConfirm"></mpvue-city-picker>
    </view>
	
</template>

<script>
import mpvueCityPicker from './mpvueCityPicker.vue'
export default {
    components: {
        mpvueCityPicker
    },
    data() {
        return {
            themeColor: '#007AFF',
            cityPickerValueDefault: [0, 0, 1]
        }
    },
    methods: {
        onCancel(e) {
            console.log(e)
        },
        onConfirm(e) {
            var temp = e
            var i = temp.label.split('-')
            temp.label  = i[0] + ' ' + i[1] + ' ' + i[2]
            this.$emit('watchChild', temp.label)
        },
        showMulLinkageThreePicker() {
            this.$refs.mpvueCityPicker.show()
        }
    }
}
</script>

<style>
</style>
