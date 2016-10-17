
angular.module('starter')
    .service('LoginService', function ($state, $window, $stateParams, $q) {
        var ref = new Firebase('https://friendlocatorapp.firebaseio.com');
        loginServiceFunction = function () {
            var defer = $q.defer();
            console.log('Login-page')            
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

        saveData = function(user){
            var defer = $q.defer();
            console.log("a inside save data",user);
            ref.child("user").child(user.uid).update({
                uid : user.uid,
                name: user.facebook.displayName
            },onComplete)

            function onComplete(){
                defer.resolve("Save to database");
            }

           return defer.promise;
        }
        getData = function(){
            console.log("This is getData inside");
        }

        return {
            loginFunction: loginServiceFunction,
            getData : getData,
            saveData : saveData
        }

    });