teambuild.controller('results', ['$scope', '$http', function( $scope, $http ){

  google.charts.load('current', {'packages':['corechart', 'bar']});
  google.charts.setOnLoadCallback( function(){ drawChart( ['bar'] ) } );

  function drawChart( chartTypes ) {
    if( chartTypes ){
      $.each( chartTypes, function( i, type ){
        switch( type ){
          case 'bar':
            var data = [
              ['Year', 'Ranking'],
              ['Nate', 80],
              ['Emil', 50],
              ['James', 15],
              ['Ron', 85]
            ];
            var options = {
              animation: {startup: true, duration: 5000, easing: 'inAndOut'},
              chartArea: {left: 0, top: 0, width: '100%', height: '100%'},
              bars: 'horizontal', // Required for Material Bar Charts.
              legend: {position: 'none'},
              vAxis: {title: ''},
              title: 'Most well-known',
              subtitle: 'Are you mysterious or an open book?',
            };
            data = google.visualization.arrayToDataTable( data );
            var chart = new google.charts.Bar( document.getElementById('barchart') );
            chart.draw(data, google.charts.Bar.convertOptions(options));
            break;
          case 'pie':
            var data = [
              ['Name', 'Ranking'],
              ['Nate',      50],
              ['Emil',      80],
              ['James',     40],
              ['Ron',       65],
              ['Don',       80]
            ];
            var options = {
              // legend: {position: 'none'},
              chartArea: {left: 0, top: 0, width: '100%', height: '100%'},
              pieHole: 0.4,
            };
            data = google.visualization.arrayToDataTable( data );
            var chart = new google.visualization.PieChart( document.getElementById('piechart') );
            chart.draw(data, options);
            break;
        }
      });
    }
  }

}]);
