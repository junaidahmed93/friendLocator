// var ref = new Firebase("https://friendlocatorapp.firebaseio.com/");

angular.module('starter.controllers', [])

  .controller('AppCtrl', function ($scope, $ionicModal, $timeout) {

    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    // Form data for the login modal
    $scope.loginData = {};

    // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('templates/login.html', {
      scope: $scope
    }).then(function (modal) {
      $scope.modal = modal;
    });

    // Triggered in the login modal to close it
    $scope.closeLogin = function () {
      $scope.modal.hide();
    };

    // Open the login modal
    $scope.login = function () {
      $scope.modal.show();
    };
    $scope.fun = function () {
      return true;
    }


    // Perform the login action when the user submits the login form
    $scope.doLogin = function () {
      console.log('Doing login', $scope.loginData);

      // Simulate a login delay. Remove this and replace with your login
      // code if using a login system
      $timeout(function () {
        $scope.closeLogin();
      }, 1000);
    };
  })

  
  .controller('loginCtrl', function ($scope, $state, $window, $ionicSideMenuDelegate, LoginService) {
    // $ionicSideMenuDelegate.canDragContent(true);
    console.log('loginCtrl');
    $scope.loginWithFacebook = function () {
      LoginService.loginServiceFunction();
    }
  })

  .controller('profileController', function () {
    console.log('profile');
  })
  

  .controller('historyController', function ($scope) {
    console.log('history');
  })

  .controller('mapController',function($scope){
    console.log('map')
  })

  .controller('messagesController',function($scope){
    console.log('messages')
  })
  
  .controller('homeController', function ($cordovaGeolocation, $scope, $state, $ionicPlatform, $ionicLoading, $window, $stateParams) {

    $ionicPlatform.ready(function () {

      $ionicLoading.show({
        template: '<ion-spinner icon="bubbles"></ion-spinner><br/>Acquiring location!'
      });

      var posOptions = {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 0
      };
      $cordovaGeolocation.getCurrentPosition(posOptions).then(function (position) {
        var lat = position.coords.latitude;
        var long = position.coords.longitude;
        console.log(lat, long)

        var myLatlng = new google.maps.LatLng(lat, long);

        var mapOptions = {
          center: myLatlng,
          zoom: 18,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          mapTypeControl: false
        };

        var styles = [
          {
            stylers: [
              { hue: "#b5730d" },
              { saturation: -20 }
            ]
          }, {
            featureType: "road",
            elementType: "geometry",
            stylers: [
              { lightness: 100 },
              { visibility: "simplified" }
            ]
          }, {
            featureType: "road",
            elementType: "labels",
            stylers: [
              { visibility: "off" }
            ]
          }
        ];



        var map = new google.maps.Map(document.getElementById("map"), mapOptions);
        map.setOptions({ styles: styles });

        $scope.map = map;
        $ionicLoading.hide();

      }, function (err) {
        $ionicLoading.hide();
        console.log(err);
      });
    });

    $scope.Satellite = function () {
      $ionicLoading.show({
        template: '<ion-spinner icon="bubbles"></ion-spinner><br/>Acquiring location!'
      });

      var posOptions = {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 0
      };
      $cordovaGeolocation.getCurrentPosition(posOptions).then(function (position) {
        var lat = position.coords.latitude;
        var long = position.coords.longitude;
        console.log(lat, long)

        var myLatlng = new google.maps.LatLng(lat, long);

        var mapOptions = {
          center: myLatlng,
          zoom: 18,
          mapTypeId: google.maps.MapTypeId.SATELLITE,
          mapTypeControl: false
        };

        var map = new google.maps.Map(document.getElementById("map"), mapOptions);

        $scope.map = map;
        $ionicLoading.hide();

      }, function (err) {
        $ionicLoading.hide();
        console.log(err);
      });
    }

    $scope.hybrid = function () {
      $ionicLoading.show({
        template: '<ion-spinner icon="bubbles"></ion-spinner><br/>Acquiring location!'
      });

      var posOptions = {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 0
      };
      $cordovaGeolocation.getCurrentPosition(posOptions).then(function (position) {
        var lat = position.coords.latitude;
        var long = position.coords.longitude;
        console.log(lat, long)

        var myLatlng = new google.maps.LatLng(lat, long);

        var mapOptions = {
          center: myLatlng,
          zoom: 18,
          mapTypeId: google.maps.MapTypeId.HYBRID,
          mapTypeControl: false
        };

        var map = new google.maps.Map(document.getElementById("map"), mapOptions);

        $scope.map = map;
        $ionicLoading.hide();

      }, function (err) {
        $ionicLoading.hide();
        console.log(err);
      });
    }
    $scope.mapFunc = function () {
      $window.location.reload(true);
    }

    console.log($stateParams.authData);
  })

  .controller('newController', function () {
    console.log('new');
  });
  