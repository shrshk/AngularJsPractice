var app = angular.module('SimpleCommentBox',[]);
app.controller('FrmController',function($scope){

        $scope.comment=[];
        $scope.hide=true;
        $scope.btn_add=function(){
            if($scope.txtcomment!=null) {
                $scope.comment.push($scope.txtcomment);
                $scope.txtcomment = '';
            }
            if($scope.comment!=null){
                $scope.hide=false;
            }

    };




    $scope.remItem = function($index){
        $scope.comment.splice($index,1);
    };

});

