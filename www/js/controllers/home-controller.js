angular.module('starter')
    .controller('homeController', function ($cordovaGeolocation, $scope, $state, $ionicPlatform, $ionicLoading, $window, $stateParams) {

        //$ionicPlatform.ready(function () {

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
            var bufferOptions = {
                strokeColor: "#FF0000",
                strokeOpacity: 0.1,
                strokeWeight: 2,
                fillColor: "#FF0000",
                fillOpacity: 0.35,
                map: map,
                center: myLatlng,
                radius: 10
            };
            var cityCircle = new google.maps.Circle(bufferOptions);
            map.setOptions({ styles: styles });
            var marker = new google.maps.Marker({
                position: myLatlng,
                map: map,
                title: "Home"
            });


            $scope.map = map;
            $ionicLoading.hide();
            console.log(cityCircle);
        }, function (err) {
            $ionicLoading.hide();
            console.log(err);
        });
        // });
        $scope.$on("$ionicView.enter", function (scopes, states) {
            google.maps.event.trigger(map, 'resize');
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

        console.log($stateParams);
    })