google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawBarColors);

function drawBarColors() {
      var data = google.visualization.arrayToDataTable([
        ['Intervalos de idades', 'Mulheres', 'Homens'],
        ['0 a 23 meses', 16, 16],
        ['1 a 18 anos', 7, 5],
        ['19 a 44 anos', 14, 13],
        ['45 a 64 anos', 27, 26],
        ['65 ou mais anos', 30, 32]
      ]);

      var options = {
          height: 400,
          width: 680,
        title: 'Taxa de visitas domiciliárias médicas por idade num ano',
        chartArea: {width: '60%'},
        colors: ['#cc6b5e', '#4985a8'],
        hAxis: {
          title: 'Número de visitas totais',
          minValue: 0,
        },
        vAxis: {
          title: 'Intervalos de idades',
        }
      };

      var responsiveOptions = [
        ['screen and (max-width: 700px)', {
          height:200,
          width:340,
        }]
      ];

      var chart = new google.visualization.BarChart(document.getElementById('chart_div5'));
      chart.draw(data, options);
    }