//Sampel Pie Doughnut Chart
var PieDoughnutChartSampleData = [
    {
        value: 100,
        color:"#F7464A",
        highlight: "#FF5A5E",
        label: "Fizeram check-in"
    },
    {
        value: 50,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "Não fizeram check-in"
    },
]

 window.onload = function() {
 	var part;

	$.ajax({
		url: "http://www.eneeel.com/aplicativo/numeroParticipantes.php", 
		type: "POST",
		//headers: {'X-Requested-With': 'XMLHttpRequest'},
		crossDomain: true,
        //dataType: 'jsonp',
		success: function(data) 
		{
				console.log(data);
				part = data.split(",");
				PieDoughnutChartSampleData[0].value = part[0];
				PieDoughnutChartSampleData[1].value = part[1];

				window.DoughnutChartSample = new Chart(document.getElementById("doughnut-chart-sample").getContext("2d")).Pie(PieDoughnutChartSampleData,{
   responsive:true
  });
			
		}
	});

  
  

 };
 