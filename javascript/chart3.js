google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Intervalos', 'Percent'],
          ['0 a 23 meses', 1550],
          ['1 a 18 anos',  1427],
          ['19 a 44 anos', 3651],
          ['45 a 64 anos',    5212],
          ['65 ou mais anos', 7120],
        ]);

        var options = {
          title: 'Taxa de marcação de consultas por idade',
          colors: ['#00476c', '#035d8f', '2787b7', '#68b3da', '#aed3e5'],
          height: 400,
          width: 680,
        };

        var chart = new google.visualization.PieChart(document.getElementById('chart_div3'));
        chart.draw(data, options);
      }
