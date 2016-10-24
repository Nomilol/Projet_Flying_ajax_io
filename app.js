$(document).ready(function(){

	"use strict"
	$('#showData').on('click', function(){
		$.ajax({
			url : 'http://192.168.1.21:3000/places',
			type : 'GET',
			dataType : 'HTML',
			success : function(resultat){
				$.get("http://192.168.1.21:3000/places", function(response){
				for (var i = 0; i < response.places.length; i++) {
					response.places[i]
					$("#data").append("<li>"+response.places[i].nom+"</li>")
				}
				console.log(resultat);
				 // $('#data').html(resultat);

				})
				// var meteo = 'http://api.openweathermap.org/data/2.5/forecast/city?id=KEY HERE';

			}
		})


	});




});