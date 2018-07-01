// 定义模块
var myApp = angular.module("myApp", ["ui.router", 'oc.lazyLoad',"angularFileUpload"]);
// 创建路由
myApp.config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider,$ocLazyLoadProvider){
  $urlRouterProvider.otherwise('/login');
  $stateProvider
  .state("login",{
    url:"/login",
    templateUrl: "html/login.html",
    controller: "loginCtrl"
  })
  .state("home",{
    url: "/login",
    templateUrl: "html/home.html",
    controller: "homeCtrl",
    
    resolve:{
      loadMyService: function($ocLazyLoad){
        return $ocLazyLoad.load('myjs/home.js');
      }
    }
  })
    
  .state("home.welcoom",{
    url:"/welcoom",
    templateUrl:"html/welcome.html"
  })
  .state("home.listpages",{
    url:"/listpages?type&status&pageid&startAt&endAt&total",
    templateUrl:"html/listpages.html",
    controller: "articleList",//controller一定要写不然报错
    resolve:{
      loadMyService:function($ocLazyLoad) {
        return $ocLazyLoad.load('myjs/listpages.js')
      }
    }   
  })  
  .state("home.newListpage", {
    url: "/newListpage?id",
    templateUrl: "html/newListpage.html",
    controller: "newListpage",
    resolve:{
      loadMyService:function($ocLazyLoad) {
        return $ocLazyLoad.load('myjs/newListpage.js')
      }
    }
  })
}]);


// myApp.config(function($stateProvider, $urlRouterProvider) {
//   // 路由的重定向
//   $urlRouterProvider.when("", "/login");
//   // 匹配补不到路由时跳转到此页面
//   // urlRouterProvider.otherwise('/login');
//   $stateProvider
//     // 整个登录页面
//     .state("login", {
//       url: "/login",
//       templateUrl: "html/login.html",
//       controller: "loginCtrl"
//     })
//     .state("home", {
//       url: "/home",
//       templateUrl: "html/home.html",
//       controller: "homeCtrl"
//     })
//     .state("home.welcoom", {
//       url: "/welcoom",
//       templateUrl: "html/welcome.html"
//       // controller:''
//     })
//     .state("home.listpages", {
//       url: "/listpages?type&status&pageid&startAt&endAt&total",
//       templateUrl: "html/listpages.html",
//       controller: "articleList"
//     })
//     // 新增页面
//     .state("home.newListpage", {
//       url: "/newListpage?id",
//       templateUrl: "html/newListpage.html",
//       controller: "newListpage"
//     })
// });
//懒加载另外两种写法
// 所谓的懒加载其实就是加载文件而已,在script标签中是一次性加载完毕,而懒加载是按需加载
// resolve : {  
//   loadMyCtrl : ['$ocLazyLoad',function ($ocLazyLoad) {  
//       return $ocLazyLoad.load({  
//           name: 'myApp',//模块的名字，单个模块可以省略  
//           files: ['myjs/listpages.js']//js文件地址  
//       })  
//   }]  
// } 
// resolve : {  
// loadMyCtrl : function ($ocLazyLoad) {  
//     return $ocLazyLoad.load({  
//         name: 'myApp',  
//         files: ["myjs/listpages.js"] ,
//         cache: true //指定是否启用缓存 

//     })  
// } 