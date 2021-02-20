const name = { 
    isRequired: true,  
    message: '学生姓名不能为空'
}
const phone = { 
    isRequired: true, 
    regexp: /^1(\d{10})$/,  
    message: '手机号格式有误'
}
const code = { 
    isRequired: true,  
    message: '验证码不能为空'
}
const gradeInd = {
    isRequired: true, 
    regexp: /^[0-9]*[0-9]*$/,  
    message: '在读年级不能为空'
}
export default {
    name,
    phone,
    code,
    gradeInd
}