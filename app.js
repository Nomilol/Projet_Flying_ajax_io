$(document).ready(function(){

	"use strict"
	$('#showData').on('click', function(){
		$.ajax({
			url : 'http://192.168.1.21:3000/places',
			type : 'GET',
			dataType : 'HTML',
			success : function(resultat){
				// on recupère les données de l'url
				$.get("http://192.168.1.21:3000/places", function(response){
					// on parcourt le tableau
					for (var i = 0; i < response.places.length; i++) {
						response.places[i]
						console.log(response.places[i]);
						$("#data").append("<li>"+response.places[i].nom+"</li>")

					}

					console.log(resultat);
					 // $('#data').html(resultat);


					})


			},




			
		})


	});

				// var meteo = 'http://api.openweathermap.org/data/2.5/forecast/city?id=KEY HERE';


				$('#showMeteo').on('click', function(){
					$.ajax({
						url :"openweathermap.org/find?q=toulouse",
						type : 'GET',
						dataType : 'HTML',

						success : function(resultat){
				// on recupère les données de l'url
				$.get("openweathermap.org/find?q=toulouse", function(response)





			});


			});
				});