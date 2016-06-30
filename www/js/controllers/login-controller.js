angular.module('starter')
    .controller('loginCtrl', function ($scope, $state, $window, $ionicSideMenuDelegate, LoginService) {
        // $ionicSideMenuDelegate.canDragContent(true);
        console.log('loginCtrl');
        $scope.loginWithFacebook = function () {

            LoginService.loginFunction().then(function (a) {
                console.log("a", a);
                $state.go('app.home', { auth: a });
            })
            // LoginService.loginServiceFunction().then(function () {
            //   console.log(a);
            //   $state.go('app.home', { auth: a });
            // })

        }
    })