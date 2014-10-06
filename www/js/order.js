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




app.controller('BeverageCtrl', function($scope) {

  $scope.groups = [];
 
    $scope.groups = [
    {
      name:"EXPRESSO" ,
      items: [   { id: 1, name: 'Gotta Be Somebody', price: '1.8', image:'/img/beverage1.jpg'},
    { id: 2, name: 'Dark Horse', price: '2.7', image:'/img/beverage2.jpg' },
    { id: 3, name: 'Someday', price: '4.99', image:'/img/beverage3.jpg' },
    { id: 4, name: 'Someday', price: '3.99', image:'/img/beverage3.jpg' },
    { id: 5, name: 'Someday', price: '12.99', image:'/img/beverage3.jpg' },
    { id: 6, name: 'Someday', price: '3.99', image:'/img/beverage3.jpg' },
    { id: 7, name: 'Someday', price: '6.99', image:'/img/beverage3.jpg' },
    { id: 8, name: 'All The Right Reasons', artist: 'Nickelback', image:'/img/beverage3.jpg' }
        ]
    },
    {
    
      name: "FEAPPUCCINO",
      items: [   { id: 1, name: 'Gotta Be Somebody', price: '1.8', image:'/img/beverage1.jpg'},
    { id: 2, name: 'Dark Horse', price: '2.7', image:'/img/beverage2.jpg' },
    { id: 3, name: 'Someday', price: '4.99', image:'/img/beverage3.jpg' },
    { id: 4, name: 'Someday', price: '3.99', image:'/img/beverage3.jpg' },
    { id: 5, name: 'Someday', price: '12.99', image:'/img/beverage3.jpg' },
    { id: 6, name: 'Someday', price: '3.99', image:'/img/beverage3.jpg' },
    { id: 7, name: 'Someday', price: '6.99', image:'/img/beverage3.jpg' },
    { id: 8, name: 'All The Right Reasons', artist: 'Nickelback', image:'/img/beverage3.jpg' }
        ]
    
    
    },
    {
      name: "TEAS",
      items: [   { id: 1, name: 'Gotta Be Somebody', price: '1.8', image:'/img/beverage1.jpg'},
    { id: 2, name: 'Dark Horse', price: '2.7', image:'/img/beverage2.jpg' },
    { id: 3, name: 'Someday', price: '4.99', image:'/img/beverage3.jpg' },
    { id: 4, name: 'Someday', price: '3.99', image:'/img/beverage3.jpg' },
    { id: 5, name: 'Someday', price: '12.99', image:'/img/beverage3.jpg' },
    { id: 6, name: 'Someday', price: '3.99', image:'/img/beverage3.jpg' },
    { id: 7, name: 'Someday', price: '6.99', image:'/img/beverage3.jpg' },
    { id: 8, name: 'All The Right Reasons', artist: 'Nickelback', image:'/img/beverage3.jpg' }
        ]
    
    
    },
    {
      name: "CHCO DRINKS",
      items: [   { id: 1, name: 'Gotta Be Somebody', price: '1.8', image:'/img/beverage1.jpg'},
    { id: 2, name: 'Dark Horse', price: '2.7', image:'/img/beverage2.jpg' },
    { id: 3, name: 'Someday', price: '4.99', image:'/img/beverage3.jpg' },
    { id: 4, name: 'Someday', price: '3.99', image:'/img/beverage3.jpg' },
    { id: 5, name: 'Someday', price: '12.99', image:'/img/beverage3.jpg' },
    { id: 6, name: 'Someday', price: '3.99', image:'/img/beverage3.jpg' },
    { id: 7, name: 'Someday', price: '6.99', image:'/img/beverage3.jpg' },
    { id: 8, name: 'All The Right Reasons', artist: 'Nickelback', image:'/img/beverage3.jpg' }
        ]
    
    
    }
    ];
    
      
    
    
  
  
  /*
   * if given group is the selected group, deselect it
   * else, select the given group
   */
  $scope.toggleGroup = function(group) {
    if ($scope.isGroupShown(group)) {
      $scope.shownGroup = null;
    } else {
      $scope.shownGroup = group;
    }
  };
  $scope.isGroupShown = function(group) {
    return $scope.shownGroup === group;
  };
  
});
  


