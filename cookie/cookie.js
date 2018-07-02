// function setCookie(c_name, value, expiredays) {
//    var exdate = new Date();
//   //生成时间
//    console.log(exdate);
//    Number(exdate); //时间戳

//    exdate.setTime(Number(exdate) + expiredays);
//    console.log(exdate);
//      //cookie的格式: aaa=bbb;ccc=ddd;
//      //toGMTString() 方法可根据格林威治时间 (GMT) 把 Date 对象转换为字符串，并返回结果。
//      //("July 21, 1983 01:15:00")===> Wed, 20 Jul 1983 17:15:00 GMT
//    document.cookie = c_name +"=" +escape(value) +(expiredays == null ? "" : ";expires=" + exdate.toGMTString());
//     // cookie生成
//    console.log(document.cookie);
//    // console.log(decodeURI(document.cookie.substring(128, 137)))
// }
// function getCookie(c_name) {
//   console.log("start");
//     //判断是否存在cookie,length=0则不存在
//   console.log(document.cookie.length);
//   if (document.cookie.length > 0) {
//         console.log("11");
//         // indexOf(a,b)a是检测的字符串,b是从哪开始检测
//         //就是检测aaa==bbb;/aaa==bbb就检查这么个键值
//         c_start = document.cookie.indexOf(c_name + "=") ; //从获取到cookie的值开始值
//         console.info(c_start);
//         if (c_start != -1) {
//             c_end = document.cookie.indexOf(";", c_start); //从c_start开始查找";"的存在
//         console.log(c_end);
//             if (c_end == -1) {
//                 //如果没找到，说明是最后一项
//                 c_end = document.cookie.length;
//                 return unescape(document.cookie.substring(c_start, c_end));//获取cookie
//                 //decodeURIComponent//decodeURI可以直接解析
//                 //把cookie的值拆分出来并且对这个值进行解码，unescape()与escape()相对，对被escape()编码的字符串进行解码
//             }
//         }
//     }
// }
// setCookie("zhangshan","name",20*1000);
// setCookie("list", "name");
// // getCookie("zhangshan")
// var x = getCookie("list");
// console.log(x);
// var b = getCookie("zhangshan")
// console.log(b);
// getCookie("list")

function setCookie(c_name,c_value,expiredays) {
    var  exdate = new Date();
    //生成时间
    console.log(exdate);
    exdate.setTime(Number(exdate)+expiredays);
    console.log(exdate);
    //cookie的格式: xxx=aaa;
    //toGMTString() 方法可根据格林威治时间 (GMT) 把 Date 对象转换为字符串，并返回结果。
    //("July 21, 1983 01:15:00")===> Wed, 20 Jul 1983 17:15:00 GMT
    document.cookie = c_name+ "=" + escape(c_value) +((expiredays==null)?"":";expires=" + exdate.toGMTString())
    // cookie生成
    console.log(document.cookie)
}
function getCookie(c_name) {
    //判断是否存在cookie
    if(document.cookie.length>0) {
        var  arrStr = document.cookie.split("; ")//splite
        for(var i = 0;i<arrStr.length;i++) {
            var arr = arrStr[i].split("=");
            if(arr[0]==c_name) {
                return arr[1]
            }
        }
        return "";
    }
}
setCookie("zhangshan","name",20*1000);
setCookie("list","name");
var x = getCookie("list");
console.log(x);
var b = getCookie("zhangshan")
console.log(b);
