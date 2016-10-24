(function(){
	$('#showData').on('click', function(){
		$.ajax({
			url : 'http://192.168.1.21:3000/places',
			type : 'GET',
			dataType : 'HTML',
			success : function(resultat){
				$('#data').html(resultat);
			}
		})
	})





















})();