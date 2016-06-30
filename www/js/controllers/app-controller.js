// var ref = new Firebase("https://friendlocatorapp.firebaseio.com/");

angular.module('starter.controllers', [])

  .controller('AppCtrl', function ($scope, $ionicModal, $timeout,$ionicPopup,$state) {

    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    // Form data for the login modal


    $scope.profileImage = localStorage.getItem('profile_image');
    $scope.userName = localStorage.getItem('user_name');
    console.log($scope.profileImage);

    // Create the login modal that we will use later

    $scope.fun = function () {
      return true;
    }

    
      $scope.openLogout = function () {
        var confirmPopup = $ionicPopup.confirm({
          title: 'Log Out',
          template: 'Are you sure you want to Logout?'
        });

        confirmPopup.then(function (res) {
          if (res) {
            $state.go('login');
            localStorage.clear();
          } else {
            console.log('You are not sure');
          }
        });
      };
    

    // Perform the login action when the user submits the login form

  })













