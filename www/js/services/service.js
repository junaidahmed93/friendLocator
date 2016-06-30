
angular.module('starter')
    .service('LoginService', function ($state, $window, $stateParams, $q) {

        loginServiceFunction = function () {
            var defer = $q.defer();
            console.log('Login-page')
            var ref = new Firebase('https://friendlocatorapp.firebaseio.com');
            ref.authWithOAuthPopup("facebook", function (error, authData) {
                if (error) {
                    console.log("Login Failed!", error);
                } else {
                    console.log("Authenticated successfully with payload:", authData);
                    console.log(authData.facebook.profileImageURL);
                    localStorage.setItem('profile_image', authData.facebook.profileImageURL);
                    localStorage.setItem('user_name', authData.facebook.displayName);
                    // $state.transitionTo('app.home' , {authData:authData}, null, { 'reload': true }).then(function () {                });
                    //$state.go('app.home' , {auth:'abc'});   
                    defer.resolve(authData);
                    return authData;
                }
            });
            return defer.promise;
        }
        return {
            loginFunction: loginServiceFunction
        }

    });