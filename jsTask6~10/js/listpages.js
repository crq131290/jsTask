angular.module("myApp")
.controller('articleList',function($scope,$http,$state,$stateParams){
    
    // 请求数据
    $http({
        method:'GET',
        url: '/carrots-admin-ajax/a/article/search',
        headers:{'Content-Type':'application/x-www-form-urlencoded',
        params:{'size':20}
    }
    }).then(function successCallback(response) {
        console.log("请求成功")
        console.log(response);
        console.log(response.data);
        console.log(response.data.data);
        $scope.userData = response.data.data.articleList
        // 获取到articleList这个数组对象,并将其挂载在$scope上
        console.log($scope.userData);
        console.log(response.data.data.size);
        console.log(response.data.data.total);
        
    },function errorCallback(response){
        console.log("请求失败");
    });
    $scope.click= function(){
        $state.go("home.listpages",{'pageid':2})
    }
});