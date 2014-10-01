var app=angular.module('order', ['ionic']);

//app.controller('OrderCtrl', function($scope, $ionicSideMenuDelegate) {
// 
//  $scope.toggleLeft = function() {
//    $ionicSideMenuDelegate.toggleLeft();
//  };
//  
//    
//    
//    
//    
//});
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

//app.controller('BeverageCtrl', function($scope) {
//  // don't be scared by the image value, its just datauri
//  
//  $scope.items = [
//    { id: 1, name: 'Gotta Be Somebody', price: '1', image:'/img/beverage1.jpg'},
//    { id: 2, name: 'Dark Horse', price: '2.24', image:'/img/beverage2.jpg' },
//    { id: 3, name: 'Someday', price: '1.14', image:'/img/beverage3.jpg' },
//    { id: 4, name: 'Someday', price: '1.99', image:'/img/beverage3.jpg' },
//    { id: 5, name: 'Someday', price: '2.99', image:'/img/beverage3.jpg' },
//    { id: 6, name: 'Someday', price: '3.99', image:'/img/beverage3.jpg' },
//    { id: 7, name: 'Someday', price: '4.99', image:'/img/beverage3.jpg' },
//    { id: 8, name: 'All The Right Reasons', artist: 'Nickelback', image:'/img/beverage3.jpg' }
//  ];
//  
//});
//app.controller('FoodCtrl', function($scope) {
//  // don't be scared by the image value, its just datauri
//  
//  $scope.items = [
//    { id: 1, name: 'Gotta Be Somebody', price: '1.8', image:'/img/beverage1.jpg'},
//    { id: 2, name: 'Dark Horse', price: '2.7', image:'/img/beverage2.jpg' },
//    { id: 3, name: 'Someday', price: '4.99', image:'/img/beverage3.jpg' },
//    { id: 4, name: 'Someday', price: '3.99', image:'/img/beverage3.jpg' },
//    { id: 5, name: 'Someday', price: '12.99', image:'/img/beverage3.jpg' },
//    { id: 6, name: 'Someday', price: '3.99', image:'/img/beverage3.jpg' },
//    { id: 7, name: 'Someday', price: '6.99', image:'/img/beverage3.jpg' },
//    { id: 8, name: 'All The Right Reasons', artist: 'Nickelback', image:'/img/beverage3.jpg' }
//  ];
//  
//});
//app.controller('CartCtrl', function($scope) {
//  // don't be scared by the image value, its just datauri
//  
//  $scope.items = [
//    { id: 1, album: 'Gotta Be Somebody', artist: 'Nickelback', image:'/img/beverage1.jpg'},
//    { id: 2, album: 'Dark Horse', artist: 'Nickelback', image:'/img/beverage2.jpg' },
//    { id: 3, album: 'Someday', artist: 'Nickelback', image:'/img/beverage3.jpg' },
//    { id: 4, album: 'Someday', artist: 'Nickelback', image:'/img/beverage3.jpg' },
//    { id: 5, album: 'Someday', artist: 'Nickelback', image:'/img/beverage3.jpg' },
//    { id: 6, album: 'Someday', artist: 'Nickelback', image:'/img/beverage3.jpg' },
//    { id: 7, album: 'Someday', artist: 'Nickelback', image:'/img/beverage3.jpg' },
//    { id: 8, album: 'All The Right Reasons', artist: 'Nickelback', image:'/img/beverage3.jpg' }
//  ];
//  
//});
//app.controller('SideCtrl',function($scope){
//    
//
//
//
//});



app.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('eventmenu', {
      url: "/event",
      abstract: true,
      templateUrl: "event-menu.html"
    })
    .state('eventmenu.home', {
      url: "/home",
      views: {
        'menuContent' :{
          templateUrl: "home.html"
        }
      }
    })
    .state('eventmenu.checkin', {
      url: "/check-in",
      views: {
        'menuContent' :{
          templateUrl: "check-in.html",
          controller: "CheckinCtrl"
        }
      }
    })
    .state('eventmenu.attendees', {
      url: "/attendees",
      views: {
        'menuContent' :{
          templateUrl: "attendees.html",
          controller: "AttendeesCtrl"
        }
      }
    })
    .state('eventmenu.location',{
      url:"/location",
      views:{
        'menuContent' :{
          templateUrl:"location.html",
          controller:"LocationCtrl"

        }


      }


    })
  
  $urlRouterProvider.otherwise("/event/home");
})

app.controller('MainCtrl', function($scope, $ionicSideMenuDelegate) {
  $scope.attendees = [
    { firstname: 'Nicolas', lastname: 'Cage' },
    { firstname: 'Jean-Claude', lastname: 'Van Damme' },
    { firstname: 'Keanu', lastname: 'Reeves' },
    { firstname: 'Steven', lastname: 'Seagal' }
  ];
  
  $scope.toggleLeft = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };
})

app.controller('CheckinCtrl', function($scope) {
  $scope.showForm = true;
  
  $scope.shirtSizes = [
    { text: 'Large', value: 'L' },
    { text: 'Medium', value: 'M' },
    { text: 'Small', value: 'S' }
  ];
  
  $scope.attendee = {};
  $scope.submit = function() {
    if(!$scope.attendee.firstname) {
      alert('Info required');
      return;
    }
    $scope.showForm = false;
    $scope.attendees.push($scope.attendee);
  };
  
})

app.controller('AttendeesCtrl', function($scope) {
  
  $scope.activity = [];
  $scope.arrivedChange = function(attendee) {
    var msg = attendee.firstname + ' ' + attendee.lastname;
    msg += (!attendee.arrived ? ' has arrived, ' : ' just left, '); 
    msg += new Date().getMilliseconds();
    $scope.activity.push(msg);
    if($scope.activity.length > 3) {
      $scope.activity.splice(0, 1);
    }
  };
  
});

app.controller('LocationCtrl', function($scope) {
  
   var myCenter=new google.maps.LatLng(-36.852619, 174.771612);

        function initialize()
        {
        var mapProp = {
          center:myCenter,
          zoom:17,
          mapTypeId:google.maps.MapTypeId.ROADMAP
          };

        var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);

        var marker=new google.maps.Marker({
          position:myCenter,
          });

        marker.setMap(map);
        }

        
        
        google.maps.event.addDomListener(window, 'load', initialize);
 
});

