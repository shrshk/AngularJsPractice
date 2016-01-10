var SubmitApp = angular.module('SubmitApp',[]);

SubmitApp.controller('submitAppCtrl',function($scope){
    $scope.text="timebeing";
    $scope.list = [];
    $scope.submit = function() {
        if ($scope.text) {
            $scope.list.push(this.text);
            $scope.text='';

        }
    }
});