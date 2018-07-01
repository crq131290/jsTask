//入口文件依赖angular
define(["angular"], function() {
  var app = angular.module("myApp", ["ui.router","angularFileUpload"]);
  app.config(function(
    $controllerProvider,
    $compileProvider,
    $filterProvider,
    $provide
  ) {
    //   错误的写法
    // app.register = {
    //   //得到$controllerProvider的引用
    //   controller: $controllerProvider.register,
    //   //同样的，这里也可以保存directive／filter／service的引用
    //   directive: $compileProvider.directive,
    //   filter: $compileProvider.register,
    //   service: $provide.service,
    // //   constant:$provide.constant
    // };
//动态注册控制器 指令 过滤器 服务等  
    app.register = {
      //得到$controllerProvider的引用
      controller: $controllerProvider.register, //controller注册
      //同样的，这里也可以保存directive／filter／service的引用
      directive: $compileProvider.directive, //自定义指令注册
      filter: $filterProvider.register, //过滤器注册
    //   service: $provide.service, //服务注册
      constant: $provide.constant //cantant注册
    };
  });
  app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("login"); //如果没有指定路由,会默认访问module1
    $stateProvider
      .state("login", {
        url: "/login",
        templateUrl: "html/login.html",
        controller: "loginCtrl",
        resolve: {
          loadCtrl: [
            "$q",
            function($q) {
              var deferred = $q.defer();
              //异步加载controller／directive/filter/service
              require(["./myjs/login"], function() {
                deferred.resolve();
              });
              return deferred.promise;
            }
          ]
        }
      })
      .state("home", {
        url: "/home",
        templateUrl: "html/home.html",
        // controller: "homeCtrl",//此处写的话会产生homeCtrl执行两次
        resolve: {
          loadCtrl: [
            "$q",
            function($q) {
              var deferred = $q.defer();
              //异步加载controller／directive/filter/service
              require(["./myjs/home"], function() {
                deferred.resolve();
              });
              return deferred.promise;
            }
          ]
        }
      })
      .state("home.welcoom", {
        url: "/welcoom",
        templateUrl: "html/welcome.html",
        // controller:''
        resolve: {
          loadCtrl: [
            "$q",
            function($q) {
              var deferred = $q.defer();
              //异步加载controller／directive/filter/service
              require(["./myjs/welcoom"], function() {
                deferred.resolve();
              });
              return deferred.promise;
            }
          ]
        }
      })
      .state("home.listpages", {
        url: "/listpages?type&status&pageid&startAt&endAt&total",
        templateUrl: "html/listpages.html",
        controller: "listpages", //此时不写会不执行controller
        resolve: {
          loadCtrl: [
            "$q",
            function($q) {
              var deferred = $q.defer();
              //异步加载controller／directive/filter/service
              require(["./myjs/listpages"], function() {
                deferred.resolve();
              });
              return deferred.promise;
            }
          ]
        }
      })
      .state("home.newListpage", {
        url: "/newListpage?id",
        templateUrl: "html/newListpage.html",
        controller: "newListpage", //此时不写会不执行controller  推测可能是子页面的问题
        resolve: {
            loadCtrl: [
              "$q",
              function($q) {
                var deferred = $q.defer();
                //异步加载controller／directive/filter/service
                require(["./myjs/newListpage"], function() {
                  deferred.resolve();
                });
                return deferred.promise;
              }
            ]
          }
      });
  });
  return app;
});

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
