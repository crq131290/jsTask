// 主模块main.js主要是加载requireJs的配置项，所以需要先了解一下这些配置项的意思：
// （1）baseUrl：模块默认加载路径；

// （2）paths：自定义模块加载路径；

// （3）shim：定义模块之间的依赖关系
// require.config({
//     'baseUrl' : './app/',//配置模块初始加载的位置,即现在是在app文件夹内部
//     'paths':{
//         'jquery':'../node_modules/jquery/dist/jquery'//从app文件夹内部出发找到jquery
//     }
// })
// //调用采用require方法
// require(['jquery'],function(a){
//     //匿名函数和[]中相对应,这里面的jquery和function中的a相对应
//     console.log(a);
// })
// //require方法的第一个参数是数组，指明需要加载的模块，第二个参数是一个匿名回调函数，里边是具体要执行的代码。
// // 回调函数中的参数a是jquery.js模块返回的对象（名字可以自定义，也可以是b，c，d等等），其实就是一个$，这个可以从打印结果中看出来。
// require(['jquery'],function(a){
//     $('#test1').css({'background-color':'orange','height':'50px'})
// })
require.config({
    'baseUrl' : './app/',
    'paths' :{
        'jquery':'../node_modules/jquery/dist/jquery',
        'bootstrap' :  '../node_modules/bootstrap/dist/js/bootstrap',
        'test'  : '../js/test',
        'angular' : '../node_modules/angular/angular'
    },
    'shim' : {
        'bootstrap' : {
            'deps':['jquery']
        },
        'test'  : {
            'deps':['jquery','bootstrap']
        },
        'util' : {
            // 'init':function(){
            //     return {
            //         'changeBgColor':changeBgColor,
            //         'changeTextSize':changeTextSize
            //     }
            // }
            
            exports : 'changeColor'


        }
    }
})
// 上面的shim中是json数据，例如bootstrap依赖于jquery，test依赖于jqueyr和bootstrap，
// 所以它们的加载顺序是jqueyr、bootstrap、test，浏览器中的加载顺序截图如下
//只加载bootstrap.js时,test不加载;加载test时三者都加载
// 这是依赖的过程

// require(['bootstrap'],function(c){
//     // console.log(c)  
// })
// require(['test'],function(b){
//     // console.log(b)
// })

// require(['util'],function(a){
// // console.log(a);
// // a.changeBgColor();
// a.changeTextSize()
// // a()
// // console.log(a)
// })
// URL路径对应的地方直接加载
// 同样的，define方法的第一个参数也是一个数组，是return的
// json数据中需要用到的模块，这些模块也是从main.js中进行加载，
// 所以在使用define自定义模块之前需要先配置好main模块。
require(['util','jquery'],function(){
    console.log(changeColor)
    changeColor()
})
require(['angular'],function(){
    console.log(angular)
})
// 原理就是将单个的函数方法添加到init中组成json对象，然后把这个对象传递给参数a，由a统一进行调用。
// require.config({
//     'baseUrl' : './app/',
//     'paths' :{
//         'jquery':'../node_modules/jquery/dist/jquery',
//         'css' :  '../node_modules/bootstrap/dist/js/bootstrap',//bootstrap.css.js
//         'test'  : '../js/test'
//     },
// })

// 最后总结下RequireJs的原理：

// （1）我们在使用requireJS时，都会把所有的js交给requireJS来管理，也就是我们的页面上只引入一个require.js，把data-main指向我们的main.js。

// （2）通过我们在main.js里面定义的require方法或者define方法，requireJS会把这些依赖和回调方法都用一个数据结构保存起来。

// （3）当页面加载时，requireJS会根据这些依赖预先把需要的js通过document.createElement的方法引入到dom中，这样，被引入dom中的script便会运行。

// （4）由于我们依赖的js也是要按照requireJS的规范来写的，所以他们也会有define或者require方法，同样类似第二步这样循环向上查找依赖，同样会把他们村起来。

// （5）当我们的js里需要用到依赖所返回的结果时(通常是一个key value类型的object),requireJS便会把之前那个保存回调方法的数据结构里面的方法拿出来并且运行，然后把结果给需要依赖的方法。