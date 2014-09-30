angular.module('linechart.controllers', [])

.directive('morrisline', function() {
  console.info('directive morris-line');
  return {
    restrict: 'E',
    scope: {
      onCreate: '&'
    },
    link: function ($scope, $element, $attr) {

      function initialize() {
        Morris.Line({
          element: 'line-example',
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
        // Morris.Donut.event.addDomListener(window, 'load', initialize);
      }
    }
  }
})

.directive('chartjsline', function() {
  // var toDestroy = angular.element(document.querySelector('#morris'));
  // toDestroy.remove();
  console.info('directive chartjs-line');
  return {
    restrict: 'E',
    scope: {
      onCreate: '&'
    },
    link: function ($scope, $element, $attr) {

      function initialize() {
        var randomScalingFactor = function(){ return Math.round(Math.random()*100)};
    		var lineChartData = {
    			labels : ["January","February","March","April","May","June","July"],
    			datasets : [
    				{
    					label: "My First dataset",
    					fillColor : "rgba(220,220,220,0.2)",
    					strokeColor : "rgba(220,220,220,1)",
    					pointColor : "rgba(220,220,220,1)",
    					pointStrokeColor : "#fff",
    					pointHighlightFill : "#fff",
    					pointHighlightStroke : "rgba(220,220,220,1)",
    					data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
    				},
    				{
    					label: "My Second dataset",
    					fillColor : "rgba(151,187,205,0.2)",
    					strokeColor : "rgba(151,187,205,1)",
    					pointColor : "rgba(151,187,205,1)",
    					pointStrokeColor : "#fff",
    					pointHighlightFill : "#fff",
    					pointHighlightStroke : "rgba(151,187,205,1)",
    					data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
    				}
    			]

    		}

        var ctx = $("#chart-area").get(0).getContext("2d");
        var myNewChart = new Chart(ctx).Line(lineChartData, {responsive : true});
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

.directive('canvasjsline', function() {
  console.info('directive canvasjs-line');
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
          text: "Earthquakes - per month"
          },
           data: [
          {
            type: "line",

            dataPoints: [
            { x: new Date(2012, 00, 1), y: 450 },
            { x: new Date(2012, 01, 1), y: 414 },
            { x: new Date(2012, 02, 1), y: 520 },
            { x: new Date(2012, 03, 1), y: 460 },
            { x: new Date(2012, 04, 1), y: 450 },
            { x: new Date(2012, 05, 1), y: 500 },
            { x: new Date(2012, 06, 1), y: 480 },
            { x: new Date(2012, 07, 1), y: 480 },
            { x: new Date(2012, 08, 1), y: 410 },
            { x: new Date(2012, 09, 1), y: 500 },
            { x: new Date(2012, 10, 1), y: 480 },
            { x: new Date(2012, 11, 1), y: 510 }
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

.controller('LineCtrl', function($scope,$stateParams) {
  $scope.chartProvider = $stateParams.chartProvider;
})
