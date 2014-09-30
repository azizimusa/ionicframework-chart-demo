angular.module('barchart.controllers', [])

.directive('morrisbar', function() {
  console.info('directive graph-bar');
  return {
    restrict: 'E',
    scope: {
      onCreate: '&'
    },
    link: function ($scope, $element, $attr) {

      function initialize() {
        Morris.Bar({
          element: 'bar-example',
          data: [
            { y: '2006', a: 100, b: 90 },
            { y: '2007', a: 75,  b: 65 },
            { y: '2008', a: 50,  b: 40 },
            { y: '2009', a: 75,  b: 65 },
            { y: '2010', a: 50,  b: 40 },
            { y: '2011', a: 75,  b: 65 },
            { y: '2012', a: 100, b: 90 }
          ],
          xkey: 'y',
          ykeys: ['a', 'b'],
          labels: ['Series A', 'Series B']
        });
      } // end fn initialize

      if (document.readyState === "complete") {
        console.log('initialize');
        initialize();
      } else {
        console.info('event.addDomListener');
        initialize();
        // Morris.Donut.event.addDomListener(window, 'load', initialize);
      }
    }
  }
})

.directive('chartjsbar', function() {
  // var toDestroy = angular.element(document.querySelector('#morris'));
  // toDestroy.remove();
  console.info('directive chartjs-bar');
  return {
    restrict: 'E',
    scope: {
      onCreate: '&'
    },
    link: function ($scope, $element, $attr) {

      function initialize() {
        var randomScalingFactor = function(){ return Math.round(Math.random()*100)};
        var barChartData = {
      		labels : ["January","February","March","April","May","June","July"],
      		datasets : [
      			{
      				fillColor : "rgba(220,220,220,0.5)",
      				strokeColor : "rgba(220,220,220,0.8)",
      				highlightFill: "rgba(220,220,220,0.75)",
      				highlightStroke: "rgba(220,220,220,1)",
      				data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
      			},
      			{
      				fillColor : "rgba(151,187,205,0.5)",
      				strokeColor : "rgba(151,187,205,0.8)",
      				highlightFill : "rgba(151,187,205,0.75)",
      				highlightStroke : "rgba(151,187,205,1)",
      				data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
      			}
      		]

      	}

      var ctx = $("#chart-area").get(0).getContext("2d");
      var myNewChart = new Chart(ctx).Bar(barChartData, {responsive : true});
      } // end fn initialize

      if (document.readyState === "complete") {
        console.log('initialize');
        initialize();
      } else {
        console.info('event.addDomListener');
      }
    }
  }
})

.directive('canvasjsbar', function() {
  console.info('directive canvasjs-bar');
  return {
    restrict: 'E',
    scope: {
      onCreate: '&'
    },
    link: function ($scope, $element, $attr) {


      if (document.readyState === "complete") {
        console.log('initialize');

        var chart = new CanvasJS.Chart("chartContainer",
        {
          title:{
            text: "Olympic Medals of all Times (till 2012 Olympics)"
          },
          data: [
          {
            type: "bar",
            dataPoints: [
            { y: 198, label: "Italy"},
            { y: 201, label: "China"},
            { y: 202, label: "France"},
            { y: 236, label: "Great Britain"},
            { y: 395, label: "Soviet Union"},
            { y: 957, label: "USA"}
            ]
          },
          {
            type: "bar",
            dataPoints: [
            { y: 166, label: "Italy"},
            { y: 144, label: "China"},
            { y: 223, label: "France"},
            { y: 272, label: "Great Britain"},
            { y: 319, label: "Soviet Union"},
            { y: 759, label: "USA"}
            ]
          },
          {
            type: "bar",
            dataPoints: [
            { y: 185, label: "Italy"},
            { y: 128, label: "China"},
            { y: 246, label: "France"},
            { y: 272, label: "Great Britain"},
            { y: 296, label: "Soviet Union"},
            { y: 666, label: "USA"}
            ]
          }
          ]
        });

        chart.render();
      } else {
        console.info('event.addDomListener');
      }
    }
  }
})

.controller('BarCtrl', function($scope,$stateParams) {
  $scope.chartProvider = $stateParams.chartProvider;
})
