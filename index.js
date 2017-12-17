var app=angular.module("sampleApp",[]);
app.controller("sampleCtrl",function($scope,$http){
    $scope.name="";
    //$scope.users=[{name:"Reethu"},{name:"Bindu"},{name:"Hriday"}];
    $http.get("https://jsonplaceholder.typicode.com/users")
    .then(function(res){
        console.log(res)
        $scope.users=res.data;
        $scope.selectedUserIndex=0;   
        $scope.selectedUser=$scope.users[$scope.selectedUserIndex];   
    });
    $scope.selectUser=function(index){
        $scope.selectedUserIndex=index;   
        $scope.selectedUser=$scope.users[index];
    }
})