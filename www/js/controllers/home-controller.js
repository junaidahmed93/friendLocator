angular.module('starter')
    .controller('homeController', function ($cordovaGeolocation, $scope, $state, $ionicPlatform, $ionicLoading, $window, $stateParams) {

        //$ionicPlatform.ready(function () {
        var locations = [
            ['Bondi Beach', -33.890542, 151.274856, 4],
            ['Coogee Beach', -33.923036, 151.259052, 5],
            ['Cronulla Beach', -34.028249, 151.157507, 3],
            ['Manly Beach', -33.80010128657071, 151.28747820854187, 2],
            ['Maroubra Beach', -33.950198, 151.259302, 1]
        ];
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


            // var myLatlng = new google.maps.LatLng(lat, long);


            var mapOptions = {
                // center: myLatlng,
                zoom: 18,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                mapTypeControl: false
            };

            var styles = [
                {
                    stylers: [
                        { hue: "#a5b60c" },
                        { saturation: -20 }
                    ]
                }, {
                    featureType: "road",
                    elementType: "geometry",
                    stylers: [
                        { lightness: 50 },
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



            var map = new google.maps.Map(document.getElementById("map"), {
                zoom: 10,
                center: new google.maps.LatLng(-33.92, 151.25),
                mapTypeId: google.maps.MapTypeId.ROADMAP
            });
            // var bufferOptions = {
            //     strokeColor: "#FF0000",
            //     strokeOpacity: 0.1,
            //     strokeWeight: 2,
            //     fillColor: "#FF0000",
            //     fillOpacity: 0.35,
            //     map: map,
            //     center: myLatlng,
            //     radius: 10
            // };
            // var cityCircle = new google.maps.Circle(bufferOptions);
            map.setOptions({ styles: styles });





            for (i = 0; i < locations.length; i++) {
                // var bufferOptions = {
                //     strokeColor: "#FF0000",
                //     strokeOpacity: 0.1,
                //     strokeWeight: 2,
                //     fillColor: "#FF0000",
                //     fillOpacity: 0.35,
                //     map: map,
                //     center: {lat : -33.890542, long : 151.274856},
                //     radius: 20
                // };
                var cityCircle = new google.maps.Circle({
                    strokeColor: "#FF0000",
                    strokeOpacity: 0.1,
                    strokeWeight: 2,
                    fillColor: "#FF0000",
                    fillOpacity: 0.35,
                    map: map,
                    center: new google.maps.LatLng(locations[i][1], locations[i][2]),
                    radius: 20
                });

                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(locations[i][1], locations[i][2]),
                    map: map
                });



            }


            // var marker = new google.maps.Marker({
            //     position: myLatlng,
            //     map: map,
            //     title: "Home"
            // });


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