angular.module('myApp')
// angular.module('myApp')
.directive('siderbar',function(){
        return {
            restrict:"AE",
            replace:true,
            transclude:true,
            templateUrl:"./html/siderbar.html",
            controller:function($scope, sider) {
                $scope.sider = sider;
                console.log($scope);
                console.log(sider);
                $scope.focus= 0;
                $scope.click = function (i) {
                    $scope.focus = i
                }
            }
            
        }
    });