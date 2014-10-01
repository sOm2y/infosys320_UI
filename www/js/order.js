var app=angular.module('order', ['ionic']);

app.controller('OrderCtrl', function($scope, $ionicSideMenuDelegate) {
 
  $scope.toggleLeft = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };
  
});
//
//app.controller('ListController',function(){
//    
//
//
//});
//
//app.controller('TabController',function(){
//    this.tabs=item;
//
//
//
//});
//
//var item={
//    name:"1"
//
//}

app.controller('BeverageCtrl', function($scope) {
  // don't be scared by the image value, its just datauri
  
  $scope.items = [
    { id: 1, album: 'Gotta Be Somebody', artist: 'Nickelback', image:'/img/beverage1.jpg'},
    { id: 2, album: 'Dark Horse', artist: 'Nickelback', image:'/img/beverage2.jpg' },
    { id: 3, album: 'Someday', artist: 'Nickelback', image:'/img/beverage3.jpg' },
    { id: 3, album: 'Someday', artist: 'Nickelback', image:'/img/beverage3.jpg' },
    { id: 3, album: 'Someday', artist: 'Nickelback', image:'/img/beverage3.jpg' },
    { id: 3, album: 'Someday', artist: 'Nickelback', image:'/img/beverage3.jpg' },
    { id: 3, album: 'Someday', artist: 'Nickelback', image:'/img/beverage3.jpg' },
    { id: 4, album: 'All The Right Reasons', artist: 'Nickelback', image:'/img/beverage3.jpg' }
  ];
  
});
app.controller('FoodCtrl', function($scope) {
  // don't be scared by the image value, its just datauri
  
  $scope.items = [
    { id: 1, album: 'Gotta Be Somebody', artist: 'Nickelback', image:'/img/beverage1.jpg'},
    { id: 2, album: 'Dark Horse', artist: 'Nickelback', image:'/img/beverage2.jpg' },
    { id: 3, album: 'Someday', artist: 'Nickelback', image:'/img/beverage3.jpg' },
    { id: 3, album: 'Someday', artist: 'Nickelback', image:'/img/beverage3.jpg' },
    { id: 3, album: 'Someday', artist: 'Nickelback', image:'/img/beverage3.jpg' },
    { id: 3, album: 'Someday', artist: 'Nickelback', image:'/img/beverage3.jpg' },
    { id: 3, album: 'Someday', artist: 'Nickelback', image:'/img/beverage3.jpg' },
    { id: 4, album: 'All The Right Reasons', artist: 'Nickelback', image:'/img/beverage3.jpg' }
  ];
  
});
app.controller('CartCtrl', function($scope) {
  // don't be scared by the image value, its just datauri
  
  $scope.items = [
    { id: 1, album: 'Gotta Be Somebody', artist: 'Nickelback', image:'/img/beverage1.jpg'},
    { id: 2, album: 'Dark Horse', artist: 'Nickelback', image:'/img/beverage2.jpg' },
    { id: 3, album: 'Someday', artist: 'Nickelback', image:'/img/beverage3.jpg' },
    { id: 3, album: 'Someday', artist: 'Nickelback', image:'/img/beverage3.jpg' },
    { id: 3, album: 'Someday', artist: 'Nickelback', image:'/img/beverage3.jpg' },
    { id: 3, album: 'Someday', artist: 'Nickelback', image:'/img/beverage3.jpg' },
    { id: 3, album: 'Someday', artist: 'Nickelback', image:'/img/beverage3.jpg' },
    { id: 4, album: 'All The Right Reasons', artist: 'Nickelback', image:'/img/beverage3.jpg' }
  ];
  
});