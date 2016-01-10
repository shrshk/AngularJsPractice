//ToDoApp
var app = angular.module('toDo',[]);
app.factory("validation",function(){
    var validate = {};
    validate.isElementInArray=function(val,arr){
        if(($.inArray(val,arr)==-1) && (val!='')){
            return true;
        }
        else{
            return false;
        }
    
    return validate;
    });
    app.controller('toDoCntrl',['scope','validation',function($scope,validation){
        $scope.comments=[];
        $scope.add=true;
        $scope.edit=true;
        $scope.inputBox='';//ng-model
        $scope.addButtonClick = function(){
            if(validate.isElementInArray($scope.inputBox,$scope.comments)){
               $scope.error_message='';
               $scope.comments.push($scope.inputBox);
            $scope.inputBox='';
        }
        else{
            $scope.error_message='not again plz';
        }
    };
        $scope.edit_theName=function($index){
            $scope.inputBox = $scope.comments[$index];
            $scope.add=false;
            $scope.edit=false;
            count=$index;
        };
        $scope.edit_comment = function($index){
           if(validate.isElementInArray($scope.inputBox,$scope.comments)){
               $scope.comments[count]=$scope.inputBox;
               $scope.inputBox ='';
               $scope.add=true;
               $scope.edit = true;
               $scope.error_message="true";
           }
            else{
                $scope.error_message="oh plz not again";
            }
        };
        $scope.removeItem = function($index){
            $scope.comments.splice($index,1);
        };
              

        
    }]);