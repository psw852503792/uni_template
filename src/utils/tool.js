import api from './common.js'
export default {
    imgToBase64(files) {
	    return new Promise((resolve) => {
	        const fileList = []
	        for (const file of files) {
			    const reader = new FileReader()
			    reader.readAsDataURL(file)
			    reader.onload = function(e) {
			        fileList.push(e.target.result)
	                if (fileList.length === files.length) {
	                    resolve(fileList)
	                }
			    }
	        }
	    })
    },
    ruleFormat(rule) {
	    const ruleArr = []
	    for (const key in rule) {
		    ruleArr.push({
		        key,
		        validObj: rule[key]
		    }) 
	    }
	    return ruleArr
    },
    ruleChecked(rule, $) {
	    return new Promise((resolve) => {
	        const ruleArr = this.ruleFormat(rule)
	        let error = ''
	        if (ruleArr.some(item => {
			    if (item.validObj.isRequired) {
			        if (item.validObj.regexp) {
			            if (!item.validObj.regexp.test($[item.key])) {
			                error = item.validObj.message
			                return true
			            } 
			        } else {
			            if (!$[item.key]) {
			                error = item.validObj.message
			                return true
			            }
			        } 
			    }else {
					if ($[item.key] && item.validObj.regexp) {
					    if (!item.validObj.regexp.test($[item.key])) {
					        error = item.validObj.message
					        return true
					    } 
					}
				}
	        })) {
			    api.toast(error)
			    resolve(false)
	        } else {
			    resolve(true)
	        }
	    })
    }
}