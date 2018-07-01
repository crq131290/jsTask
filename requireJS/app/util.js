// define(["jquery"], function() {
//       return {
//           'changeBgColor' : function(){
//               $('#test1').css({'background-color':'#f00','height':'100px'})
//           },
//         //   'changeTextSize' : function() {
//         //       $('#test1').css({'font-size':'30px'})
//         //   }
//       }
//       // return function() {
//       //     console.log(11111)
//       // }
//       // return 111
//       // return中可以返回对象,值,函数等
      
//   })
  // 因为define方法的第一个参数中引用的模块，是return出的json中包含的方
  // 法都共用的，如果有些方法不需要jquery这个模块，就可以单独进行调用，
  // jquery模块也不需要写在公共的数组当中，代码如下
  // changeBgColor()就调用不了,因为没依赖jquery
  // changeTextSize()能够调用
  // define([],function(){
  //     return {
  //         'changeBgColor' : function(){
  //             $('#test1').css({'background-color':'#f00','height':'100px'})
  //         },
  //         'changeTextSize' : function() {
  //             require(['jquery'],function(){
  //                     $('#test1').css({'font-size':'30px'});
  //                 }
  //             );
  //         }

  //     }    
// });
// define(['exports'], function(exports) {
//     exports.test = function() {
//         console.log('test')
//     }
    
// });
define(['jquery'], function() {
    return  changeColor =   function(){
              $('#test1').css({'background-color':'#f00','height':'100px'})
        }
})
// changeColor =   function (){
//     $('#test1').css({'background-color':'#f00','height':'100px'})
// } 