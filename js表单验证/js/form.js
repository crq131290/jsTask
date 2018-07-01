// ^:开始
// $:结束
// *:有或没有
//+:一次或多次
function isZm(obj) {
    var reg = /^\d*$/;//不加*代表只匹配一个字符
    console.log(obj);
    console.log(reg.test(obj))
};
function isNum(obj) {
   var reg = /^[a-zA-Z]*$/;
   console.log(obj);
   console.log(reg.test(obj));
};
function isChinese(obj) {
    var reg = /^[\u0391-\uFFE5]*$/;
    console.log(obj);
    console.log(reg.test(obj));
};
function isNumZm(obj) {
    var reg = /^[0-9a-zA-Z]*$/
    console.log(obj);
    console.log(reg.test(obj));
};
function isShield(obj) {
    if(obj.indexOf('我')==0) {
        console.log("我是***")
    }
};
//判断日期类型是否为YYYY-MM-DD格式的类型    
function IsDate(obj){
    if(obj) {
        // \2重复第二个括号中的内容
        var reg = /^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/;
        if(reg.test(obj)==false) {
            console.log('请输入正确的日期格式')
        };
    } ;    
};
function isTime(obj){
    if(obj) {
        var reg = /^(20|21|22|23|[0-1]\d)(\:)([0-5]\d)\2\3$/;
        if(reg.test(obj)==false) {
            console.log('请输入正确的时间格式')
        }
    }
};
function isEmail(obj) {
// 邮箱格式
    if(obj) {
        var reg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
        if(reg.test(obj)==false) {
            console.log('请输入正确的邮箱格式')
        }
    }
};
function isInteger(obj) {
    if(obj) {
        var reg = /^[-+]?\d*$/
        if(reg.test(obj)==false) {
            console.log('请输入整数')
        }
    }
}
function isNums(obj) {
    if(obj) {
        var reg = /^[-+]?\d+\.\d$/
        if(reg.test(obj)==false) {
            console.log('请输入数字')
        }
    }
}
var str="1 4 7 plus 2 equal 3"
console.log(str.match(/\d+/g))
console.log(str.match(/\d+/))


