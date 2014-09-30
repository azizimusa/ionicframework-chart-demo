angular.module('demoloni', ['ionic','donut.controllers', 'barchart.controllers', 'linechart.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

    .state('tab', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html"
    })

    .state('tab.donut', {
      url: '/donutchart/:chartProvider',
      views: {
        'tab-donut': {
          templateUrl: 'templates/donutchart.html',
          controller: 'DonutCtrl'
        }
      }
    })
    .state('tab.bar', {
      url: '/barchart/:chartProvider',
      views: {
        'tab-bar': {
          templateUrl: 'templates/barchart.html',
          controller: 'BarCtrl'
        }
      }
    })
    .state('tab.line', {
      url: '/linechart/:chartProvider',
      views: {
        'tab-line': {
          templateUrl: 'templates/linechart.html',
          controller: 'LineCtrl'
        }
      }
    });
  $urlRouterProvider.otherwise('/tab/donutchart/morris');
})

.controller('popover', function($scope, $ionicPopover, $state) {
  $ionicPopover.fromTemplateUrl('popover.html', {
    scope: $scope,
  }).then(function(popover) {
    $scope.popover = popover;
  });
  $scope.openPopover = function($event) {
    $scope.popover.show($event);
  };
  $scope.closePopover = function() {
    $scope.popover.hide();
  };
  //Cleanup the popover when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.popover.remove();
  });
  // Execute action on hide popover
  $scope.$on('popover.hidden', function() {
    // Execute action
  });
  // Execute action on remove popover
  $scope.$on('popover.removed', function() {
    // Execute action
  });

  $scope.example = [
  {
    id: "1",
    title: "MorrisJS Chart",
    url: "morris"
  },
  {
    id: "2",
    title: "ChartJS Chart",
    url: "chartjs"
  },
  {
    id: "3",
    title: "CanvasJS Chart",
    url: "canvasjs"
  }
  ];

  if($state.is('tab.donut')){
    $scope.chartType = "donutchart";
  }
  else if($state.is('tab.bar')){
    $scope.chartType = "barchart";
  }
  else if($state.is('tab.line')){
    $scope.chartType = "linechart";
  }
})

// .directive('a', function(){
//   console.info("init directive button");
//   return {
//     restrict: 'A',
//     link: function(scope,elm,attrs){
//       elm.on('touch', function(e){
//         // window.plugins.deviceFeedback.acoustic();
//         console.info("playing native click sound");
//       });
//     }
//   }
// })