app.controller('FoodCtrl', function($scope) {
  // don't be scared by the image value, its just datauri
  
  $scope.items = [
    { id: 1, name: 'Gotta Be Somebody', price: '1.8', image:'/img/beverage1.jpg'},
    { id: 2, name: 'Dark Horse', price: '2.7', image:'/img/beverage2.jpg' },
    { id: 3, name: 'Someday', price: '4.99', image:'/img/beverage3.jpg' },
    { id: 4, name: 'Someday', price: '3.99', image:'/img/beverage3.jpg' },
    { id: 5, name: 'Someday', price: '12.99', image:'/img/beverage3.jpg' },
    { id: 6, name: 'Someday', price: '3.99', image:'/img/beverage3.jpg' },
    { id: 7, name: 'Someday', price: '6.99', image:'/img/beverage3.jpg' },
    { id: 8, name: 'All The Right Reasons', artist: 'Nickelback', image:'/img/beverage3.jpg' }
  ];
  
});
app.controller('CartCtrl', function($scope) {
  // don't be scared by the image value, its just datauri
  
  $scope.items = [
    { id: 1, album: 'Gotta Be Somebody', artist: 'Nickelback', image:'/img/beverage1.jpg'},
    { id: 2, album: 'Dark Horse', artist: 'Nickelback', image:'/img/beverage2.jpg' },
    { id: 3, album: 'Someday', artist: 'Nickelback', image:'/img/beverage3.jpg' },
    { id: 4, album: 'Someday', artist: 'Nickelback', image:'/img/beverage3.jpg' },
    { id: 5, album: 'Someday', artist: 'Nickelback', image:'/img/beverage3.jpg' },
    { id: 6, album: 'Someday', artist: 'Nickelback', image:'/img/beverage3.jpg' },
    { id: 7, album: 'Someday', artist: 'Nickelback', image:'/img/beverage3.jpg' },
    { id: 8, album: 'All The Right Reasons', artist: 'Nickelback', image:'/img/beverage3.jpg' }
  ];
  
});

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
      templateUrl: "event-menu.html",
           
           
    })
    .state('eventmenu.home', {
      url: "/home",
      views: {
        'menuContent' :{
          templateUrl: "home.html"
       
        
        }
      }
    })
    .state('eventmenu.account', {
      url: "/account",
      views: {
        'menuContent' :{
          templateUrl: "account.html",
          controller: "AccountCtrl"
        }
      }
    })
     .state('eventmenu.customized', {
      url: "/customized",
      views: {
        'menuContent' :{
          templateUrl: "customized.html",
         
        }
      }
    })
    .state('eventmenu.checkout', {
      url: "/checkout",
      views: {
        'menuContent' :{
          templateUrl: "checkout.html",
            controller:"ModalCtrl"
        }
      }
    })
   .state('eventmenu.payment', {
      url: "/payment",
      views: {
        'menuContent' :{
          templateUrl: "payment.html",
          controller: "ModalCtrl"
        }
      }
    })
   .state('eventmenu.success', {
      url: "/success",
      views: {
        'menuContent' :{
          templateUrl: "success.html",
          controller: "ModalCtrl"
        }
      }
    })
    .state('eventmenu.favourite', {
      url: "/favourite",
      views: {
        'menuContent' :{
          templateUrl: "favourite.html",
          controller: "FavouriteCtrl"
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

app.controller('AccountCtrl', function($scope) {
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

app.controller('FavouriteCtrl', function($scope) {
  
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


  
 app.controller('LocationCtrl', function($scope, $ionicLoading, $compile) {
      function initialize() {
        var myLatlng = new google.maps.LatLng(-36.859927, 174.760529);
        
        var mapOptions = {
          center: myLatlng,
          zoom: 16,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("map"),
            mapOptions);
        
        //Marker + infowindow + angularjs compiled ng-click
        var contentString = "<div><a ng-click='clickTest()'>Click me!</a></div>";
        var compiled = $compile(contentString)($scope);

        var infowindow = new google.maps.InfoWindow({
          content: compiled[0]
        });

        var marker = new google.maps.Marker({
          position: myLatlng,
          map: map,
          title: 'fsdfsdfsdf'
        });

        google.maps.event.addListener(marker, 'click', function() {
          infowindow.open(map,marker);
        });

        $scope.map = map;
      }
     
     
     
     
      google.maps.event.addDomListener(window, 'load', initialize);
      
      $scope.centerOnMe = function() {
        if(!$scope.map) {
          return;
        }

        $scope.loading = $ionicLoading.show({
          content: 'Getting current location...',
          showBackdrop: false
        });

        navigator.geolocation.getCurrentPosition(function(pos) {
          $scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
          $ionicLoading.hide();
        }, function(error) {
          alert('Unable to get location: ' + error.message);
        });
      };
      
      $scope.clickTest = function() {
        alert('Example of infowindow with ng-click')
      };
      
    });
     
 
app.controller('ModalCtrl', function($scope, $ionicModal) {
  
  
  $scope.adds = [
    { name: 'Gordon Freeman',
      price: 2.00,
      quantity: 0,
      size:'',
     image:'/img/beverage3.jpg'
    },
    { name: 'Barney Calhoun',
      price: 2.00,
      quantity: 0,
      size:'',
     image:'/img/beverage3.jpg'
    },
    { name: 'Lamarr the Headcrab',
      price: 13,
      quantity: 0,
      size:'',
     image:'/img/beverage3.jpg'
    },
  ];

  $ionicModal.fromTemplateUrl('modal.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });
  
  $scope.createContact = function(u) {        
    $scope.adds[0].size=u.size;
    $scope.adds[0].quantity=u.quantity;
    $scope.modal.hide();
    console.log($scope.adds);
  };

});



app.controller('testCtrl', function($scope) {
  
  $scope.data = {
    showDelete: false
  };
  
  $scope.edit = function(item) {
    alert('Edit Item: ' + item.id);
  };
  $scope.share = function(item) {
    alert('Share Item: ' + item.id);
  };
  
  $scope.moveItem = function(item, fromIndex, toIndex) {
    $scope.items.splice(fromIndex, 1);
    $scope.items.splice(toIndex, 0, item);
  };
  
  $scope.onItemDelete = function(item) {
    $scope.items.splice($scope.items.indexOf(item), 1);
  };
  
  $scope.items = [
    { name: 'Gordon Freeman',
      price: 2.00,
      quantity: 1,
      size:'',
     image:'/img/beverage3.jpg'
    },
    { name: 'Barney Calhoun',
      price: 2.00,
      quantity: 3,
      size:'',
     image:'/img/beverage3.jpg'
    },
    { name: 'Lamarr the Headcrab',
      price: 13,
      quantity: 10,
      size:'',
     image:'/img/beverage3.jpg'
    },
      { name: 'Gordon Freeman',
      price: 2.00,
      quantity: 6,
      size:'',
     image:'/img/beverage3.jpg'
    },
    { name: 'Barney Calhoun',
      price: 2.00,
      quantity: 0,
      size:'',
     image:'/img/beverage3.jpg'
    },
    { name: 'Lamarr the Headcrab',
      price: 13,
      quantity: 0,
      size:'',
     image:'/img/beverage3.jpg'
    },
    { name: 'Gordon Freeman',
      price: 2.00,
      quantity: 0,
      size:'',
     image:'/img/beverage3.jpg'
    },
    { name: 'Barney Calhoun',
      price: 2.00,
      quantity: 0,
      size:'',
     image:'/img/beverage3.jpg'
    },
    { name: 'Lamarr the Headcrab',
      price: 13,
      quantity: 0,
      size:'',
     image:'/img/beverage3.jpg'
    },
  ];
  
});
