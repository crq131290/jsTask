var config = {
    // baseUrl:'/',
    paths:{
        'angular':'./js/angular',
        'jquery':'./js/jquery',
        'uiRouter':'./js/angular-ui-router',
        'bootstrap':'./js/bootstrap',
        'upload':'./js/angular-file-upload',
        'wangEditor':'./js/wangEditor'
        // 自己的文件好像不需要写出来
        // 'app':'app',
        // 'login':'./myjs/login',
        // 'listpages':'./myjs/listpages',
        // // 'constant':'./myjs/constent',
        // 'directive':'./myjs/directive',
        // // 'filter':'./myjs/filter'
        // 'newListpage':'./myjs/newListpage',
    },
    shim:{
        'bootstrap':['jquery'],//bootstrap依赖jquery
        'angular':{
            exports:'angular' //
        },
        'uiRouter': {
            'deps': ['angular']   //依赖什么angular
        },
        'upload':{
            'deps':['angular']   // 依赖angular
        },
        //下面的好像不需要
        // 'newListpage':{
        //     'deps':['app','listpages','directive']
        // },
        // 'wangEditor':['jquery'],
        
        // 'listpages':{
        //     deps:['angular','bootstrap','uiRouter','app']
        // }
    }
}
require.config(config);
//项目所需的框架文件,以及入口文件app
// 加载完后执行myApp模块
require(['angular','uiRouter','upload','jquery','bootstrap','wangEditor','app'],function(){
    angular.bootstrap(document,['myApp']);//开启myApp模块
});