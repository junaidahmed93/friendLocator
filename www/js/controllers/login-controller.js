angular.module('starter')
    .controller('loginCtrl', function ($scope, $state, $window, $ionicSideMenuDelegate, LoginService) {
        // $ionicSideMenuDelegate.canDragContent(true);
        console.log('loginCtrl');
        $scope.loginWithFacebook = function () {

            LoginService.loginFunction().then(function (user) {
                console.log("user", user);
                $state.go('app.home', { auth: user });
                LoginService.saveData(user).then(function(success){
                    console.log(success);
                });
            });
            
        }
    });
