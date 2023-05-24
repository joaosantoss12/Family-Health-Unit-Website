google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
            ['Intervalos', 'Percent'],
            ['0 a 23 meses', 50],
            ['1 a 18 anos',  29],
            ['19 a 44 anos', 35],                      // Acrescentar ou retirar valores iguais em cada parâmetro //
            ['45 a 64 anos',    40],
            ['65 ou mais anos', 35],
        ]);

        var options = {
          height: 400,
          width: 680,
          title: 'Custo médio total por consulta médica em euros',
          colors: ['#b75e56', '#d27c7b', 'e6a4a5', '#f2bcba', '#f6d3d1'],
          pieHole: 0.3,
  
        };

        var chart = new google.visualization.PieChart(document.getElementById('chart_div4'));
        chart.draw(data, options);
      }