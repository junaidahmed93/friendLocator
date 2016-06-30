angular.module('starter')
    .controller('logOutController', function () {
        $ionicModal.fromTemplateUrl('templates/logout-modal.html', {
            scope: $scope
        }).then(function (modal) {
            $scope.modal = modal;
        });

        // Triggered in the login modal to close it
        $scope.closeLogout = function () {
            $scope.modal.hide();
        };

        // Open the login modal
        $scope.openLogout = function () {
            $scope.modal.show();
        };
    })