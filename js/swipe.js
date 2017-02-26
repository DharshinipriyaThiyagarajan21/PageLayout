var proj5 = angular.module("proj5", ['mentio']);
proj5.controller('pageLayoutController',function($scope){

  $scope.todoQueue=[
  {project: 'Add to wishlist',base: 'design'},
  {project: 'Dashboard real data',base: 'design'},
  {project: 'Performance graph in vendor view ',base: 'design'},
  {project: 'Gateway interface for email and sms',base: 'design'}];
 
});



//Directive for select2


proj5.directive('memberDirective',function(){
    return {
        restrict : 'A',
        link : function(scope){
            $(".memberSelect").select2({
                placeholder : '@email',
                tags : true
            });
        }
    };
});