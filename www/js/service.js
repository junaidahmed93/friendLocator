
var app = angular.module('starter');
app.service('LoginService', function ($state,$window) {
    var vm = this;
    vm.loginServiceFunction = function () {

        console.log('hi')
        var ref = new Firebase('https://friendlocatorapp.firebaseio.com');
        ref.authWithOAuthPopup("facebook", function (error, authData) {
            if (error) {
                console.log("Login Failed!", error);
            } else {
                console.log("Authenticated successfully with payload:", authData);

                $state.transitionTo('app.home' , {authData:authData}, null, { 'reload': true }).then(function () {

                    $window.location.reload(true);
                });

            }
        });
    }
})