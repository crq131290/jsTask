var bookStoreApp = angular.module('bookStoreApp', [])
bookStoreApp.controller('ctrl',function($scope) {
    var module = [
        {   id:1,
            name:"业务管理",
            sub:[
                {   
                    id:1,
                    name:"文章管理",

                },
                {
                    id:2,
                    name:"视频管理",

                },
                {
                    id:3,
                    name:"论坛管理",

                },
                {
                    id:4,
                    name:"树洞管理",

                },
            ]
        },
        {   id:2,
            name:"内容管理",
            sub:[
                {
                    id:5,
                    name:"用户管理"
                },
                {
                    id:6,
                    name:"公告管理"
                },
                {
                    id:7,
                    name:"banner图管理"
                }
            ]
        },
    ]
    console.log(module)

    var fmodule1 = []
    var fmodule2 = []

    for(let i of module) {
        switch(i.id) {
            case 1 :
            fmodule1.push(i);
            break;
            case 2 :
            fmodule2.push(i);
            break;
        }
     
      
    }
    console.log(fmodule1)
    console.log(fmodule2)
    $scope.hehe = 1
})
