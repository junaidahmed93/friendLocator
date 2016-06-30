angular.module('starter')
    .controller('historyController', function ($scope, $state) {
        console.log('history');
        $scope.done = function () {
            $state.go('app.map', { auth: "abc" });
        }
    })